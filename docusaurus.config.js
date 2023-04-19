/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
// @ts-ignore
const isDev = process.env.NODE_ENV === 'development';
const isBuildFast = !!process.env.BUILD_FAST
const math = import('remark-math');
const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn');
const VersionsArchived = require('./versions.json');


const versions = require('./versions.json');


const ArchivedVersionsDropdownItems = VersionsArchived
/* .splice(
  0,
  5,
); */
// This probably only makes sense for the beta phase, temporary

function getNextBetaVersionName() {
  const expectedPrefix = '2.0.0-beta.';

  const lastReleasedVersion = versions[0];
  if (!lastReleasedVersion.includes(expectedPrefix)) {
    throw new Error(
      'this code is only meant to be used during the 2.0 beta phase.',
    );
  }
  const version = parseInt(lastReleasedVersion.replace(expectedPrefix, ''), 10);
  return `${expectedPrefix}${version + 1}`;
}

// eslint-disable-next-line no-unused-vars
function reverseSidebarItems(items) {
  // Reverse items in categories
  const result = items.map((item) => {
    if (item.type === 'category') {
      return { ...item, items: reverseSidebarItems(item.items) };
    }

    return item;
  });
  // Reverse items at current level
  result.reverse();
  return result;
}
const isI18nStaging = process.env.I18N_STAGING === 'true';
const isVersioningDisabled = !!process.env.DISABLE_VERSIONING || isI18nStaging;
const isDeployPreview =
  !!process.env.NETLIFY && process.env.CONTEXT === 'deploy-preview';

// Netlify branch deploy like "docusaurus-v2"
const isBranchDeploy =
  !!process.env.NETLIFY && process.env.CONTEXT === 'branch-deploy';

const config = {
  title: '微课程',
  tagline: '微课程很酷',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  customFields: {
    admin: 'q-org',
    superman: 'lol',
    user: 'q-org',
    role: 'devlop',
  },
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Q-org', // Usually your GitHub org/user name.
  projectName: 'w', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  i18n: {
    defaultLocale: 'zh-CN',

    locales:
      isDeployPreview || isBranchDeploy
        ? // Deploy preview and branch deploys: keep them fast!
        ['zh-CN']
        : isI18nStaging
          ? // Staging locales: https://docusaurus-i18n-staging.netlify.app/
          ['zh-CN']
          : // Production locales
          ['zh-CN'],
  },
  themes: [
    // ... Your other themes.
    // "@docusaurus-theme-frontmatter",

    // [
    //   require.resolve("@easyops-cn/docusaurus-search-local"),
    //   /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
    //   ({
    //     // ... Your options.
    //     // `hashed` is recommended as long-term-cache of index file is possible.
    //     hashed: true,
    //     // For Docs using Chinese, The `language` is recommended to set to:
    //     // ```
    //     language: ["en", "zh"],
    //     // ```
    //     indexPages: true,

    //   }),
    // ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math, [npm2yarn, { sync: true }]],
          rehypePlugins: [],
          disableVersioning: isVersioningDisabled,
          lastVersion: 'current',
          onlyIncludeVersions: (() => {
            if (isBuildFast) {
              return ['current'];
            } if (!isVersioningDisabled && (isDev || false)) {
              return ['current', ...versions.slice(0, 2)];
            }
            return undefined;
          })(),
          versions: {
            current: {
              label: `${getNextBetaVersionName()}`,
            },
          },
          editUrl:
            'http://127.0.0.1:81/',
        },
        blog: {
          showReadingTime: true,
          // eslint-disable-next-line no-dupe-keys
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            frontMatter.hide_reading_time ? undefined : defaultReadingTime({ content }),
          editUrl:
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.

            'http://127.0.0.1:81/',
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
      metadata: [{ name: 'keywords', content: '微课程,基础会计, 课程设计,社交，校园交流' }],
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `🎉如果您喜欢微微, 请在 <a target="_blank" rel="noopener noreferrer" href="https://github.com/Q-org/w">GitHub</a>给一个⭐️关注我们<a target="_blank" rel="noopener noreferrer" href="https://github.com/Q-org/w">公众号</a>🎉 `,
      },
      navbar: {
        hideOnScroll: true,
        title: '微课程',
        logo: {
          alt: '微微 项目 Logo',
          src: 'img/logo.svg',
        },

        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: "课程",
            /*             dropdownActiveClassDisabled: true, */
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'courses',
                label: '基础会计',
              },
            ],
          },

          { label: '操作指南', type: 'docSidebar', sidebarId: 'manu', position: 'left', className: 'signup dev-portal-link', },
          // { label: 'test', to: '/test/test', position: 'left', className: 'login', },
          {
            label: '登录', to: '/sign/SignIn', position: 'right',
            className: 'login',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      algolia: {

        // appId: 'R2IYF7ETH7',
        // apiKey: '599cec31baffa4868cae4e79f180729b',
        // indexName: 'docsearch',
        // Algolia 提供的应用 ID
        appId: 'KQGPNV3L6O',
        // //  公开 API 密钥：提交它没有危险
        apiKey: '693aabdd4be4a258e8d0af3f94d49cba',
        indexName: 'qorgsearch',
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: 'docs',
          to: '/',
        },
      },


      footer: {
        style: 'dark',
        links: [
          {
            title: '课程',
            items: [
              {
                label: '基础会计',
                to: '/',
              },
              {
                label: '成本会计',
                to: '/',
              },
              // {
              //   label: 'Migration from v1 to v2',
              //   to: 'docs/migration',
              // },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '错误',
                href: 'https://github.com/Q-org/w/issues',
              },
              {
                label: '功能需求',
                to: 'https://github.com/Q-org/w/pulls',
              },
              {
                label: '群聊',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              // {
              //   label: '帮助',
              //   to: '/community/support',
              // },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              // {
              //   label: 'Changelog',
              //   to: '/changelog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: '公众号',
                href: 'https://twitter.com/docusaurus',
              },
              {
                html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="/img/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
                </a>
              `,
              },
            ],
          },
          {
            title: '法律',
            // Please don't remove the privacy and terms, it's a legal
            // requirement.
            items: [
              {
                label: '隐私',
                href: 'https://opensource.facebook.com/legal/privacy/',
              },
              {
                label: '团队',
                href: 'https://opensource.facebook.com/legal/terms/',
              },
              {
                label: '数据规则',
                href: 'https://opensource.facebook.com/legal/data-policy/',
              },
              {
                label: '饼干规则',
                href: 'https://opensource.facebook.com/legal/cookie-policy/',
              },
              {
                label: '蜀ICP备2023006146号-1',
                href: 'https://beian.miit.gov.cn/',
              },
              // if (document.querySelector(`li:has(a[href='https://beian.miit.gov.cn/'])`)) {
              //   const handlee = () => {
              //     if (document.querySelector(`li:has(a[href='https://beian.miit.gov.cn/'])`)) {
              //       document.querySelector(`li:has(a[href='https://beian.miit.gov.cn/'])`).style.display = 'none'
              //     }
              //   }
              //   setTimeout(handlee, 300)
              // }
            ],
          },
        ],
        logo: {
          alt: 'Meta Open Source Logo',
          src: '/img/meta_opensource_logo_negative.svg',
          href: 'https://opensource.fb.com',
        },
        // copyright: `Copyright © ${new Date().getFullYear()} Meta Platforms, Inc. Built with Docusaurus.`,

        // style: "dark",
        copyright: `版权 © ${new Date().getFullYear()} Q-org.`,
      },
      colorMode: {
        defaultMode: "dark",
      },
    }),

  plugins: [
    // "docusaurus-plugin-less",
    '@docusaurus/plugin-ideal-image',
    require.resolve("docusaurus-plugin-image-zoom"),

    "@graphql-markdown/docusaurus",
    'docusaurus-plugin-sass',
    async function myPlugin(context, options) {
      // ...
      return {
        name: 'my-plugin',
        async loadContent() {
          return 1 + 1;
        },

        async contentLoaded({ content, actions }) {
          // ...
        },
        /* 其他生命周期 API */
      };
    },
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // 你的 PWA Manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],

  ],
};

module.exports = config;
