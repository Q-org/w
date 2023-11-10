/* eslint-disable header/header */
/**
 * Copyright (c) Qorg, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *

 */
import React from 'react';
import Link from '@docusaurus/Link';

import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '@site/src/pages/styles.module.css';

export default function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          <img
            alt={translate({message: 'la song'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/docusaurus_keytar.svg')}
            width="200"
            height="200"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message:
                  '快速<b>构建</b><br/>以<b>微课程</b>为核心的<b>平台</b>',
                description:
                  'Home page hero title, can contain simple html tags',
              }),
            }}
          />
        </h1>
        <div className={styles.indexCtas}>
          <Link
            className="button button--primary"
            onClick={() => (location.href = location.href + 'j')}>
            <Translate>开始使用</Translate>
          </Link>
          <Link className="button button--info" to="docs/category/操作手册/">
            <Translate>如何操作</Translate>
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            {/*             <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=Qorg&amp;repo=docusaurus&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            /> */}
          </span>
        </div>
      </div>
    </div>
  );
}
