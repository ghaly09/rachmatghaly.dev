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
  style: string;
  src: string;
  width?: number;
  height?: number;
  alt: string;
  title: string;
  description: string;
  imgLink: string;
  directLink: string;
  type?: string;
  eduTitle: string;
  major: string;
  skills: string[];
  key: number;
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
          major: "React and React Native for Frontend Developer",
          style: "pl-3 w-[180px]",
          skills: [
            "React.js",
            "React Native",
            "Next.js",
            "Redux",
            "Git",
            "TypeScript",
            "JavaScript",
            "Linux Command Line",
            "JSX",
            "ES6",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Atomic Design",
            "Chakra UI",
            "DaisyUI",
            "Deploy",
            "Consuming API",
            "+ 5",
          ],
          imgLink:
            "https://res.cloudinary.com/druckyjuu/image/upload/v1690187482/Projects/Hacktiv8-logo_arog7z.png",
          directLink: "",
        },
        {
          eduTitle: "Ruangguru Camp",
          major: "Frontend Engineer",
          style: "py-4 pl-4 max-w-[100px]",
          skills: [
            "React.js",
            "React Router DOM",
            "Redux",
            "JavaScript",
            "Git",
            "ES6",
            "Linux Command Line",
            "JSX",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "JS-DOM",
            "Chakra UI",
            "Deployment",
            "Browser API",
            "Paas",
            "Consuming API",
            "+ 3",
          ],
          imgLink:
            "https://res.cloudinary.com/druckyjuu/image/upload/v1690187514/Projects/Ruangguru_v5ddvo.png",
          directLink: "h",
        },
        {
          eduTitle: "IPB University",
          major: "Major, Physics",
          style: "py-4 pl-4 max-w-[100px]",
          skills: [
            "Classical physics",
            "Modern physics",
            "Quantum physics",
            "Thermodynamics",
            "Electromagnetism",
            "Wave",
            "Mechanics",
            "Optics",
            "Electricity",
            "Particle physics",
            "Fluid mechanics",
            "+ 10",
          ],
          imgLink:
            "https://res.cloudinary.com/druckyjuu/image/upload/v1690187551/Projects/IPB_dg5ioj.png",
          directLink: "",
        },
        {
          eduTitle: "IPB University",
          major: "Minor, Information System (Computer Science)",
          style: "py-4 pl-4 max-w-[100px]",
          skills: [
            "Algoritms and Programming",
            "Database Systems",
            "Software Engineering",
            "Human and Computer Interaction",
            "Information System",
          ],
          imgLink:
            "https://res.cloudinary.com/druckyjuu/image/upload/v1690187551/Projects/IPB_dg5ioj.png",
          directLink: "",
        },
      ],
    },
    certificate: {
      type: "certificate",
      description: "Here is My Licenses & Certifications",
      certificates: [
        {
          title: "Hacktiv8 Indonesia",
          description: "Frontend Developer",
          imgLink:
            "https://res.cloudinary.com/druckyjuu/image/upload/v1690187639/Projects/RACHMAT_GHALY-certificate-Hacktiv8_page-0001_swsgg8.jpg",
          directLink:
            "https://drive.google.com/file/d/1UO1BoQYZl70Es7mw2kaGtLix4-zXQ_J_/view?usp=sharing",
        },
        {
          title: "Ruangguru Camp",
          description: "Frontend Engineer",
          imgLink:
            "https://res.cloudinary.com/druckyjuu/image/upload/v1690187732/Projects/Certificate_Rachmat_Ghaly-Ruangguru-MSIB_fpfps5.jpg",
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
            "https://res.cloudinary.com/druckyjuu/image/upload/v1721060697/Projects/Rachmat_Ghaly-React_ReactNative-Styling_oicbxk.jpg",
          directLink:
            "https://drive.google.com/file/d/1XymhuOfjCN4Tsh4JiBTvVV2Ba2ESjqHM/view?usp=sharing",
          // "https://sertiva.id/credential/cd7dda4d-5ebd-4c9d-a8fa-84c7222154e5",
        },
        {
          title: "ECMAScript 2015 (ES6)",
          description: "Hacktiv8 Indonesia",
          imgLink:
            "https://res.cloudinary.com/druckyjuu/image/upload/v1721060696/Projects/Rachmat_Ghaly-ES6-signed-4760ed46-0c1e-4fce-90fe-bd59426c7fa2_qx7iwy.jpg",
          directLink:
            "https://drive.google.com/file/d/1fListZnTfi1p5OQk4KXbAgjVBklGf5XJ/view?usp=sharing",
          // "https://sertiva.id/credential/4760ed46-0c1e-4fce-90fe-bd59426c7fa2",
        },
        {
          title: "Software Engineering",
          description: "Ruangguru",
          imgLink:
            "https://img.rk-certificate.com/RACHMATXKLR85UMC/CERT-NI26PKV3.jpg",
          directLink:
            "https://img.rk-certificate.com/RACHMATXKLR85UMC/CERT-NI26PKV3.jpg",
        },
        {
          title: "Programming with JavaScript",
          description: "Ruangguru",
          imgLink:
            "https://img.rk-certificate.com/RACHMATXKLR85UMC/CERT-GOVRVIA4.jpg",
          directLink:
            "https://img.rk-certificate.com/RACHMATXKLR85UMC/CERT-GOVRVIA4.jpg",
        },
        {
          title: "Front-End Web Development With HTML & CSS",
          description: "Ruangguru",
          imgLink:
            "https://img.rk-certificate.com/RACHMATXKLR85UMC/CERT-VCGWEH8B.jpg",
          directLink:
            "https://img.rk-certificate.com/RACHMATXKLR85UMC/CERT-VCGWEH8B.jpg",
        },
        {
          title: "Global AI Bootcamp 2018",
          description: "Dicoding",
          imgLink:
            "https://res.cloudinary.com/druckyjuu/image/upload/v1690187790/Projects/Rachmat_Ghaly-Global-AI-Bootcamp-certificate_page-0001_dwi6hg.jpg",
          directLink:
            "https://drive.google.com/file/d/1SmYQXvZl64zK1LH-TJksHcoCW4rAiNAJ/view?usp=sharing",
        },
        {
          title: "___________________________",
          description: "Click button below for see more",
          imgLink:
            "https://res.cloudinary.com/druckyjuu/image/upload/v1690600078/Projects/See-more_h0fw8i.svg",
          directLink:
            "https://drive.google.com/drive/folders/1fYkBwt5mWVrWSvi8DP-unBbv9cqSaJWM?usp=sharing",
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
