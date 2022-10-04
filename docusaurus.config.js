// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ulupica Tech',
  tagline: 'Young Developer',
  url: 'https://myweb-9v6.pages.dev/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 85,
        max: 2000,
        min: 500,
        steps: 4,
        disableInDev: false,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: 'Tutorials and articles about Eightshift development kit',
          blogDescription: 'Tutorials and articles about Eightshift development kit',
          blogSidebarTitle: 'Latest posts',
          showReadingTime: true,
          postsPerPage: 6,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "description",
          content:
            "I am software developer interested in technology and gadgets. Cloud-native and open-source enthusiast.",
        },
        {
          name: "keywords",
          content:
            "fullstack,frontend,backend,developer,engineer,go,golang,javascript,graphql,grpc,rest,react,reactjs,kubernetes,devops,cloud,cloud-native,cka,ckad,open-source,gophers,silesia",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ulupicatech.eth',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Resume',
          },
          {
            to: '/blog',
            activeBasePath: 'blog',
            label: 'Blog',
            position: 'right',
          },
          { to: '/blog', label: 'Blog', position: 'left' },

          { to: "/projects", label: "Projects", position: "left" },
          {
            href: 'https://github.com/fabiola29298',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "Connect",
            items: [
              {
                label: "Email me",
                href: "mailto:pawel@kosiec.dev",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/pkosiec",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/pkosiec",
              },
            ],
          },
          {
            title: 'Discover',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: "About me",
                to: "/",
              },
              {
                label: "Projects",
                to: "/projects",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UlupicaTech. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
