import React, { ComponentType, HTMLProps, ReactNode } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import landingSectionStyles from './LandingSection.module.scss';
import styles from './HomepageFeatures.module.scss';
import clsx from 'clsx';

import Translate, { translate } from '@docusaurus/Translate';

type Feature = {
  title: string;
  description: ReactNode;
  Svg: ComponentType<HTMLProps<HTMLElement & SVGElement>>;
};

const FeatureList: Feature[] = [
  {
    title: '电影',
    Svg: require('/static/images/illustrations/undraw_home_cinema.svg').default,
    description: <>享受您的整个电影收藏，易于浏览和美丽的艺术品。</>
  },
  {
    title: '展示',
    Svg: require('/static/images/illustrations/undraw_Video_streaming_re.svg').default,
    description: <>观看您最喜爱的节目，按季节自动排序并准备好狂欢。</>
  },
  {
    title: '音乐',
    Svg: require('/static/images/illustrations/undraw_compose_music.svg').default,
    description: <>在家中或旅途中聆听音乐、您的艺术家和播放列表。</>
  },
  {
    title: '直播电视和硬盘录像机',
    Svg: require('/static/images/illustrations/undraw_game_day.svg').default,
    description: <>观看电视并设置自动录制以扩展您的资料库。</>
  },
  {
    title: '书',
    Svg: require('/static/images/illustrations/undraw_book_lover.svg').default,
    description: <>阅读您的书籍、漫画和杂志。</>
  },
  {
    title: '照片',
    Svg: require('/static/images/illustrations/undraw_group_selfie.svg').default,
    description: <>整理您的照片并与您的朋友和家人分享回忆。</>
  },
  {
    title: '同步播放',
    Svg: require('/static/images/illustrations/undraw_real_time_collaboration.svg').default,
    description: <>远程共享电影之夜从未如此简单。</>
  }
];

function FeatureCard({ Svg, title, description }: Feature) {
  return (
    <>
      <div className='text--center'>
        <Svg className={styles.featureSvg} title={title} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}

export default function HomepageFeatures1() {
  return (
    <section className={clsx(styles.features, landingSectionStyles['landing-section'], 'padding-vert--xl')}>
      <div className='container'>
        <div className='row row--center text--center'>
          <div className='col col--8'>
            <h2>什么是微微?</h2>
            <p>
            微微使您能够收集、管理和流式传输媒体。在您的系统上运行微微服务器，并访问领先的免费软件娱乐系统，包括花里胡哨。
            </p>
          </div>
        </div>
        <div className='row row--center padding-horiz--sm'>
          {FeatureList.map((feature) => (
            <div key={`column-${feature.title}`} className='col col--3 hidden--mobile'>
              <SwiperSlide>
                <FeatureCard {...feature} />
              </SwiperSlide>
            </div>
          ))}
          <div className='col hidden--desktop'>
            <Swiper navigation modules={[Navigation]}>
              {FeatureList.map((feature) => (
                <SwiperSlide key={`slide-${feature.title}`}>
                  <FeatureCard {...feature} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
