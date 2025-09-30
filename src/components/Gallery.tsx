"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type Category = "all" | "painting" | "comic" | "digital art" | "photography";

type GalleryItem = {
  id: string;
  title: string;
  artist: string;
  contact: string;
  statement: string;
  category: Exclude<Category, "all">;
  image: string;
};

const CATEGORIES: Category[] = [
  "all",
  "painting",
  "comic",
  "digital art",
  "photography",
];

const SAMPLE_ITEMS: GalleryItem[] = [
  {
    id: "item-1",
    title: "Silent Protest",
    artist: "Amira Khan",
    contact: "amira@example.com",
    statement:
      "This piece explores the resilience of women under oppressive regimes.",
    category: "painting",
    image: "/images/image1.jpg",
  },
  {
    id: "item-2",
    title: "Digital Divide",
    artist: "Leo Tran",
    contact: "leo@example.com",
    statement:
      "A digital artwork critiquing unequal access to technology across communities.",
    category: "digital art",
    image: "/images/image1.png",
  },
  {
    id: "item-3",
    title: "Voices",
    artist: "Sophia Martins",
    contact: "sophia@example.com",
    statement:
      "A photo series capturing protest movements around the world.",
    category: "photography",
    image: "/images/image1.jpg",
  },
  {
    id: "item-4",
    title: "Justice in Frames",
    artist: "David Okoro",
    contact: "david@example.com",
    statement:
      "A comic strip imagining how communities unite against systemic injustice.",
    category: "comic",
    image: "/images/image1.jpg",
  },
  {
    id: "item-5",
    title: "Renewal",
    artist: "Elena Ruiz",
    contact: "elena@example.com",
    statement:
      "A painting symbolizing healing and solidarity after struggle.",
    category: "painting",
    image: "/images/image1.jpg",
  },
];

export function Gallery() {
  const [active, setActive] = useState<Category>("all");

  const filtered = useMemo(() => {
    if (active === "all") return SAMPLE_ITEMS;
    return SAMPLE_ITEMS.filter((i) => i.category === active);
  }, [active]);

  return (
    <div>
      {/* Category buttons */}
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
                  : "bg-[var(--muted)] text-[var(--gray-700)] hover:bg-[color-mix(in oklch,var(--muted),black_3%)]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="rounded-lg bg-[var(--card)] p-4 shadow-sm"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={450}
              className="w-full h-auto rounded-md mb-4 object-cover"
            />
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs px-2 py-1 rounded-md bg-[var(--muted)] text-[var(--gray-700)] capitalize">
                {item.category}
              </span>
            </div>
            <h3 className="text-lg font-medium text-[var(--gray-900)] mb-1">
              {item.title}
            </h3>
            <div className="text-sm text-[var(--gray-700)] mb-1">
              {item.artist}
            </div>
            <div className="text-sm text-[var(--gray-600)] mb-2">
              {item.contact}
            </div>
            <p className="text-sm text-[var(--gray-600)]">{item.statement}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

