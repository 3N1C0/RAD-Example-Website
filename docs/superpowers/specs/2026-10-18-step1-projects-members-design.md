# Step 1: Projects and Members Pages — Design

Date: 2026-10-18
Source brief: `club-website-brief.md`
App: `my-app/` (Next.js 16.3, React 19, Tailwind 4, TypeScript)

## Goal

Add a dedicated Projects page and a placeholder Members page to the Robotics and Drone Club site, while keeping the existing home page structure and styling the same.

## Decisions (agreed with the club)

- The home page keeps its current section order and styling: hero → sticky nav → About → Projects → Members → Contact.
- New routes: `/projects` (all projects) and `/members` (placeholder until the roster with photos is ready).
- No Expo page.
- The home page Projects and Members sections stay as previews that link to the new pages.
- Project card copy uses only the club's own words from the brief. Projects with no quoted description show "Details coming soon."
- No status badges for now.
- About section: change "roughly 15 active members" to "20 active members". Keep the "$5000+ dollars raised" sentence; this is the club's decision and overrides the brief's no-budget rule for this sentence. Leave existing typos untouched.
- Contact email for joining: `redlandsroboticsanddroneclub@gmail.com`.

## Architecture

Shared nav component plus a single source of truth for project data.

### New files

- `app/site-header.tsx`: the existing sticky nav, extracted from `page.tsx` without any visual changes.
- `app/projects-data.ts`: an ordered array of 8 projects (`title`, `description`). The first three are the ones featured on the home page.
- `app/projects/page.tsx`: the full Projects page.
- `app/members/page.tsx`: the Members placeholder page.

### Changed files

- `app/page.tsx`: render `<SiteHeader />` in its current position (below the hero). The Projects preview shows the first 3 projects plus a "See all projects →" link to `/projects`. The Members section gets a "Meet the team →" link to `/members`. Change the member count from 15 to 20.
- `app/layout.tsx`: set the metadata title to "Robotics and Drone Club | University of Redlands" and the description to the brief's mission line: "The Robotics and Drone Club is an organization with a diverse member body committed to sharing the wonder of robotics and drones with everyone."

### Nav links (all pages)

| Label   | Target         |
|---------|----------------|
| R&D logo | `/`           |
| About   | `/#about-us`   |
| Projects| `/projects`    |
| Members | `/members`     |
| Contact | `/#contact-us` |

## Project data (in display order)

1. **L1 Certification Rockets**: "Built 2 high-power rockets for the NAR L1 Certification test. One rocket designed in OpenRocket, with custom 3D printed components designed in Onshape. The other L1 rocket being sourced from an Apogee Rocket kit."
2. **FPV Racing Drones**: "One 5-inch FPV racing drone with a custom 3D printed frame, designed in Fusion360. As well as two drones from kits, one 5-inch FPV racing drone and one 7-inch FPV drone."
3. **Open-Source Smart GCP (Ground Control Points)**: Details coming soon.
4. **AI Sumo Robots**: Details coming soon.
5. **7-inch FPV Drone with Carbon Fiber Frame**: Details coming soon.
6. **Fixed Wing VTOL**: Details coming soon.
7. **Professional Club Website**: Details coming soon.
8. **Physics Research Capstones**: Details coming soon.

Note: the brief also lists "3D Printed Drone Frames (ABS Filament)" as a Fall 2026 project. It is covered by the FPV Racing Drones card rather than listed as its own card.

## Page layouts

### `/projects`

- `<SiteHeader />` at the top.
- Light section (`bg-[#eeeeea]`), matching the home page Projects section: the eyebrow label "Projects", the heading "From first sketch to first flight.", and the subline "Our current project list for Fall 2026."
- A grid of 8 cards in the existing card style (top border, number 01–08, title, text): 3 columns at `md` and up, 1 column on mobile.
- The same maroon Contact strip as the home page at the bottom.

### `/members`

- `<SiteHeader />` at the top.
- A dark section: the eyebrow label "Members", the heading "Curiosity is the only prerequisite." and the line "Our roster is coming soon. We're updating it with member photos."
- A large clickable email card: the heading "Interested in joining?" with the address shown visibly underneath. It links to `mailto:redlandsroboticsanddroneclub@gmail.com?subject=Interest%20in%20joining%20the%20Robotics%20and%20Drone%20Club`.
- The same Contact strip at the bottom.

## Error handling

The site is static, with no data fetching. The only external action is the `mailto:` link. The address is shown as visible text so visitors without an email client can still copy it.

## Testing

There is no test framework in the repo. Verification:
1. `npm run lint` and `npm run build` in `my-app/` both pass.
2. Run the dev server and check `/`, `/projects` and `/members` at mobile (375px) and desktop (1280px) widths, with screenshots.
3. Click every nav link from each page and confirm it lands on the right page or section. Confirm the email card opens a `mailto:` with the correct address and subject.

## Out of scope (later steps)

Expo content, join or RSVP forms, the ship log or gallery, colour changes, removing unused template folders, and status badges.
