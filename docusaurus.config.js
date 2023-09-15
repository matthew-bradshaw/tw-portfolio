// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Resume and Portfolio',
  url: 'https://tw-portfolio-matthew-bradshaw.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MB', // Usually your GitHub org/user name.
  projectName: 'Tech Writing Portfolio', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Matthew Bradshaw',
        logo: {
          alt: 'MB',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'proposal',
            position: 'left',
            label: 'Proposal Sample',
          },
          {
            type: 'doc',
            docId: 'ug',
            position: 'left',
            label: 'Software User Guide',
          },
          {
            type: 'doc',
            docId: 'mi',
            position: 'left',
            label: 'Mechanical Instruction',
          },
          {
            type: 'doc',
            docId: 'article',
            position: 'left',
            label: 'IoT Article',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/matthew-b-7058704b/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/matthew-bradshaw/tw-portfolio',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Matthew Bradshaw. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
