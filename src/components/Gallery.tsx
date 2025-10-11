"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type Category = "all" | "painting" | "comic" | "digital art" | "photography" | "poetry" | "3D";

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
  "poetry",
  "3D",
];

const SAMPLE_ITEMS: GalleryItem[] = [
  {
    id: "item-1",
    title: "Decay",
    artist: "Lucy Yin",
    contact: "@ruiyinart and lucyyin02@gmail.com",
    statement:
      "Both a lamentation and warning, Decay illustrates the devastating consequences of corporate greed and human indifference. The status quo is one in which profits are valued over life. Where predatory industries thrive while ecosystems and human societies collapse. I chose to depict this concept through a one-page split frame that juxtaposes short-term comfort versus the inevitable devastations that follow environmental exploitation. Eyes hidden within factory smoke indicate this destruction is seen yet willfully ignored. Despite the warning cries of scientists and activists across the globe, climate policy has stagnated for far too long. “Decay” challenges viewers to confront this global issue and spark dialogue surrounding our shared responsibilities toward the planet.",
    category: "comic",
    image: "lucy1.png",
  },
  {
    id: "item-2",
    title: "Promises We Made to Our Younger Selves",
    artist: "Lucy Yin",
    contact: "@ruiyinart and lucyyin02@gmail.com",
    statement:
      "Promises we made to our younger selves illustrates the bittersweet journey of rediscovering lost identity. Often, we craft images of ourselves that don’t reflect our true passions and curiosities in order to relieve the weight of others’ expectations. For instance, in the pursuit of writing a generically successful college application, I found myself losing sight of the hobbies I genuinely loved. This piece contrasts sharp, clear elements indicative of teenhood with soft, dreamlike movements representative of childhood. Through these artistic choices, I aim to rekindle the viewer’s most innocent and pure moments in life. As we embrace our younger selves, let us bathe in the turmoil of necessary emotions: regret, reflection, and hope.",
    category: "comic",
    image: "lucy2.png",
  },
  {
    id: "item-3",
    title: "A Flicker of Hope",
    artist: "Tyler Zeng",
    contact: "@tylerzeng_",
    statement: "A Flicker of Hope is a commentary on the tension between nature's serenity and humanity's continuous destruction of Earth. The dark, chaotic strokes symbolize environmental damage, while lighter tones breaking through establish a possibility of renewal and recovery. The painting is a calling for society to take accountability and action before it is too late. ",
    category: "painting",
    image: "aflickerofhope - Tyler Zeng.jpeg",
  },
  {
    id: "item-4",
    title: "Light of Thought",
    artist: "Tyler Zeng",
    contact: "@tylerzeng_",
    statement:
      "Light of Thought portrays the quiet, yet critical moments of reflection and peace amid the chaos of daily life. Under the embrace of glowing lights, the man is a reminder of the importance in tending to our mental health.",
    category: "painting",
    image: "lightofthought - Tyler Zeng.jpeg",
  },
  {
    id: "item-5",
    title: "Face of a Thousand Stories",
    artist: "Tyler Zeng",
    contact: "@tylerzeng_",
    statement:
      "Face of a Thousand Stories reflects society's tendency to forget the value of a chapter before it leaves us forever. From the anticipation of adolescence as children, to the eager desire for retirement as an adult, we are always looking forward in life. The man in the portrait is a product of this mindset, burdened by an eternal sense of longing for the thousands of moments he has forgotten to appreciate.",
    category: "painting",
    image: "faceofathousandstories - Tyler Zeng.jpeg",
  },
  {
    id: "item-6",
    title: "A Tranquil Odyssey",
    artist: "Tyler Zeng",
    contact: "@tylerzeng_",
    statement:
      "A Tranquil Odyssey is an abstract piece that captures our planet as an interconnected whole. Black represents dark and introspective nights, brown delves into the rich soil that produces our lush vegetation, blue mirrors the serene bodies of water that cover our planet, and white highlights the icy tundras in the northern hemisphere. Orange’s subtle appearance reflects the bursts of energy that give our planet life.",
    category: "painting",
    image: "atranquilodyssey (1) - Tyler Zeng.jpeg",
  },
  {
    id: "item-7",
    title: "Untitled Piece",
    artist: "Thea D.",
    contact: "No Contact",
    statement: "This artwork displays my constant restlessness as we continue to watch our world crumble. War, politics, pollution— all of it feels like the life I wanted to live is already doomed before I even got a chance. In this slump of helplessness and despair, society's lack of support and effective action for those in need only worsens the sense of dread. This work is meant to display the feeling of facing closed opportunities, closed minds, and closed futures as someone who has yet to turn towards ignorance to solve problems.",
    category: "digital art",
    image: "1.0 - Thea D.png",
  },
  {
    id: "item-8",
    title: "Waterfall",
    artist: "Justin Yu",
    contact: "No Contact",
    statement: "I went to a waterfall. It was lowkey fire. So I snapped a pic.",
    category: "photography",
    image: "IMG_3640 copy - Justin Yu.JPEG",
  },
  {
    id: "item-9",
    title: "The Party",
    artist: "Brandon Yew",
    contact: "No Contact",
    statement: "I went to this party. Madd sendyyy. Had to snap a pic rq.",
    category: "photography",
    image: "IMG_9264 - Justin Yu.JPEG",
  },
  {
    id: "item-10",
    title: "The Gay Guys",
    artist: "Jaylynn Bamba",
    contact: "@junifrogart",
    statement: "No statement.",
    category: "digital art",
    image: "jaylynn.png",
  },
  {
    id: "item-11",
    title: "Those Scars",
    artist: "Cera Moon",
    contact: "@s.yeon8_",
    statement: "This palindrome poem encapsulates how reminders of pain, whether physical or mental, is a demanding battle to overcome. When read top to bottom, the speaker expresses disgust towards their scars; it is shown that will never fade, and so, the pain too will never disappear. Yet, when read from bottom to top, the meaning of the poem shifts into something more hopeful. The speaker convinces the readers that scars do not have to be reminders of just pain, but rather resilience and strength. This poem was written with the intention to provide strength to those who feel they are weighed down by themselves. Whether those hardships stem from grief, social pressures, insecurities, mental health, or oppression, this poem hopes to provide comfort for those who feel lost in their pain.",
    category: "poetry",
    image: "cera.png",
  },
  {
    id: "item-12",
    title: "Untitled Piece",
    artist: "Michaela Ro",
    contact: "@lemurinkm",
    statement: "This piece is about something blooming and piercing through a surface. Sharp, round, and different textured shapes are put together to resemble a complicated situation where soft thing and sharp things can both bloom at once in life.",
    category: "3D",
    image: "michaela.png.jpeg",
  },
  {
    id: "item-13",
    title: "Resistance",
    artist: "Emil Hung",
    contact: "No Contact",
    statement: "My piece, titled 'resistance' is about the collective strengths of individuals. I made the choice to incorporate raised fists, painted in different colours symbolises our society's diverse voices coming together in unity to emphasise the power of fighting together.",
    category: "painting",
    image: "IMG_8839.png",
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

