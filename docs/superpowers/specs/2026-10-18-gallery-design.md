# Home Page Gallery — Design

Date: 2026-10-18
App: `my-app/` (Next.js 16.3, React 19, Tailwind 4, TypeScript)
Source photos: `RAD-Website/gallery/` (25 files; the originals are left untouched)

## Goal

Add a Gallery section to the home page, placed just before Contact. It shows photos of projects, outreach events and company tours as proof of the club's work.

## Decisions (agreed with the club)

- Filter buttons: All / Projects / Outreach / Company Tours.
- Show 8 photos per filter, then a "Show more" button that reveals the rest without leaving the page.
- Clicking a photo opens it in an enlarged view.
- Captions are short descriptions of what is visible, reviewed by the club (see the table below).
- Photos showing company logos (NASA JPL, SEDS USA event backdrop) are included, with captions that describe the visit or event. They are not presented as partners or sponsors.
- Duplicates `IMG_4175.HEIC` and `IMG_3601 2.HEIC` are excluded.

## Approach

A custom client component plus a static data file. No new dependencies. This follows the existing pattern of `projects-data.ts`, `project-card.tsx` and `about-carousel.tsx`.

## Photo processing

- Output folder: `my-app/public/gallery/`, with descriptive kebab-case filenames.
- HEIC files and the large PNG/JPG files (`drone.png`, `IMG_1920.jpg`, `IMG_4224.jpg`, `pic12.png`, `pic13.png`, `pic14.png`, `pic0.png`) are converted to JPEG with macOS `sips`: at most 1600px on the long edge, quality about 80. HEIC orientation is preserved.
- The 400px `.webp` files are copied as they are.
- Each photo's width and height are recorded in the data file so `next/image` can reserve space.

## Files

- `app/gallery-data.ts`: an ordered `GalleryPhoto[]` (`src`, `alt`/caption, `category`, `width`, `height`) and the category list.
- `app/gallery.tsx` (client component): the filters, the grid, "Show more" and the enlarged view.
- `app/page.tsx`: add `<section id="gallery">` before Contact with the label "05 / Gallery" and the heading "Proof of work."; change the Contact label to "06 / Contact".
- `app/site-header.tsx`: add a "Gallery" nav link to `/#gallery`, between Members and Contact.

## Layout

- Dark section (`#1A1A1A`), using the home page's existing label, heading and spacing styles.
- Filter buttons in a row, with the active one highlighted (`aria-pressed`).
- Grid: 4 columns from `md` up, 2 on mobile. Uniform tiles cropped with `object-cover`.
- The "Show more" button is visible only when the current filter has more than 8 photos.

## Behavior

- Changing the filter resets the view to the first 8 photos.
- "Show more" reveals all remaining photos for that filter.
- Enlarged view: a fixed full-screen dark overlay showing the uncropped photo (`object-contain`), its caption and a counter "n / total".
  - Close with the ✕ button, Esc, or a click on the backdrop.
  - Previous and next with on-screen arrows or the ←/→ keys, cycling only within the current filter.
  - Page scrolling is locked while the view is open.
  - It has `role="dialog"` and `aria-modal="true"`, focus moves to the close button when it opens, and focus returns to the clicked photo when it closes.
- Each photo tile is a `<button>` labelled with its caption.

## Photos and captions (display order)

| # | Source | Category | Caption |
|---|---|---|---|
| 1 | pic3.webp | Company Tours | Visit to NASA's Jet Propulsion Laboratory |
| 2 | IMG_4180.HEIC | Projects | L1 rocket body tubes and nose cones |
| 3 | pic8.webp | Projects | FPV racing drone build |
| 4 | pic9.webp | Company Tours | SEDS USA networking event in Seattle |
| 5 | IMG_3602.HEIC | Projects | L1 Certification Rocket build session |
| 6 | pic1.webp | Projects | Wiring a robot in the workshop |
| 7 | pic12.png | Projects | Rocket airflow simulation |
| 8 | pic4.webp | Outreach | Telescope night with the club |
| 9 | drone.png | Projects | FPV drone frame and electronics mid-build |
| 10 | IMG_2800.HEIC | Projects | Robotic arm prototype |
| 11 | IMG_2923.HEIC | Projects | Testing a circuit board on the electronics bench |
| 12 | IMG_4176.HEIC | Projects | Assembling L1 rocket fins |
| 13 | IMG_4179.HEIC | Projects | L1 rocket components ready for assembly |
| 14 | IMG_4224.jpg | Projects | Robot chassis build |
| 15 | pic0.png | Projects | Rocket CAD model |
| 16 | pic11.webp | Projects | Hands-on build session in the lab |
| 17 | pic13.png | Projects | Soldering workstation |
| 18 | pic14.png | Projects | FPV drone setup and configuration |
| 19 | pic2.webp | Outreach | Team photo with rocket builds |
| 20 | IMG_1920.jpg | Company Tours | Club members at the SEDS USA Conference in Denver |
| 21 | pic5.webp | Outreach | Pizza night at a club meeting |
| 22 | pic7.webp | Outreach | Networking at a campus event |
| 23 | pic6.webp | Outreach | Team night out in Seattle |

Category counts: Projects 15, Outreach 5, Company Tours 3.

Note: #20 moved from Outreach to Company Tours. It is a SEDS USA conference, which matches #4 (a SEDS USA event).

## Error handling

The data is static and every image is local. A missing file would fail visibly at build or dev time. Keyboard listeners are attached only while the enlarged view is open and removed when it closes.

## Testing

1. `npx eslint app`, `npx tsc --noEmit` and `npm run build` pass.
2. Playwright against `localhost:3000` at 1280px and 390px:
   - each filter shows the right count and "Show more" shows only when needed
   - "Show more" reveals all photos for the filter
   - the enlarged view opens, ←/→ and the arrow buttons cycle within the filter, and Esc, ✕ and a backdrop click all close it
   - there is no horizontal scroll
   - screenshots are taken of the section and of the enlarged view
3. The "Gallery" nav link goes to `/#gallery` from every page.

## Out of scope

Swipe gestures, zoom, captions shown on the grid tiles, and a separate gallery page.
