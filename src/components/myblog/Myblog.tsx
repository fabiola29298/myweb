import clsx from "clsx";
import React, { FunctionComponent } from "react";
import Image from "@theme/IdealImage";

import DiscoverIcon from "./assets/icon-discover.svg";
import styles from "./Myblog.module.scss";

export interface MyblogData {
  title: string;
  description: string;
  role?: string;
  url: string;
  image: string;
}

export const Myblog: FunctionComponent<MyblogData> = ({
  title,
  description,
  url,
  role,
  image,
}) => {
  return (
    <div className={clsx("col col--6", styles.cardContainer)}>
      <div className={clsx("card", styles.card)}>
        <div className={clsx("card__image", styles.image)} >
          <Image img={image} alt={description} title={title} />
          {role && (
            <span className={clsx("badge badge--secondary", styles.role)}>
               {role}
            </span>
          )}
        </div>
        <div className="card__body">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <a
            href={url}
            target="_blank"
            className="button button--primary button--outline"
          >
            <span className="button__icon">
              <DiscoverIcon />
            </span>
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};
