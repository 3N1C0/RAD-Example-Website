import Image from "next/image";
import Link from "next/link";
import AboutCarousel from "./about-carousel";
import Gallery from "./gallery";
import ProjectCard from "./project-card";
import { featuredProjects } from "./projects-data";
import SiteContact from "./site-contact";
import SiteHeader from "./site-header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] font-sans text-white">
      <section
        id="home"
        className="relative isolate grid min-h-svh place-items-center overflow-hidden bg-[#1A1A1A] px-5 py-12"
      >
        <Image
          src="/backdrop.jpg"
          alt="Club members watching a drone demonstration"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-[center_25%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-black/55 via-black/50 to-black/75"
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="sr-only">Robotics and Drones Club</h1>
          <div className="relative aspect-square w-[min(75.6vw,23.1rem)]">
            <Image
              src="/RAD%20logo%20with%20text.png"
              alt="Robotics and Drones Club logo"
              fill
              priority
              sizes="(max-width: 640px) 72vw, 352px"
              className="object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
            />
          </div>
          <Link
            href="#about-us"
            className="mt-5 border-b border-white/60 pb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/90 transition-colors hover:text-white"
          >
            Scroll ↓
          </Link>
        </div>

      </section>

      <SiteHeader />

      <section id="about-us" className="scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d98b83] md:col-span-2">
            01 / About
          </p>
          <AboutCarousel />
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              We are a learning enviroment for students to explore!
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Established in 2025, the Redlands Robotics and Drone Club is currently the fastest growing organization on campus,
              as we have 20 active members spanning from GIS to engineering, all working on cutting edge projects 
              focused on AI autonomous robotics and drones. With over $5000+ dollars raised so far for our club&apos;s work, we 
              are committed to lowering the barrier of entry for students to gain hands-on experience in a 
              fast-paced collaborative environment. The experience gained from working in our 
              club directly translate over to a professional setting, with over 
              half of our members receiving internship positions related to their fields. This year, we are looking to scale
              even further.
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
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
          <Link
            href="/projects"
            className="mt-10 inline-block border-b border-black/40 pb-2 text-sm font-medium transition-colors hover:border-black"
          >
            See all projects →
          </Link>
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
            <Link
              href="/members"
              className="mt-10 inline-block border-b border-white/60 pb-2 text-sm font-medium transition-colors hover:border-white"
            >
              Meet the team →
            </Link>
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-20 bg-white px-5 py-24 text-[#1A1A1A] sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d211e]">
            05 / Gallery
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Proof of work.
          </h2>
          <Gallery />
        </div>
      </section>

      <SiteContact eyebrow="06 / Contact" backToTopHref="#home" />
    </main>
  );
}
