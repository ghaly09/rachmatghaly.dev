import { container } from "@/src/lib/utils/Types";
import React from "react";
import AboutTitle from "../../Atoms/Descriptions/AboutTitle";
import AboutTitleMotion from "../../ui/FramerMotion/aboutTitle-motion";

export default function AboutContainer(props: container) {
  const { children } = props;

  return (
    <div id="about">
      <AboutTitleMotion>
        <AboutTitle />
      </AboutTitleMotion>
      <div className="flex flex-col-reverse md:flex-row gap-5 justify-around items-center md:items-start px-5 lg:px-0 pb-8">
        {children}
      </div>
    </div>
  );
}
