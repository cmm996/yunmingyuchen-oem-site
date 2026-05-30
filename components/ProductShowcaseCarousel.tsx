"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export type ProductShowcaseItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
};

type ProductShowcaseCarouselProps = {
  items: ProductShowcaseItem[];
  intervalMs?: number;
};

export function ProductShowcaseCarousel({
  items,
  intervalMs = 3800
}: ProductShowcaseCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeItem = items[activeIndex];

  useEffect(() => {
    if (items.length <= 1 || isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, isPaused, items.length]);

  const dots = useMemo(() => items.map((item) => item.title), [items]);

  if (!activeItem) {
    return null;
  }

  const goPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg border border-white/70 bg-white p-4 shadow-soft"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#f8f4e8]">
        {items.map((item, index) => (
          <div
            key={item.src}
            className={`absolute inset-0 transition duration-700 ease-out ${
              index === activeIndex
                ? "translate-x-0 opacity-100"
                : index < activeIndex
                  ? "-translate-x-4 opacity-0"
                  : "translate-x-4 opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-herb-950/75 via-herb-950/28 to-transparent p-4 text-white">
          <p className="text-sm font-semibold">{activeItem.title}</p>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/86">
            {activeItem.description}
          </p>
        </div>
        {items.length > 1 ? (
          <>
            <button
              type="button"
              onClick={goPrevious}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/82 text-herb-800 shadow-lift backdrop-blur transition hover:bg-white"
              aria-label="上一张产品展示"
            >
              <ChevronLeft aria-hidden="true" className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/82 text-herb-800 shadow-lift backdrop-blur transition hover:bg-white"
              aria-label="下一张产品展示"
            >
              <ChevronRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </>
        ) : null}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs font-medium text-herb-700">
        {activeItem.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-md bg-herb-50 px-3 py-2">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {dots.map((title, index) => (
          <button
            key={title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition ${
              index === activeIndex
                ? "w-7 bg-herb-700"
                : "w-2.5 bg-herb-200 hover:bg-herb-400"
            }`}
            aria-label={`查看${title}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
