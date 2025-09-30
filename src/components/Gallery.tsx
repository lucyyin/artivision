"use client";

import { useMemo, useState } from "react";

type Category = "all" | "painting" | "comic" | "digital art" | "photography";

type GalleryItem = {
  id: string;
  title: string;
  artist: string;
  contact: string;
  statement: string;
  category: Exclude<Category, "all">;
};

const CATEGORIES: Category[] = [
  "all",
  "painting",
  "comic",
  "digital art",
  "photography",
];

const SAMPLE_ITEMS: GalleryItem[] = Array.from({ length: 12 }).map((_, i) => {
  const buckets: Exclude<Category, "all">[] = [
    "painting",
    "comic",
    "digital art",
    "photography",
  ];
  const category = buckets[i % buckets.length];
  return {
    id: `item-${i + 1}`,
    title: `Artwork Title ${i + 1}`,
    artist: `Artist ${i + 1}`,
    contact: "contact@example.com",
    statement:
      "Artist statement placeholder text describing the piece, materials, and intent.",
    category,
  };
});

export function Gallery() {
  const [active, setActive] = useState<Category>("all");

  const filtered = useMemo(() => {
    if (active === "all") return SAMPLE_ITEMS;
    return SAMPLE_ITEMS.filter((i) => i.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`h-12 px-4 rounded-xl text-sm capitalize transition-colors shadow-sm ${
                isActive
                  ? "bg-[var(--brand-blue)] text-white"
                  : "bg-[var(--muted)] text-[var(--gray-700)] hover:bg-[color-mix(in oklch,var(--muted),black 3%)]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="rounded-lg bg-[var(--card)] p-4 shadow-sm"
          >
            <div className="placeholder-block aspect-[4/3] w-full mb-4" />
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs px-2 py-1 rounded-md bg-[var(--muted)] text-[var(--gray-700)] capitalize">
                {item.category}
              </span>
            </div>
            <h3 className="text-lg font-medium text-[var(--gray-900)] mb-1">{item.title}</h3>
            <div className="text-sm text-[var(--gray-700)] mb-1">{item.artist}</div>
            <div className="text-sm text-[var(--gray-600)] mb-2">{item.contact}</div>
            <p className="text-sm text-[var(--gray-600)]">{item.statement}</p>
          </article>
        ))}
      </div>
    </div>
  );
}


