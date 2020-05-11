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
import { CardListingsStyle, FilterBarStyle } from "./styles.scss";

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
      <FilterBarStyle>
        <div className="card-listings-filter-bar-inner">
          <div className="card-listings-filter-bar-col">
            <ul className="card-listings-filter-bar-categories">
              <li className="btn active">Category</li>
              <li className="btn">Category</li>
              <li className="btn">Category</li>
              <li className="btn">Category</li>
              <li className="btn">Category</li>
            </ul>
          </div>
          <div className="card-listings-filter-bar-col">
            <ul className="card-listings-filter-bar-categories">
              <li className="btn">By Us</li>
              <li className="btn">By Others</li>
            </ul>
          </div>
        </div>
      </FilterBarStyle>
    );
  };

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
