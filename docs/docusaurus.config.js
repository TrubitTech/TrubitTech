// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { tailwindPlugin } = require('./src/plugins')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Trubit',
  tagline: 'React UI-Kit for Projects Built on Stacks',
  url: 'https://docs.trubit.tech',
  baseUrl: '/',
  organizationName: 'Trubit',
  projectName: 'Trubit Docs',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  clientModules: [require.resolve('./src/css/tailwind.css')],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarCollapsible: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: false,
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        // title: 'Docs',
        hideOnScroll: true,
        // hideableSidebar: true,
        // style: '',
        logo: {
          alt: 'Trubit',
          src: 'img/logos/logotext-mono-black.svg',
          srcDark: 'img/logos/logotext-mono-white.svg',
        },
        items: [
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/TrubitTech/TrubitTech',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Packages',
            items: [
              {
                label: '@trubittech/ui',
                to: '/docs/ui/components/button',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/trubittech',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/trubittech',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/trubittech',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Trubit, Corp.`,
      },
      prism: {
        theme: require('@kiwicopple/prism-react-renderer/themes/vsDark'),
        darkTheme: require('@kiwicopple/prism-react-renderer/themes/vsDark'),
      },
    }),
  plugins: [tailwindPlugin],
}

module.exports = config
