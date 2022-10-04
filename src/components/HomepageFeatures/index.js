import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Link from '@docusaurus/Link';
const FeatureList = [
  {
    title: 'Blog',
    Svg: '/img/home2.png',
    description: (
      <>
        The blog has various topics from new learning, experiences,
        book reviews and the chapters of the podcast that I&apos;m co-host.
      </>
    ),
    link: '/blog'
  },
  {
    title: 'Talks',
    Svg: '/img/home3.png',
    description: (
      <>
        <code>Technical talks</code> on web page development, digital transformation and business
        digitization. I also organize events so you will also know behind the scenes

      </>
    ),
    link: '/blog'
  },
  {
    title: 'Curriculum Vitae',
    Svg: '/img/home4.png',
    description: (
      <>
        I have work experience as Quality Assurance and web development teacher.
        Here you will not only find my CV but my experience as an activist and my projects.
      </>
    ),
    link: '/blog'
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={clsx('center align', styles.centralImage)}>
        <img src={Svg}   />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
