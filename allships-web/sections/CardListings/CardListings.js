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

export const CardListings = ({
  content,
  showFilterBar,
  availableCategories,
  featuredContent,
}) => {
  const FilterBar = () => {
    return (
      <FilterBarStyle>
        <div className="card-listings-filter-bar-inner">
          <div className="card-listings-filter-bar-col">
            {availableCategories ? (
              <ul className="card-listings-filter-bar-categories">
                {availableCategories.map((category, idx) => {
                  return (
                    <li className="btn" key={idx}>
                      {category}
                    </li>
                  );
                })}
              </ul>
            ) : null}
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
        {content.map((item, idx) => {
          let { fields } = item;

          if (item.fields.Name && item.fields.Attachments) {
            return (
              <ContentCard
                data={fields}
                isLink={fields.Link ? true : false}
                key={idx}
              />
            );
          } else {
            console.log("🛑 Record missing required information:", item);
            return null;
          }
        })}
      </div>
    </CardListingsStyle>
  );
};
