import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f8f4] font-sans text-[#202a25]">
      <header className="bg-linear-to-b from-[#5B0D0D] from-80% to-[#f7f8f4]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 pt-5 pb-8 text-white sm:px-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex w-fit items-center gap-3" aria-label="Robotics and Drones home">
            <span className=" flex size-11 items-center justify-center rounded-md bg-[#1A1A1A] text-sm font-bold text-white">
              R&amp;D
            </span>
            <span className="text-lg font-semibold tracking-wider">Robotics and Drones Club</span>
          </Link>

          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
            <Link href="#about-us" className="transition-colors hover:text-[#176b55]">About Us</Link>
            <Link href="#projects" className="transition-colors hover:text-[#176b55]">Projects</Link>
            <Link href="#members" className="transition-colors hover:text-[#176b55]">Members</Link>
            <Link
              href="#contact-us"
              className="rounded-md bg-[#1A1A1A] px-4 py-2.5 text-white transition-colors hover:bg-[#105441]"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
