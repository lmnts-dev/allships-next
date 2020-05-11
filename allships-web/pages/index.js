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
import { loadFeaturedRecords, loadAllRecords } from "../clients";

// Components
import { InnerGrid } from "../components/core/InnerGrid";
import { ReadingWidthGrid } from "../components/core/ReadingWidthGrid";

// Sections
import { CardListings } from "../sections/CardListings";
import { Theme } from "../constants/Theme";

// Begin Component
//////////////////////////////////////////////////////////////////////

const FrontPage = (props) => {
  let { content, featuredContent } = props;

  return (
    <InnerGrid startBelowNav={true}>
      <ReadingWidthGrid>
        <h1 style={{ paddingTop: "150px", color: Theme.Color.Dialog }}>FRONTPAGE</h1>
      </ReadingWidthGrid>
      <CardListings
        featuredContent={featuredContent}
        data={content}
        showFilterBar
      />
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
  // const loadAllRecords = Airtable(AirtableConfig.brainjuice.tableName)
  //   .select({
  //     // Selecting the first 3 records in Kylie Grid:
  //     maxRecords: AirtableConfig.maxRecords,
  //     view: AirtableConfig.brainjuice.viewName,
  //   })
  //   .all()
  //   .then((record) => {
  //     return record;
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  // Create our array of records once the request is complete
  // and the Promises are fulfilled.

  /**
   *
   * Return our Server Data
   *
   */
  return {
    content: await loadAllRecords,
    featuredContent: await loadFeaturedRecords,
  };
};
