"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : {}))
      .then(setCounts)
      .catch(() => {});
  }, []);

  const handleClick = (id: string) => {
    // 새 탭으로 이동하는 동안에도 요청이 유지되도록 sendBeacon 사용
    navigator.sendBeacon(`/api/clicks/${id}`);
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
