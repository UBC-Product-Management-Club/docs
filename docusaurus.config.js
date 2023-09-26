// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UBC Product Management Club",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "http://docs.ubcpm.club/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "UBC-Product-Management-Club", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/UBC-Product-Management-Club/docs/tree/main",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/UBC-Product-Management-Club/docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "modules",
        path: "modules",
        routeBasePath: "modules",
        sidebarPath: require.resolve("./moduleSidebar.js"),
        editUrl:
          "https://github.com/UBC-Product-Management-Club/docs/tree/main",
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "UBC Product Management Club",
        logo: {
          alt: "PMC Logo",
          src: "img/pmc_logo.png",
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'right',
          //   label: 'Welcome',
          // },
          // {
          //   to: 'resources/intro',
          //   docId: 'intro',
          //   label: 'Resources',
          //   position: 'right',
          // },
          // {to: '/blog', label: 'Blog', position: 'right' },
          //
          {
            to: "modules/intro",
            label: "Modules",
            position: "right",
          },
          {
            to: "modules/intro",
            label: "Past Events",
            position: "right",
          },
          {
            to: "modules/intro",
            label: "Upcoming",
            position: "right",
          },
          {
            to: "modules/intro",
            label: "All Events",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} UBC Product Management Club. Built with Docusaurus.`,
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
