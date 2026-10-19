export type Project = {
  title: string;
  description: string;
};

// Display order matters: the first three are featured on the home page.
export const projects: Project[] = [
  {
    title: "L1 Certification Rockets",
    description:
      "Built 2 high-power rockets for the NAR L1 Certification test. One rocket designed in OpenRocket, with custom 3D printed components designed in Onshape. The other L1 rocket being sourced from an Apogee Rocket kit.",
  },
  {
    title: "FPV Racing Drones",
    description:
      "One 5-inch FPV racing drone with a custom 3D printed frame, designed in Fusion360. As well as two drones from kits, one 5-inch FPV racing drone and one 7-inch FPV drone.",
  },
  { title: "Open-Source Smart GCP (Ground Control Points)", description: "Details coming soon." },
  { title: "AI Sumo Robots", description: "Details coming soon." },
  { title: "7-inch FPV Drone with Carbon Fiber Frame", description: "Details coming soon." },
  { title: "Fixed Wing VTOL", description: "Details coming soon." },
  { title: "Professional Club Website", description: "Details coming soon." },
  { title: "Physics Research Capstones", description: "Details coming soon." },
];

export const featuredProjects = projects.slice(0, 3);
