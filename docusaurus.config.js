const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ALPHA VIDEO',
  tagline: 'Youtube on Alexa',
  url: 'https://alpha-video.andrewstech.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'de'],
  },
  organizationName: 'unofficial-skills', // Usually your GitHub org/user name.
  projectName: 'alpha-video', // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'G-GBCRXFKRY8',
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
      },
    algolia: {
      apiKey: 'd62d1c5918ea1492fbae354110c2cfed',
      indexName: 'andrewstech',
      },
    navbar: {
      title: 'ALPHA-VIDEO',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/start/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/unofficial-skills/alpha-video',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/',
            },
            {
              label: 'Docker',
              to: 'docs/doc3/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Main website',
              href: 'https://andrewstech.me',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/WAu8ApjwG2',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/andrewstech1',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/unofficial-skills/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Unofficial-Skills.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editLocalizedFiles: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/unofficial-skills/alpha-video/edit/setup',
        },
        blog: {
          showReadingTime: true,
          editLocalizedFiles: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/unofficial-skills/alpha-video/edit/setup',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
