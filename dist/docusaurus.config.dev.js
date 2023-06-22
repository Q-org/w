'use strict';

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === '[object Arguments]'
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

/**
 * Copyright (c) Qorg, Inc. and its affiliates.
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
var isDev = process.env.NODE_ENV === 'development';
var isDeployPreview =
  !!process.env.NETLIFY && process.env.CONTEXT === 'deploy-preview';
var isBuildFast = !!process.env.BUILD_FAST;
var math = Promise.resolve().then(function () {
  return _interopRequireWildcard(require('remark-math'));
});

var npm2yarn = require('@docusaurus/remark-plugin-npm2yarn');

var VersionsArchived = require('./versions.json');

var _require = require('./_dogfooding/dogfooding.config'),
  dogfoodingPluginInstances = _require.dogfoodingPluginInstances,
  dogfoodingThemeInstances = _require.dogfoodingThemeInstances;

var versions = require('./versions.json');

var ArchivedVersionsDropdownItems = VersionsArchived;
/* .splice(
  0,
  5,
); */
// This probably only makes sense for the beta phase, temporary

function getNextBetaVersionName() {
  var expectedPrefix = '2.0.0-beta.';
  var lastReleasedVersion = versions[0];

  if (!lastReleasedVersion.includes(expectedPrefix)) {
    throw new Error(
      'this code is only meant to be used during the 2.0 beta phase.',
    );
  }

  var version = parseInt(lastReleasedVersion.replace(expectedPrefix, ''), 10);
  return ''.concat(expectedPrefix).concat(version + 1);
} // eslint-disable-next-line no-unused-vars

function reverseSidebarItems(items) {
  // Reverse items in categories
  var result = items.map(function (item) {
    if (item.type === 'category') {
      return _objectSpread({}, item, {
        items: reverseSidebarItems(item.items),
      });
    }

    return item;
  }); // Reverse items at current level

  result.reverse();
  return result;
}

var isI18nStaging = process.env.I18N_STAGING === 'true';
var isVersioningDisabled = !!process.env.DISABLE_VERSIONING || isI18nStaging; // Netlify branch deploy like "docusaurus-v2"

var isBranchDeploy =
  !!process.env.NETLIFY && process.env.CONTEXT === 'branch-deploy';
var config = {
  title: '微课程',
  tagline: '微课程很酷',
  url: 1 ? 'https://qio.wiki' : 'https://q-org.netlify.app/',
  // url: 'https://zingy-tiramisu-028c02.netlify.app/',
  baseUrl: '/',
  stylesheets: [
    // {
    //   href: '/katex/katex.min.css',
    //   type: 'text/css',
    // },
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
  organizationName: 'Q-org',
  // Usually your GitHub org/user name.
  projectName: 'w',
  // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  i18n: {
    defaultLocale: 'zh-CN',
    locales:
      isDeployPreview || isBranchDeploy // Deploy preview and branch deploys: keep them fast!
        ? ['zh-CN']
        : isI18nStaging // Staging locales: https://docusaurus-i18n-staging.netlify.app/
        ? ['zh-CN'] // Production locales
        : ['zh-CN'],
  },
  themes: [
    'live-codeblock', // ...dogfoodingThemeInstances
    // ... Your other themes.
    // "@docusaurus-theme-frontmatter",
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ['en', 'zh'],
        // ```
        indexPages: true,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [
            math,
            [
              npm2yarn,
              {
                sync: true,
              },
            ],
          ],
          rehypePlugins: [],
          disableVersioning: isVersioningDisabled,
          lastVersion: 'current',
          onlyIncludeVersions: (function () {
            if (isBuildFast) {
              return ['current'];
            }

            if (!isVersioningDisabled && (isDev || false)) {
              return ['current'].concat(
                _toConsumableArray(versions.slice(0, 2)),
              );
            }

            return undefined;
          })(),
          versions: {
            current: {
              label: ''.concat(getNextBetaVersionName()),
            },
          },
          editUrl: 'http://127.0.0.1:81/',
        },
        blog: {
          showReadingTime: true,
          // eslint-disable-next-line no-dupe-keys
          readingTime: function readingTime(_ref) {
            var content = _ref.content,
              frontMatter = _ref.frontMatter,
              defaultReadingTime = _ref.defaultReadingTime;
            return frontMatter.hide_reading_time
              ? undefined
              : defaultReadingTime({
                  content: content,
                });
          },
          // Please change this to your repo.
          editUrl:
            // Remove this to remove the "edit this page" links.
            'http://127.0.0.1/p/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: !(isDeployPreview || isBranchDeploy)
          ? {
              trackingID: ['G-qio', 'CN-5516-175'],
            }
          : undefined,
        googleTagManager: {
          containerId: 'GTM-qio',
        },
        sitemap: {
          // Note: /tests/docs already has noIndex: true
          ignorePatterns: ['/tests/{blog,pages}/**'],
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      metadata: [
        {
          name: 'keywords',
          content: '微课程,基础会计, 课程设计,社交，校园交流',
        },
      ],
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)',
          },
        },
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      announcementBar: {
        id: 'announcementBar-2',
        // Increment on change
        content:
          '\uD83C\uDF89\u5982\u679C\u60A8\u559C\u6B22\u5FAE\u5FAE, \u8BF7\u5728 <a target="_blank" rel="noopener noreferrer" href="https://github.com/Q-org/w">GitHub</a>\u7ED9\u4E00\u4E2A\u2B50\uFE0F\u5173\u6CE8\u6211\u4EEC<a target="_blank" rel="noopener noreferrer" href="https://github.com/Q-org/w">\u516C\u4F17\u53F7</a>\uD83C\uDF89 ',
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
            label: '课程',

            /*             dropdownActiveClassDisabled: true, */
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'courses',
                label: '基础会计',
              },
            ],
          },
          {
            label: '操作指南',
            type: 'docSidebar',
            sidebarId: 'manu',
            position: 'left',
            className: 'signup dev-portal-link',
          }, // { label: 'test', to: '/test/test', position: 'left', className: 'login', },
          // {
          //   label: '登录2', to: '/sign/SignIn', position: 'right',
          //   className: 'login',
          // },
          {
            label: '登陆',
            to: 'http://127.0.0.1/n',
            position: 'right',
            target: '_self',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://github.com/Q-org',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      algolia: {
        // indexName: 'docsearch',
        // Algolia 提供的应用 ID
        appId: 'ZILQXT0BHD',
        // appId: 'EPQT07RLZB',
        // 公开 API 密钥：提交它没有危险
        apiKey: '9bbd6dc6120b973ea848dace07f57a5a',
        // apiKey: '7af2ff95d2ccdf0adbd8992f30f19021',
        indexName: 'qorgsearch',
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        contextualSearch: true,
        externalUrlRegex: '(www.)?qio(\\.wiki)?',
        // replaceSearchResultPathname: {
        //   from: 'docs',
        //   to: '/',
        // },
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search', //... other Algolia params
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
              {
                label: '更多课程',
                to: '/',
              }, // {
              //   label: 'Migration from v1 to v2',
              //   to: 'docs/migration',
              // },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: '错误',
                href: 'https://github.com/Q-org/w/issues',
              },
              {
                label: '功能需求',
                href: 'https://github.com/Q-org/w/pulls',
              },
              {
                label: '群聊',
                href: 'https://discordapp.com/invite/docusaurus',
              }, // {
              //   label: '帮助',
              //   to: '/community/support',
              // },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '渐近式Web App',
                href: 'https://www.pwastats.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/q-org',
              },
              {
                label: '公众号',
                href: 'https://twitter.com',
              },
              {
                html: '\n                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">\n                  <img src="/img/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />\n                </a>\n              ',
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
        copyright: '\u7248\u6743 \xA9 '.concat(
          new Date().getFullYear(),
          ' Q-org.',
        ),
      },
      colorMode: {
        defaultMode: 'dark',
      },
    },
  plugins: [
    'docusaurus-plugin-less',
    '@docusaurus/plugin-ideal-image',
    '@docusaurus/theme-mermaid',
    require.resolve('docusaurus-plugin-image-zoom'), //...dogfoodingPluginInstances,
    [
      'client-redirects',
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      {
        fromExtensions: ['html'],
        createRedirects: function createRedirects(routePath) {
          // Redirect to /docs from /docs/introduction (now docs root doc)
          if (routePath === '/docs' || routePath === '/docs/') {
            return [''.concat(routePath, '/introduction')];
          }

          return [];
        },
        redirects: [
          // {
          //   from: ['/docs/support', '/docs/next/support'],
          //   to: '/community/support',
          // },
          // {
          //   from: ['/docs/team', '/docs/next/team'],
          //   to: '/community/team',
          // },
          // {
          //   from: ['/docs/resources', '/docs/next/resources'],
          //   to: '/community/resources',
          // },
        ],
      },
    ],
    '@graphql-markdown/docusaurus',
    'docusaurus-plugin-sass',
    function myPlugin(context, options) {
      return regeneratorRuntime.async(function myPlugin$(_context3) {
        while (1) {
          switch ((_context3.prev = _context3.next)) {
            case 0:
              return _context3.abrupt('return', {
                name: 'my-plugin',
                loadContent: function loadContent() {
                  return regeneratorRuntime.async(function loadContent$(
                    _context,
                  ) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return _context.abrupt('return', 1 + 1);

                        case 1:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  });
                },
                contentLoaded: function contentLoaded(_ref2) {
                  var content, actions;
                  return regeneratorRuntime.async(function contentLoaded$(
                    _context2,
                  ) {
                    while (1) {
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          (content = _ref2.content), (actions = _ref2.actions);

                        case 1:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  });
                },
                /* 其他生命周期 API */
              });

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      });
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
