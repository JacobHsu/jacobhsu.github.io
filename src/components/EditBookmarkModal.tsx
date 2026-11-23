import React, { useState, useEffect, useRef, useId } from 'react';
import { useBookmarkStore } from '../stores/bookmarkStore';
import { Bookmark } from '../types';
import { X, Trash2 } from 'lucide-react';

interface EditBookmarkModalProps {
  bookmark: Bookmark;
  categoryId: string;
  onClose: () => void;
}

export const EditBookmarkModal: React.FC<EditBookmarkModalProps> = ({ bookmark, categoryId, onClose }) => {
  const [url, setUrl] = useState(bookmark.url);
  const [title, setTitle] = useState(bookmark.title);
  const [description, setDescription] = useState(bookmark.description || '');
  const [appUrl, setAppUrl] = useState(bookmark.appUrl || '');
  const { updateBookmark, removeBookmark, getFaviconUrl } = useBookmarkStore();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const id = useId();

  const faviconUrl = getFaviconUrl(url);

  // Native modal: inert page, focus containment, Esc, and focus return to the opener.
  // Guard against StrictMode running this twice (showModal throws if already open).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
      firstFieldRef.current?.focus();
    }
  }, []);

  // Every close path (Esc, buttons, submit, delete) goes through dialog.close(); onClose fires from the close event
  const closeDialog = () => dialogRef.current?.close();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!url.trim()) return;

    updateBookmark(categoryId, bookmark.id, {
      title: title.trim() || extractTitleFromUrl(url),
      url: url.trim(),
      description: description.trim() || undefined,
      appUrl: appUrl.trim() || undefined,
    });

    closeDialog();
  };

  const handleDelete = () => {
    if (confirm('確定要刪除這個書籤嗎？')) {
      removeBookmark(categoryId, bookmark.id);
      closeDialog();
    }
  };

  const extractTitleFromUrl = (url: string): string => {
    try {
      const domain = new URL(url).hostname;
      return domain.replace('www.', '');
    } catch {
      return url;
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby={`${id}-heading`}
      className="p-0 bg-white rounded-lg shadow-xl w-full max-w-md backdrop:bg-black/50"
    >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <h2 id={`${id}-heading`} className="text-lg font-medium text-gray-800">編輯書籤</h2>
            {faviconUrl ? (
              <img
                src={faviconUrl}
                alt=""
                className="w-5 h-5 rounded-sm"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <div className={`w-5 h-5 bg-gray-300 rounded-sm flex items-center justify-center ${faviconUrl ? 'hidden' : ''}`}>
              <span className="text-xs text-gray-600">🌐</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDelete}
              className="text-red-500 hover:text-red-700 transition-colors p-1"
              title="刪除書籤"
              aria-label="刪除書籤"
            >
              <Trash2 size={18} />
            </button>
            <button
              type="button"
              onClick={closeDialog}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="關閉"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Title field */}
          <div>
            <label htmlFor={`${id}-title`} className="block text-sm font-medium text-gray-700 mb-1">標題</label>
            <input
              ref={firstFieldRef}
              id={`${id}-title`}
              type="text"
              placeholder="書籤標題"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* URL field */}
          <div>
            <label htmlFor={`${id}-url`} className="block text-sm font-medium text-gray-700 mb-1">網址</label>
            <input
              id={`${id}-url`}
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={handleUrlChange}
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck={false}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Description field */}
          <div>
            <label htmlFor={`${id}-description`} className="block text-sm font-medium text-gray-700 mb-1">描述</label>
            <input
              id={`${id}-description`}
              type="text"
              placeholder="書籤描述（可選）"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* App URL field */}
          <div>
            <label htmlFor={`${id}-app-url`} className="block text-sm font-medium text-gray-700 mb-1">應用連結</label>
            <input
              id={`${id}-app-url`}
              type="url"
              placeholder="https://example.com/app（可選）"
              value={appUrl}
              onChange={(e) => setAppUrl(e.target.value)}
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck={false}
              aria-describedby={`${id}-app-url-hint`}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p id={`${id}-app-url-hint`} className="text-xs text-gray-500 mt-1">額外的應用或示例連結，會顯示為藍色按鈕</p>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              onClick={closeDialog}
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              取消編輯
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={closeDialog}
                className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                取消
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600 transition-colors"
              >
                儲存
              </button>
            </div>
          </div>
        </form>
    </dialog>
  );
};
