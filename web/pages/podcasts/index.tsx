// Core
import React from "react";
import {
  loadFeaturedRecords,
  loadAllRecords,
  createAvailableCategories,
} from "../../clients";

// Components
import { InnerGrid } from "../../components/core/InnerGrid";
import { SiteHead } from "../../components/core/SiteHead";

// Sections
import { CardListings } from "../../sections/CardListings";
import { GetStaticProps } from "next";

// Types
import { FrontPage } from "..";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * pages/podcasts/index.tsx
 * @author Peter Laxalt
 * @description The website podcast listings.
 *
 */
const PodcastListings: React.FunctionComponent<FrontPage> = ({
  airtableContent,
  featuredContent,
  availableCategories,
}) => {
  console.log("content", airtableContent);
  console.log("featuredContent", featuredContent);
  console.log("availableCategories", availableCategories);

  return (
    <InnerGrid startBelowNav={true}>
      <SiteHead title="ALLSHIPS | A Creative Coalition." />
      <CardListings
        availableCategories={availableCategories}
        featuredContent={featuredContent}
        content={airtableContent}
        showFilterBar
        showPageHero
      />
    </InnerGrid>
  );
};

export default PodcastListings;

/**
 *
 * @name Server Rendered Data
 * @author Peter Francis Laxalt
 *
 */
export const getStaticProps: GetStaticProps = async () => {
  let airtableContent = await loadAllRecords;

  /**
   *
   * Return our Server Data
   *
   */
  return {
    props: {
      airtableContent: airtableContent,
      featuredContent: await loadFeaturedRecords,
      availableCategories: createAvailableCategories(airtableContent),
    },
  };
};
