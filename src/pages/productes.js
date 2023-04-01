import * as React from 'react';
import Producte from "@site/src/pages/t/producte-card.js"
import clsx from 'clsx';
import styles from '@site/src/pages/styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import FETCH, { post } from "@site/src/action/FETCH";

export default function Productes() {

  const tweetColumns = [[], [], []];
  const [tweets, setTweets] = React.useState(null);

  React.useEffect(async () => {
    try {

      // console.log('__tweets___', tweets)
      if (tweets) {
        return null
      }


      let res = await FETCH({ title: '课程', url: '/q/comm/介绍', })

      if (!(res && res.ok)) return null

      //   if (1) return console.log(res)
      let result = await res.json()

      setTweets(JSON.parse(result))
    } catch (e) {
      console.log(e)
      throw 'productes\n' + e
    }

  })

  if (!tweets) {
    return null
  }

  tweets.filter((tweet) => tweet).forEach((tweet, i) =>
    tweetColumns[i % 3].push(tweet),
  );


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
                //  console.log(tweet)

                return <Producte {...tweet} />
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
