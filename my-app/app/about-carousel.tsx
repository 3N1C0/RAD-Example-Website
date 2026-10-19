"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  { src: "/club%20photo%203.png", alt: "Robotics and drone club project" },
  { src: "/club%20photo%204%20group.png", alt: "Robotics and drone club members" },
  { src: "/club%20photo%205%20workshop.png", alt: "Robotics and drone club workshop" },
];

export default function AboutCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const activePhoto = photos[activeIndex];

  useEffect(() => {
    if (isHovered || previousIndex !== null) return;

    const timer = window.setInterval(() => {
      const nextIndex = (activeIndex + 1) % photos.length;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setActiveIndex(nextIndex);
        return;
      }

      setPreviousIndex(activeIndex);
      setSlideDirection("right");
      setActiveIndex(nextIndex);
    }, 10_000);

    return () => window.clearInterval(timer);
  }, [activeIndex, isHovered, previousIndex]);

  function goToPhoto(index: number, direction: "left" | "right") {
    if (previousIndex !== null) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSlideDirection(null);
      setActiveIndex(index);
      return;
    }

    setPreviousIndex(activeIndex);
    setSlideDirection(direction);
    setActiveIndex(index);
  }

  function showPhoto(offset: number) {
    const nextIndex = (activeIndex + offset + photos.length) % photos.length;
    goToPhoto(nextIndex, offset > 0 ? "right" : "left");
  }

  return (
    <div
      aria-label="Robotics and Drone Club photos"
      aria-roledescription="carousel"
      className="relative min-h-64 overflow-hidden rounded-sm bg-black/20 md:min-h-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={previousIndex === null ? activePhoto.src : photos[previousIndex].src}
        alt={previousIndex === null ? activePhoto.alt : photos[previousIndex].alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={85}
        className="object-cover"
      />
      {previousIndex !== null && slideDirection !== null && (
        <Image
          key={activePhoto.src}
          src={activePhoto.src}
          alt={activePhoto.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
          onAnimationEnd={() => setPreviousIndex(null)}
          className={`object-cover carousel-photo-slide-${slideDirection}`}
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-[#1A1A1A]/55 to-transparent sm:w-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-[#1A1A1A]/55 to-transparent sm:w-20"
      />
      <button
        type="button"
        onClick={() => showPhoto(-1)}
        aria-label="Show previous photo"
        className="absolute left-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-sm bg-[#5B0D0D]/50 text-2xl leading-none text-white transition-colors hover:bg-[#5B0D0D]/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        type="button"
        onClick={() => showPhoto(1)}
        aria-label="Show next photo"
        className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-sm bg-[#5B0D0D]/50 text-2xl leading-none text-white transition-colors hover:bg-[#5B0D0D]/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span aria-hidden="true">›</span>
      </button>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-linear-to-t from-black/80 to-transparent px-4 pb-4 pt-10">
        <div className="flex items-center gap-2" aria-label={`Photo ${activeIndex + 1} of ${photos.length}`}>
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => {
                if (index !== activeIndex) {
                  goToPhoto(index, index > activeIndex ? "right" : "left");
                }
              }}
              disabled={previousIndex !== null}
              aria-label={`Show photo ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`size-2.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                index === activeIndex ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
