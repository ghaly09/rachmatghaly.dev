import React from "react";
import IconSkill from "../../Atoms/Icons/IconSkills";
import { aboutConfig } from "@/src/config/about-config";
import Image from "next/image";

export default function SkillsIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-1">
      <span className="flex">
        {aboutConfig.iconSkills?.slice(0, 4).map((icon, index) => (
          <IconSkill
            key={index}
            style={icon?.style}
            src={icon?.src}
            width={icon?.width}
            height={icon?.height}
            alt={icon?.alt}
            title={icon?.title}
          />
        ))}
      </span>

      {aboutConfig.iconSkills?.slice(4, 9).map((icon, index) => (
        <IconSkill
          key={index}
          style={icon?.style}
          src={icon?.src}
          width={icon?.width}
          height={icon?.height}
          alt={icon?.alt}
          title={icon?.title}
        />
      ))}

      <div>
        {" "}
        <Image
          src="https://user-images.githubusercontent.com/60167960/226206827-2b005282-0b89-4bf0-9e68-f48ad671db96.svg"
          width="20"
          height="45"
          alt="verticalLine"
        />
      </div>
      {aboutConfig.iconSkills?.slice(9, 11).map((icon, index) => (
        <IconSkill
          key={index}
          style={icon?.style}
          src={icon?.src}
          width={icon?.width}
          height={icon?.height}
          alt={icon?.alt}
          title={icon?.title}
        />
      ))}
    </div>
  );
}
