import * as React from "react";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiVercel,
  SiJavascript,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
} from "react-icons/Si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/Io";
import { FiFigma } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/Io";
import { AiFillVideoCamera } from "react-icons/Ai";
import { IconType } from "react-icons/lib";

export interface projectTypes {
  dataProjects: Array<{
    title: string;
    description: string;
    technologies: Array<{ icon: IconType; iconName: string }>;
    date: string;
    imgSrc: string;
    directLink: string;
  }>;
}

export const projectsConfig: projectTypes = {
  dataProjects: [
    {
      title: "MovieCat",
      imgSrc:
        "https://res.cloudinary.com/druckyjuu/image/upload/v1690025628/Projects/MovieCat_jrjdbg.svg",
      description:
        "A Movie Catalog created with Next.js for showing All Movies, Series, and TV-Shows even Trending and Popular Movies, The Second Final Project of Hacktiv8.",
      technologies: [
        { icon: SiNextdotjs, iconName: "Next.js" },
        { icon: SiRedux, iconName: "Redux" },
        { icon: SiTailwindcss, iconName: "Tailwindcss" },
        { icon: SiVercel, iconName: "Vercel" },
      ],
      date: "July 13, 2021",
      directLink:
        "https://github.com/ghaly09/MovieCatalog-Kel07-FinalProject04-Hacktiv8",
    },
    {
      title: "BEKER [Berita Keren]",
      imgSrc:
        "https://res.cloudinary.com/druckyjuu/image/upload/v1690020849/Projects/BEKER_ujrkii.svg",
      description:
        "A News App created with React.js for showing the Latest News in the World and The First Final Project of Hacktiv8",
      technologies: [
        { icon: FaReact, iconName: "React.js" },
        { icon: SiTailwindcss, iconName: "Tailwindcss" },
        { icon: SiVercel, iconName: "Vercel" },
      ],
      date: "July 13, 2021",
      directLink:
        "https://github.com/FinalProject01-Kel-4-Hacktiv8/FP01-Kel04-news-app",
    },
    {
      title: "Gradient Generator App",
      imgSrc:
        "https://res.cloudinary.com/druckyjuu/image/upload/v1689772070/Projects/gradientGenerator_zy8ltf.svg",
      description:
        "A Generating Gradient App with many features to help Developers & designers, as a practice in Javascript, HTML and CSS.",
      technologies: [{ icon: SiJavascript, iconName: "Javascript" }],
      date: "July 13, 2021",
      directLink: "https://github.com/ghaly09/gradient-generator",
    },
    {
      title: "Weather.ing App",
      imgSrc:
        "https://res.cloudinary.com/druckyjuu/image/upload/v1689703241/Projects/weatherApp_rll3ln.svg",
      description:
        "A Monitoring Weather App of all locations in the world by using API from OpenWeather API, as a practice in Javascript, HTML and CSS.",
      technologies: [{ icon: SiJavascript, iconName: "Javascript" }],
      date: "July 13, 2021",
      directLink: "https://github.com/ghaly09/weather-app-project",
    },
    {
      title: "Calculator Javascript Project",
      imgSrc:
        "https://res.cloudinary.com/druckyjuu/image/upload/v1689703010/Projects/calculator_itrwdx.svg",
      description:
        "After I learned about DOM (Document Object Model), I try to make a mini project to apply my knowledge, and Woala! here it this!",
      technologies: [{ icon: SiJavascript, iconName: "Javascript" }],
      date: "July 13, 2021",
      directLink: "https://github.com/ghaly09/calculator-project-DOM",
    },
    {
      title: "FindThing UI/UX Project",
      imgSrc:
        "https://user-images.githubusercontent.com/60167960/230802874-23718e05-6d5b-42ce-bc12-e0171027498a.png",
      description:
        "A design of application and device for helping someone to get or looking for his/her lost stuff efficiently.",
      technologies: [{ icon: FiFigma, iconName: "Figma" }],
      date: "July 13, 2021",
      directLink: "https://www.figma.com/community/file/1194699066601543602",
    },
    {
      title: "Datamoon UI/UX Project",
      imgSrc:
        "https://user-images.githubusercontent.com/60167960/230816587-d3bef426-a84e-4dde-a3ad-de50278a12ab.png",
      description:
        "A platform for finding the Datasets and processing them to become the benefit of businesses, companies, and science.",
      technologies: [{ icon: FiFigma, iconName: "Figma" }],
      date: "July 13, 2021",
      directLink:
        "https://www.figma.com/file/Baf7dV02gvKfBHms5Otyrf/Moonlight-Project?type=design&node-id=1%3A7&mode=design&t=n9zjS1BnBAjkXdjg-1",
    },
    {
      title: "10+ Design Projects",
      imgSrc:
        "https://res.cloudinary.com/druckyjuu/image/upload/v1689703240/Projects/10Designs_iy6t0q.svg",
      description:
        "I made Bunch of Logo, Poster and Banner Projects for many Organizations, Teams and Campus Project.",
      technologies: [
        { icon: SiAdobeillustrator, iconName: "Adobe Illustrator" },
        { icon: SiAdobephotoshop, iconName: "Adobe Photoshop" },
      ],
      date: "July 13, 2021",
      directLink: "https://id.pinterest.com/rachmatghaly/",
    },
    {
      title: "Halotech.in Academy Project",
      imgSrc:
        "https://user-images.githubusercontent.com/60167960/230816950-197eadb0-c6ef-4ad5-909f-d8975261cdf8.png",
      description:
        "A youtube channel focused on sharing knowledge, tips & tricks, and a community about Technology for everyone who wants to learn about Updated Tech. Subscribe to our channel and be powerful!.",
      technologies: [
        { icon: AiFillVideoCamera, iconName: "Video Project" },
        { icon: IoLogoYoutube, iconName: "Youtube Project" },
      ],
      date: "July 13, 2021",
      directLink: "https://www.youtube.com/@otwkkntegalwarukuy9359/videos",
    },

    {
      title: "KKN Tegalwaru Video Project",
      imgSrc:
        "https://user-images.githubusercontent.com/60167960/231047312-26cdb3fa-89e4-4d17-91fc-22f2e7cb74e8.jpg",
      description:
        "I made The Profile Video for UMKM with my Kuliah Kerja Nyata (KKN) team program in Tegal Waru Village from IPB University.",
      technologies: [
        { icon: SiAdobepremierepro, iconName: "Adobe Premiere pro" },
        { icon: AiFillVideoCamera, iconName: "Video Project" },
        { icon: IoLogoYoutube, iconName: "Youtube Project" },
      ],
      date: "July 13, 2021",
      directLink: "https://www.youtube.com/@otwkkntegalwarukuy9359/videos",
    },
  ],
};
