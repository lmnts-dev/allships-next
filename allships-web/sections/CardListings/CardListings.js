/**
 *
 * CardListings.js
 * @author Peter Laxalt
 * @description Our main card listings.
 * @example Default: <CardListings visible={true | false} />
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";

// Styles
import CardListingsStyle from "./styles.scss";

// Components
import LazyImage from "../../utils/lazyImage";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const CardListings = ({ data }) => {
  console.log(data);

  return (
    <CardListingsStyle className="section-card-listings">
      {data.map((item, idx) => {
        let { fields } = item;

        if (fields.Link === "") {
          return (
            <div className="content-card" key={idx}>
              <div className="content-card-inner">
                <LazyImage src={fields.Attachments[0].url} alt={fields.name} />
              </div>
            </div>
          );
        } else {
          return (
            <a
              href={fields.Link}
              target="_blank"
              rel="nofollow noreferrer"
              className="content-card"
              key={idx}
            >
              <div className="content-card-inner">
                <LazyImage src={fields.Attachments[0].url} alt={fields.name} />
              </div>
            </a>
          );
        }
      })}
    </CardListingsStyle>
  );
};
