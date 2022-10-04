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
  customFields: {
    newsletter: {
      action: "http://newsletter.kosiec.dev/add_subscriber",
      method: "post",
      emailFieldName: "member[email]",
      firstNameFieldName: "member[first_name]",
      submitButtonName: "member[subscribe]",
      tosURL: "https://www.getrevue.co/terms",
      privacyPolicyURL: "https://www.getrevue.co/privacy",
      serviceName: "Revue",
    },
  },

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
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
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
        title: 'Ulupica Tech',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: "/projects", label: "Projects", position: "left" },
          {
            to: '/community/support',
            label: 'Blog',
            position: 'left',
            activeBasePath: `community`,
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Events & Interviews',
          },

          {
            to: '/docs/resume',
            label: 'Resume',
            position: 'right',
          },
          {
            href: 'https://twitter.com/ulupicaTech',
            label: 'Twitter',
            position: 'right',
          },
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
                href: "mailto:fabiola29298@gmail.com",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/fabiacarapi/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/ulupicaTech",
              },
              {
                label: "GitHub",
                href: "https://github.com/fabiola29298",
              },
            ],
          },
          {
            title: 'Discover',
            items: [
              {
                label: 'Events & Interviews',
                to: '/docs/intro',
              },
              {
                label: "Blog",
                to: "/community/support",
              },
              {
                label: "Projects",
                to: "/projects",
              },
              {
                label: "Resume",
                to: "/docs/resume",
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
