import { AiFillGithub } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { IconType } from "react-icons/lib";

export interface homeTypes {
  iconsLink: Array<{
    icon: IconType;
    iconName: string;
    directLink: string;
    title: string;
    color: string;
  }>;
}

export const homeConfig: homeTypes = {
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
