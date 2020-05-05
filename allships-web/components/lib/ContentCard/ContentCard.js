/**
 *
 * ContentCard.js
 * @author Peter Laxalt
 * @description Our content card component.
 * @example <ContentCard
 *           data={fields}
 *           isLink={fields.Link === "" ? false : true}
 *           key={idx}
 *         />
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";

// Styles
import { GlobalStyles } from "./styles.scss";

// Utils
import LazyImage from "../../../utils/lazyImage";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ContentCard = ({ isLink, data }) => {
  const Content = ({ data }) => {
    let { Attachments, Name } = data;

    return (
      <div className="content-card-inner">
        <LazyImage src={Attachments[0].url} alt={Name} />
      </div>
    );
  };

  if (!isLink) {
    return (
      <div className="content-card">
        <Content data={data} />
      </div>
    );
  } else {
    return (
      <a
        href={data.Link}
        className="content-card"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <Content data={data} />
      </a>
    );
  }
};

export const ContentCardGlobalStyles = () => <GlobalStyles />;
