import React, { FunctionComponent } from "react";

import NewsIcon from "./assets/icon-news.svg";
import waitlist from '@zootools/waitlist-js'
import styles from "./Newsletter.module.scss";
const clickPopup = (event) => {
  event.preventDefault();

  // Pass your waitlist ID
  waitlist.openPopup("kbovVaibeIuztHj1UDXs")
}

export interface NewsletterProps {
  data: NewsletterData;
}

export interface NewsletterData {
  action: string;
  method: "get" | "post";
  emailFieldName: string;
  firstNameFieldName: string;
  submitButtonName: string;
  serviceName: string;
  tosURL: string;
  privacyPolicyURL: string;
}

export const Newsletter: FunctionComponent<NewsletterProps> = ({ data }) => {
  const {
    action,
    method,
    emailFieldName,
    firstNameFieldName,
    submitButtonName,
    tosURL,
    privacyPolicyURL,
    serviceName,
  } = data;

  return (
    <div className={styles.newsWrapper}>
      <div className="container padding-vert--lg">
        <NewsIcon className={styles.newsIcon} />
        <h2>Subscribe to the Newsletter</h2>
        <p>Get my latest content by email. Unsubscribe at any time.</p>
          <button onClick={clickPopup} className="button button--primary">
            Subscribe!
          </button>
        <div className={styles.formFooter}>
          Newsletter built with
          <a target="_blank" href="https://panda.zootools.co/web3-mailchimp-alternative?utm-campaign=mailchimp-banned">
             @ZooToolsHQ
          </a>
            (Web3 Mailchimp alternative).
        </div>
      </div>
    </div>
  );
};
