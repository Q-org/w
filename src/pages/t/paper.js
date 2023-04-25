import * as React from 'react';
import Box from '@mui/material/Box';
import { QuotesSection } from '@site/src/components/HomepageFeatures';
import RecipeReviewCard from "@site/src/components/card"
import clsx from 'clsx';
import styles from '@site/src/pages/styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import FETCH, { post } from "@site/src/action/FETCH";

export default function Productes() {

  const tweetColumns = [[], [], []];
  const [tweets, setTweets] = React.useState(null);

  React.useEffect(async () => {

    if (tweets) return null

    let res = await FETCH({ title: '课程', url: '/q/comm/介绍', })

    let result = await res.text()

    setTweets(JSON.parse(result))

  })

  if (!tweets) {
    return null
  }

  tweets.filter((tweet) => tweet).forEach((tweet, i) =>
    tweetColumns[i % 3].push(tweet),
  );
  // console.log(tweetColumns)

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <h2 className={clsx('margin-bottom--lg', 'text--center')}>
          <Translate>精 品 课 程</Translate>
        </h2>
        <div className={clsx('row', styles.tweetsSection)}>
          {tweetColumns.map((tweetItems, i) => (
            <div className="col col--4" key={i}>
              {tweetItems.map((tweet) => {
                // console.log(tweet)

                return <RecipeReviewCard {...tweet} />
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
