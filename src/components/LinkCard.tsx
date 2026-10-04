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
      className="flex items-center justify-between gap-4 rounded-3xl border border-white/70 bg-white/50 px-6 py-5 shadow-[0_4px_20px_-6px_rgba(120,72,40,0.15)] backdrop-blur-md transition duration-300 hover:bg-white/70 hover:shadow-[0_8px_28px_-8px_rgba(120,72,40,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/10"
    >
      <div className="min-w-0">
        <p className="truncate font-semibold">{link.title}</p>
        {link.description && (
          <p className="mt-0.5 truncate text-sm text-stone-500 dark:text-stone-400">
            {link.description}
          </p>
        )}
      </div>
      {count !== undefined && (
        <span className="shrink-0 text-xs tabular-nums text-stone-400 dark:text-stone-500">
          {count.toLocaleString()}회
        </span>
      )}
    </a>
  );
}
