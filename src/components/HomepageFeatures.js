/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *

 */
// eslint-disable-next-line header/header
import React from 'react';
import clsx from 'clsx';
import styles from '@site/src/pages/styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import Section from '@site/src/layouts/Section';
import BrandingProvider from '@site/src/BrandingProvider';
import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
const features = [
  {
    title: '简单',
    image: {
      src: 'img/undraw_docusaurus_mountain.svg',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        阅读，优化和设计微课程，简单直观，可轻松扩展。易于安装。.
      </Translate>
    ),
  },
  {
    title: '快速',
    image: {
      src: 'img/undraw_docusaurus_tree.svg',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        让您专注于您的课程，而我们会做这些家务。只需将您的课程移动到目录中,并发布。
        并用于让课程快速启动和运行.
      </Translate>
    ),
  },
  {
    title: '可扩展',
    image: {
      src: 'img/undraw_docusaurus_react.svg',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        通过新的技术 扩展或自定义您的课程布局。 可以在重用相同的页面同时进行扩展..
      </Translate>
    ),
  },
  {
    title: '课程控制',
    image: {
      src: 'img/undraw_version_control.svg',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        支持课程所有版本的用户。文档版本控制可帮助您使课程与课程发布保持同步.
      </Translate>
    ),
  },
  {
    title: '全文搜索',
    image: {
      src: 'img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        M让您的社区可以轻松地在您的课程中找到他们需要的内容.
      </Translate>
    ),
  },
];

function Feature({
  feature,
  className,
}) {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div className={clsx('col', className)}>
      <img
        className={styles.featureImage}
        alt={feature.title}
        width={Math.floor(feature.image.width)}
        height={Math.floor(feature.image.height)}
        src={withBaseUrl(feature.image.src)}
        loading="lazy"
      />
      <h3 className={clsx(styles.featureHeading)}>{feature.title}</h3>
      <p className="padding-horiz--md">{feature.text}</p>
    </div>
  );
}

export default function FeaturesContainer() {
  const firstRow = features.slice(0, 3);
  const secondRow = features.slice(3);
  return (
    <div className="container text--center">
      <h2></h2>
      <h2>
        <Translate>主要特征</Translate>
      </h2>
      <div className="row margin-bottom--lg">
        {firstRow.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
      </div>
      <div className="row margin-bottom--lg">
        {secondRow.map((feature, idx) => (
          <Feature
            feature={feature}
            key={idx}
            className={clsx('col--4', idx === 0 && 'col--offset-2')}
          />
        ))}
      </div>
    </div>
  );
}


export function TweetsSection({ props }) {
  const tweetColumns = [[], [], []];


  return (
    <BrandingProvider>
      <Section>
        <div className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <h2 className={clsx('margin-bottom--lg', 'text--center')}>
              <Translate>TweetsSection</Translate>
            </h2>
            {props}

            <div className={clsx('row', styles.tweetsSection)}>

            </div>
          </div>
        </div>
      </Section>
    </BrandingProvider>
  );
}




export function QuotesSection({ props }) {
  // console.log(props)
  return (
    <div className={clsx(styles.section)}>
      <div className="container">
        <div className="row">
          QuotesSection
          {props}
          {/* {Quotes.map((quote) => (
            <div className="col" key={quote.name}>
              <div className="avatar avatar--vertical margin-bottom--sm">
                <Image
                  alt={quote.name}
                  className="avatar__photo avatar__photo--xl"
                  img={quote.thumbnail}
                  style={{ overflow: 'hidden' }}
                />
                <div className="avatar__intro padding-top--sm">
                  <div className="avatar__name">{quote.name}</div>
                  <small className="avatar__subtitle">{quote.title}</small>
                </div>
              </div>
              <p className="text--center text--italic padding-horiz--md">
                {quote.text}
              </p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
