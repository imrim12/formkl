export default {
  lang: "en-US",
  title: "FORMKL",
  description: "Form markup language",

  themeConfig: {
    siteTitle: "FORMKL",
    logo: "public/assets/logo.png",

    nav: [{ text: "Syntax guide", link: "/syntax/form" }],

    socialLinks: [{ icon: "github", link: "https://github.com/formkl/formkl" }],

    sidebar: [
      {
        text: "Getting started",
        collapsible: true,
        items: [{ text: "Introduction", link: "/introduction" }],
      },
      {
        text: "Installation",
        collapsible: true,
        items: [
          { text: "Vue 3", link: "/guide/install-with-vue" },
          { text: "React", link: "/guide/install-with-react" },
          { text: "Angular", link: "/guide/install-with-angular" },
        ],
      },
      {
        text: "Syntax",
        collapsible: true,
        items: [
          { text: "Form", link: "/syntax/form" },
          { text: "Field", link: "/syntax/field" },
          { text: "Model", link: "/syntax/model" },
          { text: "Validation", link: "/syntax/validation" },
          { text: "Multi-responses", link: "/syntax/multiple" },
        ],
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022",
    },
  },
};
