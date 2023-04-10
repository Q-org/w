import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import { Android, Apple, Roku, Amazon, Kodi } from '@icons-pack/react-simple-icons';
import Icon from '@mdi/react';
import { mdiPlusThick, mdiMonitor, mdiWeb } from '@mdi/js';

import landingSectionStyles from './LandingSection.module.scss';
import styles from './ClientSection.module.scss';

export default function ClientSection() {
  return (
    <section className={clsx(landingSectionStyles['landing-section'], 'padding-vert--xl')}>
      <div className='container text--center'>
        <div className='row row--center'>
          <div className='col col--8'>
            <h2>Your media, wherever you&nbsp;are</h2>
            <p>
              With a large array of official and third-party clients, Jellyfin is available on most popular platforms.
              Your media is ready to follow you, wherever you go.
            </p>
          </div>
        </div>

        <div className='row row--center'>
          <div className={clsx('col', styles['client-icon'], 'margin-top--md')}>
            <Icon path={mdiWeb} size='48px' className='fill-white' />
            <div className='margin-top--sm'>Web</div>
          </div>
          <Link
            to='/downloads/clients?platform=Desktop'
            className={clsx('col', styles['client-icon'], 'margin-top--md')}
          >
            <Icon path={mdiMonitor} size='48px' className='fill-white' />
            <div className='margin-top--sm'>Desktop</div>
          </Link>
          <Link
            to='/downloads/clients?platform=Android,Android TV'
            className={clsx('col', 'fill--white', styles['client-icon'], 'margin-top--md')}
          >
            <Android color='#ffffff' size={48} />
            <div className='margin-top--sm'>Android</div>
          </Link>
          <Link
            to='/downloads/clients?platform=iOS,tvOS'
            className={clsx('col', 'fill--white', styles['client-icon'], 'margin-top--md')}
          >
            <Apple color='#ffffff' size={48} />
            <div className='margin-top--sm'>Apple</div>
          </Link>
          <Link
            to='/downloads/clients?platform=Fire TV'
            className={clsx('col', 'fill--white', styles['client-icon'], 'margin-top--md')}
          >
            <Amazon color='#ffffff' size={48} />
            <div className='margin-top--sm'>Amazon</div>
          </Link>
          <Link
            to='/downloads/clients?platform=Roku'
            className={clsx('col', 'fill--white', styles['client-icon'], 'margin-top--md')}
          >
            <Roku color='#ffffff' size={48} />
            <div className='margin-top--sm'>Roku</div>
          </Link>
          <Link
            to='/downloads/clients?platform=Kodi'
            className={clsx('col', 'fill--white', styles['client-icon'], 'margin-top--md')}
          >
            <Kodi color='#ffffff' size={48} />
            <div className='margin-top--sm'>Kodi</div>
          </Link>
          <Link to='/downloads/clients' className={clsx('col', styles['client-icon'], 'margin-top--md')}>
            <Icon path={mdiPlusThick} size='48px' className='fill-white' />
            <div className='margin-top--sm'>And more</div>
          </Link>
        </div>

        <div className='row'>
          <div className='col margin-top--lg'>
            <Link to='/downloads/clients' className='button button--primary button--lg'>
              Find a Client
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
