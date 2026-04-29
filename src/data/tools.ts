import { Category } from '../types';

export const defaultCategories: Category[] = [
  {
    id: "ai-models",
    title: "Models",
    color: "bg-blue-500", // 藍色 = 溝通、對話、智慧
    bookmarks: [
      {
        id: "chatgpt",
        title: "ChatGPT",
        url: "https://platform.openai.com/api-keys",
        quotaInfo: "OpenAI API Key 管理",
      },
      {
        id: "gemini",
        title: "Gemini",
        url: "https://aistudio.google.com/api-keys",
        quotaInfo: "Google AI Studio API Key 管理",
      },
      {
        id: "openrouter",
        title: "OpenRouter",
        url: "https://openrouter.ai/settings/keys",
        quotaInfo: "聚合多種 AI 模型 API Key 管理",
      },
      {
        id: "nvidia-build",
        title: "NVIDIA Build",
        url: "https://build.nvidia.com/settings/api-keys",
        quotaInfo: "NVIDIA NIM API Key 管理",
      },
      {
        id: "grok",
        title: "Grok",
        url: "https://console.x.ai/",
        quotaInfo: "xAI API Key 管理",
      },
      {
        id: "groq",
        title: "Groq",
        url: "https://console.groq.com/keys",
        quotaInfo: "永久免費，高速推論，有 rate limit",
      },
      {
        id: "huggingface",
        title: "Hugging Face",
        url: "https://huggingface.co/settings/tokens",
        quotaInfo: "永久免費 Serverless Inference API",
      },
      {
        id: "mistral-ai",
        title: "Mistral AI",
        url: "https://console.mistral.ai/api-keys",
        quotaInfo: "永久免費層，歐洲頂尖模型",
      },
      {
        id: "cerebras",
        title: "Cerebras",
        url: "https://cloud.cerebras.ai/platform",
        quotaInfo: "永久免費，Llama 系列，速度快",
      },
    ],
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    color: "bg-emerald-600", // 翠綠色 = 智能代理、自動執行
    bookmarks: [
      {
        id: "hermes",
        title: "Hermes Agent",
        url: "https://hermes-agent.nousresearch.com/",
        quotaInfo: "開源的自主 AI Agent 框架",
      },
      {
        id: "openclaw",
        title: "OpenClaw",
        url: "https://openclaw.ai",
        quotaInfo: "開源個人 AI 助理，支援多種通訊軟體",
      },
      {
        id: "anygen",
        title: "AnyGen",
        url: "https://www.anygen.io",
        quotaInfo: "每日可獲取新積分: 200點",
        appUrl: "https://www.anygen.io/share/3SzLK5N3thOa0PfO3HGtYl?share_id=7593315276813242078",
      },
      {
        id: "manus",
        title: "Manus",
        url: "https://manus.im",
        quotaInfo: "每日可獲取新積分: 300點",
      },
      {
        id: "langchain",
        title: "LangChain",
        url: "https://langchain.com",
        quotaInfo: "開源框架免費使用",
      },
      {
        id: "genspark",
        title: "Genspark",
        url: "https://www.genspark.ai/",
        quotaInfo: "100 credits/day",
      },
      {
        id: "crew-ai",
        title: "CrewAI",
        url: "https://crewai.com",
        quotaInfo: "免費版有使用限制",
      },
      {
        id: "autogen",
        title: "AutoGen",
        url: "https://microsoft.github.io/autogen",
        quotaInfo: "微軟開源專案",
      },
      {
        id: "lobechat",
        title: "LobeChat",
        url: "https://lobechat.com",
        quotaInfo: "開源平台，支援雲端或自架",
      },
      {
        id: "langgraph",
        title: "LangGraph",
        url: "https://langchain-ai.github.io/langgraph",
        quotaInfo: "用圖結構編排多 Agent，開源免費",
      },
      {
        id: "owl-agent",
        title: "OWL",
        url: "https://github.com/camel-ai/owl",
        quotaInfo: "多 Agent 協作框架，開源免費",
      },
      {
        id: "pydantic-ai",
        title: "pydantic-ai",
        url: "https://ai.pydantic.dev",
        quotaInfo: "類型安全的 Python Agent 框架",
      },
      {
        id: "copilotkit",
        title: "CopilotKit",
        url: "https://copilotkit.ai",
        quotaInfo: "將 AI Copilot 嵌入 React 應用",
      },
      {
        id: "awesome-agents",
        title: "Awesome Agents",
        url: "https://github.com/kyrolabs/awesome-agents",
        quotaInfo: "100+ 開源 Agent 工具精選清單",
      },
    ],
  },
  {
    id: "ide",
    title: "IDE",
    color: "bg-slate-600", // 石板灰 = 工具、穩定、專業
    bookmarks: [
      {
        id: "vscode",
        title: "Visual Studio Code",
        url: "https://code.visualstudio.com",
        quotaInfo: "完全免費使用",
      },
      {
        id: "antigravity",
        title: "Antigravity",
        url: "https://antigravity.google/",
        quotaInfo: "Generous weekly rate limits",
      },
      {
        id: "codex",
        title: "Codex",
        url: "https://openai.com/zh-Hant/codex/",
        quotaInfo: "Free / Go $8 / Plus $20",
      },
      {
        id: "kiro-dev",
        title: "Kiro.dev",
        url: "https://kiro.dev",
        quotaInfo: "50 credits",
      },
      {
        id: "warp-dev",
        title: "Warp.dev",
        url: "https://warp.dev",
        quotaInfo: "免費版有功能限制",
      },
      {
        id: "cursor",
        title: "Cursor",
        url: "https://cursor.sh",
        quotaInfo: "AI 原生編輯器",
      },
      {
        id: "windsurf",
        title: "Windsurf",
        url: "https://codeium.com/windsurf",
        quotaInfo: "AI-first IDE，免費使用",
      },
      {
        id: "claude-code-cli",
        title: "Claude Code",
        url: "https://claude.ai/code",
        quotaInfo: "Anthropic 命令列 AI 編程 agent",
      },
      {
        id: "aider",
        title: "Aider",
        url: "https://aider.chat",
        quotaInfo: "終端機 AI 結對編程工具，開源免費",
      },
    ],
  },
  {
    id: "ide-extensions",
    title: "IDE Extensions",
    color: "bg-zinc-500", // 鋅灰色 = 擴展、插件、增強
    bookmarks: [
      {
        id: "opencode-ai",
        title: "OpenCode",
        url: "https://opencode.ai",
        quotaInfo: "The open source AI coding agent",
      },
      {
        id: "github-copilot",
        title: "GitHub Copilot",
        url: "https://github.com/features/copilot",
        quotaInfo: "免費版每月 2000 次補全",
      },
      {
        id: "continue-dev",
        title: "Continue.dev",
        url: "https://continue.dev",
        quotaInfo: "bring your own API keys",
      },
    ],
  },
  {
    id: "claude-code",
    title: "Claude Code",
    color: "bg-orange-500",
    bookmarks: [
      {
        id: "claude-directory",
        title: "Claude Directory",
        url: "https://code.claude.com/docs/en/claude-directory",
        quotaInfo: "Claude Code 官方 Agent 目錄文件",
      },
      {
        id: "superpowers",
        title: "Superpowers",
        url: "https://github.com/obra/superpowers",
        quotaInfo: "Agentic skills 框架與開發方法論",
      },
      {
        id: "gstack",
        title: "Gstack",
        url: "https://github.com/garrytan/gstack",
        quotaInfo: "YC CEO 的 Claude Code 角色導向 skills 工作流",
      },
      {
        id: "agency-agents",
        title: "Agency Agents",
        url: "https://github.com/msitarzewski/agency-agents",
        quotaInfo: "Claude Code 多 Agent 協作框架",
      },
    ],
  },
  {
    id: "web-data",
    title: "Web Data",
    color: "bg-cyan-600", // 青色 = 數據、網絡、流動
    bookmarks: [
      {
        id: "similarweb",
        title: "SimilarWeb",
        url: "https://www.similarweb.com",
        quotaInfo: "網站流量與競品分析，免費版有限制",
      },
      {
        id: "firecrawl",
        title: "Firecrawl",
        url: "https://firecrawl.dev/agent",
        quotaInfo: "5 free daily runs",
      },
      {
        id: "aptify",
        title: "Aptify",
        url: "https://apify.com/",
        quotaInfo: "$5 to spend in Apify Store",
      },
      {
        id: "browseruse",
        title: "Browser Use",
        url: "https://browser-use.com/",
        quotaInfo: "3 concurrent agents & browsers",
      },
      {
        id: "browseai",
        title: "Browse AI",
        url: "https://www.browse.ai/",
        quotaInfo: "50 Credits per month",
      },
      {
        id: "capalyze",
        title: "Capalyze",
        url: "https://www.capalyze.ai",
        quotaInfo: "AI 驅動的自動化資料收集與分析",
      },
      {
        id: "vanna-ai",
        title: "Vanna AI",
        url: "https://vanna.ai",
        quotaInfo: "自然語言轉 SQL，開源免費",
      },
      {
        id: "gpt-researcher",
        title: "GPT Researcher",
        url: "https://gptr.dev",
        quotaInfo: "自動化研究 Agent，開源免費",
      },
      {
        id: "chroma",
        title: "Chroma",
        url: "https://trychroma.com",
        quotaInfo: "開源向量資料庫，適合 RAG 應用",
      },
    ],
  },
  {
    id: "mcp-tools",
    title: "MCP Tools",
    color: "bg-purple-600",
    bookmarks: [
      {
        id: "tavily",
        title: "Tavily",
        url: "https://tavily.com",
        quotaInfo: "專為 AI Agent 設計的搜尋引擎，1000 credits/mo",
      },
      {
        id: "context7",
        title: "Context7",
        url: "https://context7.com",
        quotaInfo: "將最新函式庫文件注入 LLM 上下文",
      },
      {
        id: "mcp-playwright",
        title: "MCP Playwright",
        url: "https://github.com/microsoft/playwright-mcp",
        quotaInfo: "為 LLM 提供瀏覽器自動化能力",
      },
      {
        id: "fastmcp",
        title: "fastmcp",
        url: "https://github.com/jlowin/fastmcp",
        quotaInfo: "快速搭建 MCP 服務，開源免費",
      },
      {
        id: "mcphub",
        title: "MCPHub",
        url: "https://mcphub.io",
        quotaInfo: "透過 HTTP 管理多個 MCP 服務",
      },
    ],
  },
  {
    id: "ai-productivity",
    title: "Productivity",
    color: "bg-teal-500", // 青綠色 = 生產力、成長、平衡
    bookmarks: [
      {
        id: "notion-ai",
        title: "Notion AI",
        url: "https://notion.so/ai",
        quotaInfo: "免費版每月 20 次 AI 回應",
      },
      {
        id: "gamma",
        title: "Gamma",
        url: "https://gamma.app",
        quotaInfo: "免費版每月 400 AI 點數",
      },
      {
        id: "wayin-ai",
        title: "Wayin AI",
        url: "https://wayin.ai",
        quotaInfo: "每天免費工具點數: 30",
      },
      {
        id: "zread",
        title: "Zread",
        url: "https://zread.ai",
        quotaInfo: "AI 輔助閱讀與分析 GitHub 專案",
      },
      {
        id: "canirun-ai",
        title: "Can I Run AI",
        url: "https://canirun.ai",
        quotaInfo: "查詢硬體是否支援本地執行 AI 模型",
      },
    ],
  },
  {
    id: "skills",
    title: "Skills",
    color: "bg-fuchsia-600",
    bookmarks: [
      {
        id: "superpowers",
        title: "Superpowers",
        url: "https://github.com/ezyang/claude-superpowers",
        quotaInfo: "Claude Code 的 20+ 實戰技能集合",
      },
      {
        id: "awesome-claude-skills",
        title: "Awesome Claude Skills",
        url: "https://github.com/anthropics/awesome-claude-skills",
        quotaInfo: "精選 Claude 技能合集",
      },
      {
        id: "anthropic-skills-repo",
        title: "人類中心技能倉庫",
        url: "https://github.com/anthropics/anthropic-skills",
        quotaInfo: "Anthropic 官方技能倉庫",
      },
      {
        id: "magi-archive",
        title: "MAGI//ARCHIVE",
        url: "https://magi.ee",
        quotaInfo: "每日更新最新 AI 專案存儲庫",
      },
    ],
  },
  {
    id: "ai-tools",
    title: "AI Tools",
    color: "bg-amber-500",
    bookmarks: [
      {
        id: "theresanaiforthat",
        title: "There's An AI For That",
        url: "https://theresanaiforthat.com",
        quotaInfo: "Global #10,205 · 老牌目錄，5000+ 工具每日更新",
      },
      {
        id: "toolify-ai",
        title: "Toolify.ai",
        url: "https://toolify.ai",
        quotaInfo: "Global #27,588 · 有流量排名與使用趨勢數據",
      },
      {
        id: "ai-bot",
        title: "AI 工具集",
        url: "https://ai-bot.cn",
        quotaInfo: "Global #32,965 · 中文最大 AI 工具導航站",
      },
      {
        id: "creati-ai",
        title: "Creati.ai",
        url: "https://creati.ai/tw/",
        quotaInfo: "Global #70,811 · AI 工具目錄，涵蓋各類應用場景",
      },
      {
        id: "futurepedia",
        title: "Futurepedia",
        url: "https://www.futurepedia.io/ai-tools",
        quotaInfo: "Global #91,370 · 全球知名 AI 工具資料庫",
      },
      {
        id: "aitools-aiting",
        title: "AI.Tools",
        url: "https://aitools.aiting.com/tw/",
        quotaInfo: "繁中 AI 工具導覽平台",
      },
    ],
  },
  {
    id: "course",
    title: "Course",
    color: "bg-yellow-600",
    bookmarks: [
      {
        id: "deeplearning-ai",
        title: "DeepLearning.AI",
        url: "https://www.deeplearning.ai",
        quotaInfo: "AI 專業課程平台，含免費短期課程",
      },
      {
        id: "prompting-guide",
        title: "Prompting Guide",
        url: "https://www.promptingguide.ai/zh",
        quotaInfo: "完整 Prompt 工程指南，免費閱讀",
      },
      {
        id: "anthropic-prompt-tutorial",
        title: "Anthropic Prompt 教程",
        url: "https://github.com/anthropics/prompt-eng-interactive-tutorial",
        quotaInfo: "9 章 + Jupyter Notebook 實操練習",
      },
      {
        id: "anthropic-docs",
        title: "Anthropic 官方文件",
        url: "https://docs.anthropic.com",
        quotaInfo: "API、提示、工具呼叫、Agent 核心內容",
      },
      {
        id: "skillsmp",
        title: "SkillsMP",
        url: "https://skillsmp.com",
        quotaInfo: "8 萬+ 社群技能的市場平台",
      },

    ],
  },
  {
    id: "google",
    title: "Google",
    color: "bg-blue-600",
    bookmarks: [
      {
        id: "google-skills",
        title: "Google Skills",
        url: "https://www.skills.google/",
        quotaInfo: "Google 官方免費技能訓練平台",
      },
      {
        id: "skillshop",
        title: "Skillshop",
        url: "https://skillshop.withgoogle.com/intl/zh-TW_ALL/",
        quotaInfo: "Google 產品官方認證課程平台",
      },
    ],
  },
];