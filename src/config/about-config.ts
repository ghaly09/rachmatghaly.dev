export type dataAbout = {
  photoGhaly: {
    style: string;
    src: string;
    alt: string;
  };
  iconSkills: Array<{
    style: string;
    src: string;
    width: number;
    height: number;
    alt: string;
    title: string;
  }>;
};

export interface aboutTypes {
  style: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
}

export const aboutConfig: dataAbout = {
  photoGhaly: {
    style: "rounded-md w-60 md:w-[900px]",
    src: "https://github.com/ghaly09/rachmatghaly.dev/assets/60167960/add292a3-7255-43a4-97a7-125819387df8",
    alt: "foto-profil-ghaly",
  },
  iconSkills: [
    {
      style: "w-10 md:w-auto",
      src: "https://img.icons8.com/fluency/48/000000/node-js.png",
      width: 50,
      height: 57,
      alt: "nodejs",
      title: "Node.js",
    },
    {
      style: "w-10 md:w-auto",
      src: "https://img.icons8.com/color/48/null/git.png",
      width: 55,
      height: 57,
      alt: "git",
      title: "Git",
    },
    {
      style: "w-10 md:w-auto",
      src: "https://img.icons8.com/color/48/null/python--v1.png",
      width: 55,
      height: 57,
      alt: "python",
      title: "Python",
    },
    {
      style: "w-10 md:w-auto",
      src: "https://img.icons8.com/color/48/null/javascript--v1.png",
      width: 55,
      height: 57,
      alt: "javascript",
      title: "Javascript",
    },

    {
      style: "w-8 md:w-auto",
      src: "https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/typeScript.svg",
      width: 42,
      height: 52,
      alt: "typescript",
      title: "typescript",
    },
    {
      style: "w-8 md:w-auto",
      src: "https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/react.svg",
      width: 47,
      height: 45,
      alt: "reactjs",
      title: "reactjs",
    },
    {
      style: "w-10 md:w-auto",
      src: "https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/tailwind.svg",
      width: 50,
      height: 50,
      alt: "tailwindcss",
      title: "tailwindcss",
    },
    {
      style: "w-8 md:w-auto",
      src: "https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/framer.svg",
      width: 40,
      height: 40,
      alt: "framer",
      title: "framer",
    },
    {
      style: "w-8 md:w-auto",
      src: "https://user-images.githubusercontent.com/60167960/226171904-03fca69e-dd4b-4e05-8276-dd4396f62907.svg",
      width: 45,
      height: 45,
      alt: "nextjs",
      title: "nextjs",
    },
    {
      style: "w-8 md:w-auto",
      src: "https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/vsc.svg",
      width: 45,
      height: 45,
      alt: "VSCode",
      title: "VSCode",
    },
    {
      style: "w-8 md:w-auto",
      src: "https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/figma.svg",
      width: 45,
      height: 45,
      alt: "figma",
      title: "figma",
    },
  ],
};
