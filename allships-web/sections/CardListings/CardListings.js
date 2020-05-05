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
import { ContentCard, ContentCardGlobalStyles } from "../../components/lib/ContentCard";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const CardListings = ({ data }) => {
  console.log(data);

  return (
    <CardListingsStyle className="section-card-listings">
      <ContentCardGlobalStyles />
      {data.map((item, idx) => {
        let { fields } = item;

        return (
          <ContentCard
            data={fields}
            isLink={fields.Link ? true : false}
            key={idx}
          />
        );
      })}
    </CardListingsStyle>
  );
};
