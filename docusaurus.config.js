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
    locales: ['en', 'fr'],
  },
  organizationName: 'unofficial-skills', // Usually your GitHub org/user name.
  projectName: 'alpha-video', // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'G-GBCRXFKRY8',
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
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
        {to: 'blog', label: 'Blog', position: 'left'},
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/unofficial-skills/alpha-video/edit/setup',
        },
        blog: {
          showReadingTime: true,
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
