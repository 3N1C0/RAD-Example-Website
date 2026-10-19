import Link from "next/link";

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </svg>
  );
}

const clubEmail = "redlandsroboticsanddroneclub@gmail.com";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/redlands-robotics-and-drone/", Icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com/radredlands/", Icon: InstagramIcon },
];

export default function SiteContact({
  eyebrow = "Contact",
  backToTopHref,
}: {
  eyebrow?: string;
  backToTopHref: string;
}) {
  return (
    <section id="contact-us" className="scroll-mt-20 bg-[#5B0D0D] px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            {eyebrow}
          </p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">Let’s make something fly.</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            <li>
              <a
                href={`mailto:${clubEmail}`}
                className="flex items-center gap-2.5 rounded-sm border border-white/30 px-4 py-2.5 text-sm font-medium transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <EmailIcon />
                <span className="break-all">{clubEmail}</span>
              </a>
            </li>
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-sm border border-white/30 px-4 py-2.5 text-sm font-medium transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Icon />
                  {label}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={backToTopHref}
          className="w-fit border-b border-white/60 pb-2 text-sm font-medium transition-colors hover:border-white"
        >
          Back to top
        </Link>
      </div>
    </section>
  );
}
