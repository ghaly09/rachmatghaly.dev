export type dataButton = {
  buttonAttributes: Array<{ url: string; title: string; icon: string }>;
};

export const footerConfig: dataButton = {
  buttonAttributes: [
    {
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=rachmatghaly09@gmail.com",
      title: "My Email",
      icon: "fa fa-envelope-o",
    },

    {
      url: "https://github.com/ghaly09",
      title: "My Github",
      icon: "fa fa-github",
    },

    {
      url: "https://www.linkedin.com/in/rachmat-ghaly/",
      title: "My linkedin",
      icon: "fa fa-linkedin-square",
    },

    {
      url: "https://id.pinterest.com/rachmatghaly/",
      title: "My pinterest",
      icon: "fa fa-pinterest",
    },
  ],
};
