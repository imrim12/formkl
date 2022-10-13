export default {
  lang: "en-US",
  title: "FORMKL",
  description: "Form markup language",

  themeConfig: {
    siteTitle: "FORMKL",
    logo: "public/assets/logo.png",

    nav: [{ text: "Guide", link: "/guide/syntax" }],

    socialLinks: [{ icon: "github", link: "https://github.com/formkl/formkl" }],

    sidebar: [
      {
        text: "Getting started",
        collapsible: true,
        items: [{ text: "Introduction", link: "/guide/introduction" }],
      },
      {
        text: "Quick start",
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
        items: [{ text: "Declaration", link: "/guide/syntax" }],
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022",
    },
  },
};
