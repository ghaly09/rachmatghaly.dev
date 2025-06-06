import { FaTwitter, FaGithub } from "react-icons/fa";
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
    "https://drive.google.com/file/d/1kur2J1g6nO0T2vtXbSsOiqCq0xTZBHqj/view?usp=sharing",

  iconsLink: [
    {
      icon: FiFigma,
      iconName: "Figma",
      title: "@ghalyprojects",
      color: "text-orange-500",
      directLink: "https://www.figma.com/@ghalyprojects",
    },
    {
      icon: FaTwitter,
      iconName: "Twitter",
      title: "ghaly09",
      color: "text-sky-500",
      directLink: "https://x.com/Ghalx09",
    },
    {
      icon: FaGithub,
      iconName: "GitHub",
      title: "ghaly09",
      color: "dark:text-white text-black",
      directLink: "https://github.com/ghaly09",
    },
  ],
};
