import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-y border-white/10 bg-[#1A1A1A]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Back to home">
          <span className="flex size-9 items-center justify-center rounded-sm bg-[#5B0D0D] text-xs font-bold text-white">
            R&amp;D
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.12em]">
            Robotics and Drones
          </span>
        </Link>

        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <Link href="/#about-us" className="transition-colors hover:text-[#d98b83]">About</Link>
          <Link href="/projects" className="transition-colors hover:text-[#d98b83]">Projects</Link>
          <Link href="/members" className="transition-colors hover:text-[#d98b83]">Members</Link>
          <Link href="/#gallery" className="transition-colors hover:text-[#d98b83]">Gallery</Link>
          <Link href="/#contact-us" className="transition-colors hover:text-[#d98b83]">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
