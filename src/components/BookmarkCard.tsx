import { useState, memo, useMemo, useEffect, useId } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Bookmark } from '../types';
import { Pencil, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface BookmarkCardProps {
  bookmark: Bookmark;
  categoryId: string;
  onEdit?: (bookmarkId: string) => void;
}

// 提升到組件外部，避免每次渲染都創建
const getQuotaInfo = (bookmark: Bookmark): string => {
  return bookmark.quotaInfo || '請查看官網了解額度限制';
};

// Hover-revealed controls must also show on keyboard focus and on devices without hover
const revealClass =
  'opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100 transition-opacity';

const getFaviconUrl = (url: string): string => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
  } catch {
    return '';
  }
};

// 使用 memo 避免不必要的重渲染
export const BookmarkCard = memo<BookmarkCardProps>(({ bookmark, categoryId, onEdit }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const tooltipId = useId();

  // WCAG 1.4.13: shown on hover or keyboard focus, persists until both end, dismissible with Esc
  const showTooltip = (isHovered || isFocused) && !isDismissed && !isExpanded;

  // Document-level so Esc also dismisses a hover-only tooltip while focus is elsewhere
  useEffect(() => {
    if (!showTooltip) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsDismissed(true);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showTooltip]);

  const {
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: bookmark.id,
    data: {
      type: 'bookmark',
      bookmark,
      categoryId,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  // 快取計算結果，避免重複計算
  const faviconUrl = useMemo(() =>
    bookmark.favicon || getFaviconUrl(bookmark.url),
    [bookmark.favicon, bookmark.url]
  );

  const quotaInfo = useMemo(() =>
    getQuotaInfo(bookmark),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [bookmark.quotaInfo]
  );

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      className="relative hover:bg-gray-50 cursor-pointer group"
      // mousemove, not mouseenter: when Esc hides a tooltip under a resting pointer, the browser fires
      // mouseenter on the card now beneath it, which would pop that card's tooltip without any movement
      onMouseMove={() => {
        if (isHovered) return;
        setIsHovered(true);
        setIsDismissed(false);
      }}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={(e) => {
        // Reset Esc-dismissal only when focus enters the card, not when it moves between its controls
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setIsDismissed(false);
        setIsFocused(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setIsFocused(false);
      }}
    >
      {/* Main bookmark row */}
      <div className="flex items-center gap-2 py-2 px-1">
        {/* draggable={false}: keep native link drag from hijacking dnd-kit's pointer drag */}
        <a
          href={bookmark.url}
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          className="flex items-center gap-2 flex-1 min-w-0 rounded"
          aria-describedby={`${tooltipId}-desc`}
        >
        <div className="flex-shrink-0 w-5 h-5">
          {faviconUrl ? (
            <img
              src={faviconUrl}
              alt=""
              draggable={false}
              loading="lazy"
              width={20}
              height={20}
              className="w-5 h-5 rounded-sm"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-5 h-5 bg-gray-300 rounded-sm flex items-center justify-center">
              <span className="text-xs text-gray-600">🌐</span>
            </div>
          )}
        </div>
        <span className="text-sm text-gray-700 truncate flex-1">
          {bookmark.title}
        </span>
        </a>

        {/* App link - shown on hover, keyboard focus, or always on touch devices */}
        {bookmark.appUrl ? (
          <a
            href={bookmark.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            draggable={false}
            className={`${revealClass} p-1 hover:bg-blue-100 rounded`}
            title="開啟應用"
            aria-label={`開啟應用：${bookmark.title}`}
          >
            <ExternalLink size={14} className="text-blue-500" />
          </a>
        ) : null}

        {/* Edit button */}
        <button
          type="button"
          onClick={() => onEdit?.(bookmark.id)}
          className={`${revealClass} p-1 hover:bg-gray-200 rounded`}
          aria-label={`編輯：${bookmark.title}`}
        >
          <Pencil size={14} className="text-gray-500" />
        </button>

        {/* Expand/Collapse button */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className={`${revealClass} p-1 hover:bg-gray-200 rounded`}
          aria-label={`詳細資訊：${bookmark.title}`}
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <ChevronUp size={14} className="text-gray-400" />
          ) : (
            <ChevronDown size={14} className="text-gray-400" />
          )}
        </button>
      </div>

      {/* Expanded info */}
      {isExpanded ? (
        <div className="px-6 pb-2 space-y-1">
          {bookmark.description ? (
            <div className="text-xs text-gray-600">
              {bookmark.description}
            </div>
          ) : null}
          <div className="text-xs text-gray-500">
            {quotaInfo}
          </div>
        </div>
      ) : null}

      {/* Tooltip: always rendered (hidden) so aria-describedby resolves; pt-1 instead of a margin
          keeps the gap hoverable so the pointer can move onto the tooltip without it closing */}
      <div id={tooltipId} role="tooltip" hidden={!showTooltip} className="absolute left-0 top-full z-50 pt-1">
        <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap max-w-xs">
          <div className="font-medium">{bookmark.title}</div>
          {/* Description excludes the title, which is already the link's accessible name */}
          <div id={`${tooltipId}-desc`}>
            {bookmark.description ? (
              <div className="text-gray-200 truncate">{bookmark.description}</div>
            ) : null}
            <div className="text-gray-300">{quotaInfo}</div>
          </div>
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // 自訂比較函數，只在屬性真正變化時才重渲染
  return prevProps.bookmark.id === nextProps.bookmark.id &&
         prevProps.bookmark.title === nextProps.bookmark.title &&
         prevProps.bookmark.url === nextProps.bookmark.url &&
         prevProps.bookmark.description === nextProps.bookmark.description &&
         prevProps.bookmark.appUrl === nextProps.bookmark.appUrl &&
         prevProps.bookmark.quotaInfo === nextProps.bookmark.quotaInfo &&
         prevProps.categoryId === nextProps.categoryId;
});

BookmarkCard.displayName = 'BookmarkCard';