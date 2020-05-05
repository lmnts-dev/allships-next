/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 * @description The website homepage.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";
import { Airtable, AirtableConfig } from "../clients";

// Components
import { InnerGrid } from "../components/core/InnerGrid";

// Sections
import { CardListings } from "../sections/CardListings";

// Begin Component
//////////////////////////////////////////////////////////////////////

let cards = [
  "https://source.unsplash.com/1600x900/?arcade",
  "https://source.unsplash.com/1600x900/?hacker",
  "https://source.unsplash.com/1600x900/?code",
  "https://source.unsplash.com/1600x900/?coding",
  "https://source.unsplash.com/1600x900/?technology",
  "https://source.unsplash.com/1600x900/?pink",
  "https://source.unsplash.com/1600x900/?blue",
  "https://source.unsplash.com/1600x900/?orange",
];

const FrontPage = (props) => {
  let { records } = props;

  return (
    <InnerGrid startBelowNav={true}>
      <h1 style={{ paddingTop: "150px" }}>FRONTPAGE</h1>
      <CardListings data={records} />
    </InnerGrid>
  );
};

export default FrontPage;

/**
 *
 * @name Server Rendered Data
 * @author Peter Francis Laxalt
 * @description Try to do as many data-specific tasks here as possible.
 * @see https://nextjs.org/learn/basics/fetching-data-for-pages
 *
 */
FrontPage.getInitialProps = async () => {
  // Load Brainjuice from Airtable using Airtable.js
  const recordPromises = Airtable(AirtableConfig.brainjuice.tableName)
    .select({
      // Selecting the first 3 records in Kylie Grid:
      maxRecords: AirtableConfig.maxRecords,
      view: AirtableConfig.brainjuice.viewName,
    })
    .all()
    .then((record) => {
      return record;
    })
    .catch((err) => {
      console.error(err);
    });

  // Create our array of records once the request is complete
  // and the Promises are fulfilled.
  const records = await recordPromises;

  /**
   *
   * Return our Server Data
   *
   */
  return {
    records: records,
  };
};
