import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const toolsPath = resolve(__dirname, '../src/data/tools.ts');
const source = readFileSync(toolsPath, 'utf-8');

const urlRegex = /url:\s*"(https?:\/\/[^"]+)"/g;
const urls = [];
let match;
while ((match = urlRegex.exec(source)) !== null) {
  urls.push(match[1]);
}

const TIMEOUT_MS = 8000;
const CONCURRENCY = 5;

// 403/401/405 = auth-gated or HEAD-blocked but URL exists → treat as ok
const AUTH_STATUSES = new Set([401, 403, 405]);

async function fetchWithTimeout(url, method) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 link-checker' },
    });
    clearTimeout(timer);
    return { status: res.status };
  } catch (err) {
    clearTimeout(timer);
    return { status: null, reason: err.name === 'AbortError' ? 'TIMEOUT' : err.message };
  }
}

async function checkUrl(url) {
  const head = await fetchWithTimeout(url, 'HEAD');

  if (AUTH_STATUSES.has(head.status)) {
    return { url, status: head.status, ok: true, note: 'auth-gated' };
  }

  // HEAD 回 404 或不支援時，用 GET 再確認
  if (head.status === 404 || head.status === 405 || head.status === null) {
    const get = await fetchWithTimeout(url, 'GET');
    if (get.status !== null && get.status < 400) {
      return { url, status: get.status, ok: true, note: 'HEAD-blocked' };
    }
    return { url, status: get.status, ok: false, reason: get.reason ?? `HTTP ${get.status}` };
  }

  return { url, status: head.status, ok: head.status < 400 };
}

async function runBatch(items, fn, concurrency) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(fn));
    results.push(...batchResults);
    process.stdout.write(`\r進度: ${Math.min(i + concurrency, items.length)}/${items.length}`);
  }
  return results;
}

console.log(`檢查 ${urls.length} 個連結...\n`);
const results = await runBatch(urls, checkUrl, CONCURRENCY);

const failed = results.filter(r => !r.ok);
const passed = results.filter(r => r.ok);

console.log(`\n\n✅ 正常: ${passed.length}`);
console.log(`❌ 異常: ${failed.length}\n`);

if (failed.length > 0) {
  console.log('--- 無效連結 ---');
  for (const r of failed) {
    const label = r.reason ?? `HTTP ${r.status}`;
    console.log(`  ${label.padEnd(12)} ${r.url}`);
  }
  process.exit(1);
}
