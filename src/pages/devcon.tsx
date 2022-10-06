import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageParagraphFeature from '../components/HomepageFeatures/paragraph';
// {siteConfig.title} {siteConfig.tagline}
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={clsx('center align', styles.centralImage)}>
          <img src="/img/centralimageWhite.png"></img>
        </div>
        <h1 className="title">Hi. I'm Fabiola Acarapi but I prefer <i>Ulupica</i></h1>

        <p className="hero__subtitle">#Web3 Enthusiast, HER DAO Scholar | Lead en ETH Bolivia| 👩‍💻 QA Lead en tuGerente Fintech </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://t.me/ulupicatech">
            Telegram
          </Link>
        </div>
        <br></br>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://twitter.com/ulupicatech">
            Twitter
          </Link>
        </div>
        <br></br>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://www.instagram.com/ulupicatech/">
            Instagram
          </Link>
        </div><br></br>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://www.linkedin.com/in/fabiacarapi/">
            LinkedIn
          </Link>
        </div><br></br>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/resume">
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Ulupica Tech`}
      description="Blog Personal">
      <HomepageHeader />
      <main>
        <HomepageParagraphFeature />
      </main>
    </Layout>
  );
}
