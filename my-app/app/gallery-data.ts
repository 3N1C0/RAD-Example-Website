export const galleryCategories = ["Projects", "Outreach", "Company Tours"] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryPhoto = {
  src: string;
  caption: string;
  category: GalleryCategory;
  width: number;
  height: number;
};

// Display order matters: the first eight are what "All" shows before "Show more".
export const galleryPhotos: GalleryPhoto[] = [
  { src: "/gallery/nasa-jpl-visit.webp", caption: "Visit to NASA's Jet Propulsion Laboratory", category: "Company Tours", width: 400, height: 280 },
  { src: "/gallery/l1-rocket-body-tubes.jpg", caption: "L1 rocket body tubes and nose cones", category: "Projects", width: 1200, height: 1600 },
  { src: "/gallery/fpv-racing-drone.webp", caption: "FPV racing drone build", category: "Projects", width: 400, height: 301 },
  { src: "/gallery/seds-usa-seattle.webp", caption: "SEDS USA networking event in Seattle", category: "Company Tours", width: 400, height: 300 },
  { src: "/gallery/l1-rocket-build-session.jpg", caption: "L1 Certification Rocket build session", category: "Projects", width: 1200, height: 1600 },
  { src: "/gallery/robot-wiring-workshop.webp", caption: "Wiring a robot in the workshop", category: "Projects", width: 400, height: 297 },
  { src: "/gallery/rocket-airflow-simulation.jpg", caption: "Rocket airflow simulation", category: "Projects", width: 1600, height: 863 },
  { src: "/gallery/telescope-night.webp", caption: "Telescope night with the club", category: "Outreach", width: 400, height: 273 },
  { src: "/gallery/fpv-drone-frame-electronics.jpg", caption: "FPV drone frame and electronics mid-build", category: "Projects", width: 1600, height: 1001 },
  { src: "/gallery/robotic-arm-prototype.jpg", caption: "Robotic arm prototype", category: "Projects", width: 1200, height: 1600 },
  { src: "/gallery/circuit-board-testing.jpg", caption: "Testing a circuit board on the electronics bench", category: "Projects", width: 1600, height: 1200 },
  { src: "/gallery/l1-rocket-fin-assembly.jpg", caption: "Assembling L1 rocket fins", category: "Projects", width: 1200, height: 1600 },
  { src: "/gallery/l1-rocket-components.jpg", caption: "L1 rocket components ready for assembly", category: "Projects", width: 1200, height: 1600 },
  { src: "/gallery/robot-chassis-build.jpg", caption: "Robot chassis build", category: "Projects", width: 1600, height: 1200 },
  { src: "/gallery/rocket-cad-model.jpg", caption: "Rocket CAD model", category: "Projects", width: 1600, height: 499 },
  { src: "/gallery/lab-build-session.webp", caption: "Hands-on build session in the lab", category: "Projects", width: 400, height: 266 },
  { src: "/gallery/soldering-workstation.jpg", caption: "Soldering workstation", category: "Projects", width: 907, height: 1600 },
  { src: "/gallery/fpv-drone-setup.jpg", caption: "FPV drone setup and configuration", category: "Projects", width: 1205, height: 1600 },
  { src: "/gallery/team-rocket-builds.webp", caption: "Team photo with rocket builds", category: "Outreach", width: 400, height: 301 },
  { src: "/gallery/seds-usa-denver.jpg", caption: "Club members at the SEDS USA Conference in Denver", category: "Company Tours", width: 1600, height: 1124 },
  { src: "/gallery/pizza-night.webp", caption: "Pizza night at a club meeting", category: "Outreach", width: 400, height: 266 },
  { src: "/gallery/campus-networking-event.webp", caption: "Networking at a campus event", category: "Outreach", width: 400, height: 266 },
  { src: "/gallery/seattle-team-night.webp", caption: "Team night out in Seattle", category: "Outreach", width: 400, height: 300 },
];
