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
import {
  ContentCard,
  ContentCardGlobalStyles,
} from "../../components/lib/ContentCard";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const CardListings = ({ data, showFilterBar }) => {

  const FilterBar = () => {
    return (
      <div className="card-listings-filter-bar">
        FILTER BAR
      </div>
    )
  }

  return (
    <CardListingsStyle className="section-card-listings">
      <ContentCardGlobalStyles />
      {!showFilterBar ? null : <FilterBar />}
      <div className="card-listings-list">
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
      </div>
    </CardListingsStyle>
  );
};
