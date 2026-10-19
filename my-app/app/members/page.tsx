import type { Metadata } from "next";
import SiteContact from "../site-contact";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "Members | Robotics and Drone Club",
};

const joinEmail = "redlandsroboticsanddroneclub@gmail.com";
const joinSubject = "Interest in joining the Robotics and Drone Club";

export default function MembersPage() {
  return (
    <main id="top" className="min-h-screen bg-[#1A1A1A] font-sans text-white">
      <SiteHeader />

      <section className="px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d98b83]">
            Members
          </p>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Curiosity is the only prerequisite.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Our roster is coming soon. We&rsquo;re updating it with member photos.
            </p>
            <a
              href={`mailto:${joinEmail}?subject=${encodeURIComponent(joinSubject)}`}
              className="group mt-12 block rounded-sm border border-white/20 bg-white/5 p-6 transition-colors hover:border-[#d98b83] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:p-8"
            >
              <span className="block text-2xl font-semibold sm:text-3xl">
                Interested in joining? <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
              <span className="mt-3 block break-all text-sm text-white/70 sm:text-base">
                {joinEmail}
              </span>
            </a>
          </div>
        </div>
      </section>

      <SiteContact backToTopHref="#top" />
    </main>
  );
}
