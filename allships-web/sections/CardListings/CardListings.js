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
  return (
    <CardListingsStyle className="section-card-listings">
      {data.map((item, idx) => {
        return (
          <div className="content-card" key={idx}>
            <div className="content-card-inner">
              <LazyImage src={item} alt={`Sample`} />
            </div>
          </div>
        );
      })}
    </CardListingsStyle>
  );
};
