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
          { text: "Vue 3", link: "/installation/vue" },
          { text: "React", link: "/installation/react" },
          { text: "Angular", link: "/installation/angular" },
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
      {
        text: "Learning",
        collapsible: true,
        items: [
          { text: "Contribution guide", link: "/learning/contribution-guide" },
          { text: "Core language", link: "/learning/core-language" },
          { text: "Adapter (Vue)", link: "/learning/adapter-vue" },
          { text: "Editor", link: "/learning/editor" },
        ],
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022",
    },
  },
};
