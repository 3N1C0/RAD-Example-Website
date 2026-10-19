"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { galleryCategories, galleryPhotos, type GalleryCategory } from "./gallery-data";

const initialCount = 8;
const filters = ["All", ...galleryCategories] as const;

type Filter = "All" | GalleryCategory;

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const photos = filter === "All" ? galleryPhotos : galleryPhotos.filter((photo) => photo.category === filter);
  const visiblePhotos = showAll ? photos : photos.slice(0, initialCount);
  const openPhoto = openIndex === null ? null : photos[openIndex];
  const photoCount = photos.length;

  function selectFilter(next: Filter) {
    setFilter(next);
    setShowAll(false);
    setOpenIndex(null);
  }

  function step(offset: number) {
    setOpenIndex((index) => (index === null ? index : (index + offset + photoCount) % photoCount));
  }

  useEffect(() => {
    if (openIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") setOpenIndex((index) => (index === null ? index : (index + 1) % photoCount));
      if (event.key === "ArrowLeft") setOpenIndex((index) => (index === null ? index : (index - 1 + photoCount) % photoCount));
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, photoCount]);

  const isOpen = openIndex !== null;
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    } else {
      lastTriggerRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className="mt-10">
      <div role="group" aria-label="Filter photos" className="flex flex-wrap gap-2">
        {filters.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => selectFilter(option)}
            aria-pressed={filter === option}
            className={`rounded-sm border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A] ${
              filter === option
                ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
                : "border-black/20 text-black/70 hover:border-black/50 hover:text-black"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {visiblePhotos.map((photo, index) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={(event) => {
                lastTriggerRef.current = event.currentTarget;
                setOpenIndex(index);
              }}
              aria-label={`Enlarge photo: ${photo.caption}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-sm bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                quality={85}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {!showAll && photos.length > initialCount && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="mt-10 border-b border-black/40 pb-2 text-sm font-medium transition-colors hover:border-black"
        >
          Show more ({photos.length - initialCount})
        </button>
      )}

      {openPhoto && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={openPhoto.caption}
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[100] flex flex-col bg-black/90 px-4 py-4 sm:px-8 sm:py-6"
        >
          <div className="flex items-center justify-between gap-4 text-sm text-white/70">
            <span>
              {openIndex + 1} / {photoCount}
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close photo"
              className="flex size-10 items-center justify-center rounded-sm text-2xl text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">✕</span>
            </button>
          </div>

          <div className="relative my-4 flex-1">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Small photos are capped at 2x their real size so they stay sharp instead of stretching to fill the screen. */}
              <Image
                key={openPhoto.src}
                src={openPhoto.src}
                alt={openPhoto.caption}
                width={openPhoto.width}
                height={openPhoto.height}
                quality={85}
                sizes="100vw"
                className="h-auto max-h-full max-w-full object-contain"
                style={{ width: `${openPhoto.width * 2}px` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-[#5B0D0D]/70 text-2xl text-white transition-colors hover:bg-[#5B0D0D] focus-visible:outline-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <p className="text-center text-sm text-white sm:text-base">{openPhoto.caption}</p>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-[#5B0D0D]/70 text-2xl text-white transition-colors hover:bg-[#5B0D0D] focus-visible:outline-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
