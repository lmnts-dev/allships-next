// Core
import React from "react";

// Components
import { InnerGrid } from "../components/core/InnerGrid";
import { SiteHead } from "../components/core/SiteHead";

// Sections
import { CardListings } from "../sections/CardListings";

// Types
import { GetStaticProps } from "next";
import { LMNTS_ContentItem } from "../constants/Types";

// Utilities
import { QueryUtils } from "../constants/Queries";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type FrontPage = {
  availableCategories: string[];
  featuredContent: LMNTS_ContentItem[];
  airtableContent: LMNTS_ContentItem[];
  showFilterBar: boolean;
  showPageHero: boolean;
};

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 * @description The website homepage.
 *
 */
const FrontPage: React.FunctionComponent<FrontPage> = ({
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

export default FrontPage;

/**
 *
 * @name Server Rendered Data
 * @author Peter Francis Laxalt
 * @description Try to do as many data-specific tasks here as possible.
 *
 */
export const getStaticProps: GetStaticProps = async () => {
  let airtableContent = await QueryUtils.loadAllRecords;

  /**
   *
   * Return our Server Data
   *
   */
  return {
    props: {
      airtableContent: airtableContent,
      featuredContent: await QueryUtils.loadFeaturedRecords,
      availableCategories: QueryUtils.createAvailableCategories(
        airtableContent
      ),
    },
  };
};
