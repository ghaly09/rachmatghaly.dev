export type dataAbout = {
  photoGhaly: {
    style: string;
    src: string;
    alt: string;
  };

  sortBy: {
    education: object;
    certificate: object;
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
  style?: string;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  title: string;
  description: string;
  imgLink: string;
  directLink: string;
  type?: string;
}

export const aboutConfig: dataAbout = {
  photoGhaly: {
    style: "rounded-md w-60 md:w-[900px]",
    src: "https://github.com/ghaly09/rachmatghaly.dev/assets/60167960/add292a3-7255-43a4-97a7-125819387df8",
    alt: "foto-profil-ghaly",
  },

  sortBy: {
    education: {
      type: "education",
      description: "Here is My Learning Journey",
      bootCamp: [
        {
          eduTitle: "Hacktiv8 Indonesia",
          major: "React and Reat Native for Frontend Developer",
          skills: "",
          imgLink: "",
          directLink: "",
        },
        {
          eduTitle: "Ruangguru Camp",
          major: "Frontend Engineer",
          skills: "",
          imgLink: "",
          directLink: "",
        },
      ],
      university: {
        eduTitle: "IPB University",
        major: "Physics",
        minor: "Information System (Computer Science)",
      },
    },
    certificate: {
      type: "certificate",
      description: "Here is My Licenses & Certifications",
      certificates: [
        {
          title: "Hacktiv8 Indonesia",
          description: "Frontend Developer",
          imgLink:
            "https://drive.google.com/uc?id=18pjcyKH2OjosTiyjhUbqX17jQdwd6dFF",
          directLink:
            "https://drive.google.com/file/d/1jhvqxVFyvEVotf4ohFulu9prQPhO1sUO/view?usp=sharing",
        },
        {
          title: "Ruangguru Camp",
          description: "Frontend Engineer",
          imgLink:
            "https://drive.google.com/uc?id=1R3ssH80QcIwOOmBLw32C_MMc8le0TZcj",
          directLink:
            "https://drive.google.com/file/d/1BdtgKXAjjCTlTRyfqzzZ6sgrNLzjgIi1/view?usp=sharing",
        },
        {
          title: "Bash Shell Scripting",
          description: "Coursera",
          imgLink:
            "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~TBX2AT3SXVNB/CERTIFICATE_LANDING_PAGE~TBX2AT3SXVNB.jpeg",
          directLink:
            "https://www.coursera.org/account/accomplishments/verify/TBX2AT3SXVNB",
        },
        {
          title: "Adobe Illustrator",
          description: "Coursera",
          imgLink:
            "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FQJ6YDQ5Q355/CERTIFICATE_LANDING_PAGE~FQJ6YDQ5Q355.jpeg",
          directLink:
            "https://www.coursera.org/account/accomplishments/verify/FQJ6YDQ5Q355",
        },
        {
          title: "React.js and React Native Styling Components",
          description: "Hacktiv8 Indonesia",
          imgLink:
            "https://d2qv16rycic4zo.cloudfront.net/images/cd7dda4d-5ebd-4c9d-a8fa-84c7222154e5_medium.png",
          directLink:
            "https://sertiva.id/credential/cd7dda4d-5ebd-4c9d-a8fa-84c7222154e5",
        },
        {
          title: "ECMAScript 2015 (ES6)",
          description: "Hacktiv8 Indonesia",
          imgLink:
            "https://d2qv16rycic4zo.cloudfront.net/images/4760ed46-0c1e-4fce-90fe-bd59426c7fa2_medium.png",
          directLink:
            "https://sertiva.id/credential/4760ed46-0c1e-4fce-90fe-bd59426c7fa2",
        },
        {
          title: "Global AI Bootcamp 2018",
          description: "Dicoding",
          imgLink:
            "https://drive.google.com/uc?id=1g559Gl7bcWrdK0PVctO4arwvKZKoRFZA",
          directLink:
            "https://drive.google.com/file/d/1SmYQXvZl64zK1LH-TJksHcoCW4rAiNAJ/view?usp=sharing",
        },
      ],
    },
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
