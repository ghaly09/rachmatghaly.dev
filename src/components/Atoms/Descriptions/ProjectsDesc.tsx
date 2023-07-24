import * as React from "react";
import { Reveal } from "../../ui/FramerMotion/onReveal";

export default function ProjectsDesc() {
  return (
    <div className="font-ghaly px-5 lg:px-0 mt-6 md:mt-12">
      <Reveal delay={0.2} duration={0.5}>
        <h2 className="text-3xl lg:text-5xl font-bold pb-3 text-transparent bg-clip-text color-ghaly">
          Projects
        </h2>
      </Reveal>
      <Reveal delay={0.3} duration={0.5}>
        <p className="text-base lg:text-md pb-3 text-gray-600 dark:text-[#d3d4d6]">
          Showcase of my works on Frontend Development and Design.
        </p>
      </Reveal>
    </div>
  );
}
