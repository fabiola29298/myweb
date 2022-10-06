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
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>

      <div className="container">
        <div className={clsx('center align', styles.centralImage)}>
          <img   src="/img/centralimageWhite.png"></img>
        </div>
        <h1 className="title">Hi. I'm Fabiola Acarapi but I prefer <i>Ulupica</i></h1>

        <p className="hero__subtitle">Young Developer from Bolivia</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Latest projects and events  →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Ulupica Tech`}
      description="Blog Personal">

      <HomepageHeader />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-H8VN6TT99E"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-H8VN6TT99E');
      </script>
      <main>
        <HomepageParagraphFeature />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
