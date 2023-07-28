import { AiFillGithub } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { IconType } from "react-icons/lib";

export interface homeTypes {
  resume: string;
  iconsLink: Array<{
    icon: IconType;
    iconName: string;
    directLink: string;
    title: string;
    color: string;
  }>;
}

export const homeConfig: homeTypes = {
  resume:
    "https://drive.google.com/file/d/1zvRZvlQYO11jRdWIMu1xdn2C1vm2SDHY/view?usp=sharing",
  iconsLink: [
    {
      icon: FiFigma,
      iconName: "FIgma",
      title: "@ghalyprojects",
      color: "text-orange-600",
      directLink: "https://www.figma.com/@ghalyprojects",
    },
    {
      icon: AiFillGithub,
      iconName: "GitHub",
      title: "ghaly09",
      color: "text-white",
      directLink: "https://github.com/ghaly09",
    },
  ],
};
