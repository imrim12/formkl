export default {
  lang: "en-US",
  title: "FORMKL",
  description: "Form marKup Language",

  head: [
    ["script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-2BHERVD2DR" }],
    [
      "script",
      {},
      `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
			
				gtag('config', 'G-2BHERVD2DR');
			`,
    ],
  ],

  themeConfig: {
    siteTitle: "FORMKL",
    logo: "https://res.cloudinary.com/i-m-rim/image/upload/v1669218850/personal/logo_h6vt9n.svg",

    nav: [{ text: "Syntax guide", link: "/syntax/form" }],

    socialLinks: [{ icon: "github", link: "https://github.com/imrim12/formkl" }],

    editLink: {
      pattern: "https://github.com/imrim12/formkl/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

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
          { text: "Vue", link: "/installation/vue" },
          { text: "React", link: "/installation/react" },
          { text: "Svelte", link: "/installation/svelte" },
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
          { text: "Adapter (React)", link: "/learning/adapter-react" },
          { text: "Adapter (Svelte)", link: "/learning/adapter-svelte" },
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
