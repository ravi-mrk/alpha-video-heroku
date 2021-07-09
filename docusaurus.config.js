const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const DefaultLocale = 'en';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ALPHA VIDEO',
  scripts: [{src="https://cdn.ywxi.net/js/1.js" async}],
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
      contextualSearch: true,
      searchParameters: { 'facetFilters': ["type:content"]}
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
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            // Link to Crowdin for French docs
            if (locale !== DefaultLocale) {
              return `https://translate.andrewstech.me/project/alpha-video/${locale}`;
            }
            // Link to Github for English docs
            return `https://github.com/unofficial-skills/alpha-video/edit/setup/${versionDocsDirPath}/${docPath}`;
          },
        },
        blog: {
          editUrl: ({locale, blogDirPath, blogPath}) => {
            if (locale !== DefaultLocale) {
              return `https://translate.andrewstech.me/project/alpha-video/${locale}`;
            }
            return `https://github.com/unofficial-skills/alpha-video/edit/setup/${blogDirPath}/${blogPath}`;
          },
        },
      },
    ],
  ],
};
