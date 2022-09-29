import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageParagraphFeature() {
  return (

    <section className={clsx('footer footer--dark', styles.heroBanner)}>
      <div className="container" >
        <div className="row">
          <div >
            <div className="text--center padding-horiz--md">
              <h2>Who is Ulupica?</h2>
              <p>Developer, dreamer, activist, writer & tech lover.
              I maintain a blog about things I learn or I want to share.
              Web3 enthusiast.
              Activist for Human Rights, especially work on the digital gender gap.</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
