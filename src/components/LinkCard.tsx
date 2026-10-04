import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  count?: number;
  onClick: () => void;
};

export default function LinkCard({ link, count, onClick }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex items-center justify-between gap-4 rounded-2xl border-2 border-gray-900 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-200 dark:bg-gray-900"
    >
      <div className="min-w-0">
        <p className="truncate font-semibold">{link.title}</p>
        {link.description && (
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            {link.description}
          </p>
        )}
      </div>
      {count !== undefined && (
        <span className="shrink-0 text-xs text-gray-500 dark:text-gray-400">
          {count.toLocaleString()} 클릭
        </span>
      )}
    </a>
  );
}
