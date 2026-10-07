import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] font-sans text-white">
      <section
        id="home"
        className="relative isolate grid min-h-svh place-items-center overflow-hidden bg-[#1A1A1A] px-5 py-12"
      >
        <Image
          src="/drone-hero.jpg"
          alt="A drone flying above a mountain range"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-black/20 via-black/35 to-black/70"
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="sr-only">Robotics and Drones Club</h1>
          <div className="relative aspect-[3/4] w-[min(72vw,22rem)]">
            <Image
              src="/Media.jfif"
              alt="Robotics and Drones Club logo"
              fill
              priority
              sizes="(max-width: 640px) 72vw, 352px"
              className="object-contain"
            />
          </div>
          <Link
            href="#about-us"
            className="mt-5 border-b border-white/60 pb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/90 transition-colors hover:text-white"
          >
            Scroll ↓
          </Link>
        </div>

        <p className="absolute bottom-4 right-5 z-10 text-[10px] text-white/75 sm:right-8">
          Photo by{" "}
          <a
            href="https://unsplash.com/photos/white-quadcopter-drone-flying-near-snow-mountain-during-daytime-ZlkRrzJl20Q"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            Iewek Gnos / Unsplash
          </a>
        </p>
      </section>

      <header className="sticky top-0 z-50 border-y border-white/10 bg-[#1A1A1A]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="#home" className="flex items-center gap-3" aria-label="Back to home">
            <span className="flex size-9 items-center justify-center rounded-sm bg-[#5B0D0D] text-xs font-bold text-white">
              R&amp;D
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.12em]">
              Robotics and Drones
            </span>
          </Link>

          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <Link href="#about-us" className="transition-colors hover:text-[#d98b83]">About</Link>
            <Link href="#projects" className="transition-colors hover:text-[#d98b83]">Projects</Link>
            <Link href="#members" className="transition-colors hover:text-[#d98b83]">Members</Link>
            <Link href="#contact-us" className="transition-colors hover:text-[#d98b83]">Contact</Link>
          </nav>
        </div>
      </header>

      <section id="about-us" className="scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d98b83]">
            01 / About
          </p>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              We are a learning enviroment for students to explore!
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              The Redlands Robotics and Drone Club is currently the fastest growing organization on campus,
              as we have roughly 15 active members spanning from GIS to engineering, all working on cutting edge projects 
              focused on AI autonomous robotics and drones. With over $5000+ dollars raised so far for our club's work, we 
              are committed to lowering the barrier of entry for students to gain hands-on experience in a 
              fast-paced collaborative environment. The experience gained from working in our 
              club directly translate over to a professional setting, with over 
              half of our members receiving internship positions related to their fields.  
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 bg-[#eeeeea] px-5 py-24 text-[#1A1A1A] sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d211e]">
            02 / Projects
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            From first sketch to first flight.
          </h2>
          <div className="mt-14 grid gap-x-10 md:grid-cols-3">
            <article className="border-t border-black/20 py-6">
              <p className="text-sm font-medium text-[#7d211e]">01</p>
              <h3 className="mt-8 text-xl font-semibold">Airframe design</h3>
              <p className="mt-3 text-sm leading-6 text-black/65">
                Explore structures, materials, and the choices that shape a flying platform.
              </p>
            </article>
            <article className="border-t border-black/20 py-6">
              <p className="text-sm font-medium text-[#7d211e]">02</p>
              <h3 className="mt-8 text-xl font-semibold">Autonomous flight</h3>
              <p className="mt-3 text-sm leading-6 text-black/65">
                Bring control systems and software together to make flight more capable.
              </p>
            </article>
            <article className="border-t border-black/20 py-6">
              <p className="text-sm font-medium text-[#7d211e]">03</p>
              <h3 className="mt-8 text-xl font-semibold">Aerial imaging</h3>
              <p className="mt-3 text-sm leading-6 text-black/65">
                Put cameras and sensors to work collecting a new view of the world.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="members" className="scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d98b83]">
            03 / Members
          </p>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Curiosity is the only prerequisite.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Bring a question, a half-built idea, or simply an interest in how things fly. There is
              room to learn by doing.
            </p>
          </div>
        </div>
      </section>

      <section id="contact-us" className="scroll-mt-20 bg-[#5B0D0D] px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              04 / Contact
            </p>
            <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">Let’s make something fly.</h2>
          </div>
          <Link
            href="#home"
            className="w-fit border-b border-white/60 pb-2 text-sm font-medium transition-colors hover:border-white"
          >
            Back to top
          </Link>
        </div>
      </section>
    </main>
  );
}
