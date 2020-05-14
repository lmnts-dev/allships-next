// Core
import React from "react";
import {
  loadFeaturedRecords,
  loadAllRecords,
  createAvailableCategories,
} from "../clients";

// Components
import { InnerGrid } from "../components/core/InnerGrid";
import { SiteHead } from "../components/core/SiteHead";

// Sections
import { CardListings } from "../sections/CardListings";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 * @description The website homepage.
 *
 */
const FrontPage = (props) => {
  let { content, featuredContent, availableCategories } = props;


  return (
    <InnerGrid startBelowNav={true}>
      <SiteHead title="ALLSHIPS | A Creative Coalition." />
      <CardListings
        availableCategories={availableCategories}
        featuredContent={featuredContent}
        content={content}
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
 * @see https://nextjs.org/learn/basics/fetching-data-for-pages
 *
 */
FrontPage.getInitialProps = async () => {
  let content = await loadAllRecords;

  /**
   *
   * Return our Server Data
   *
   */
  return {
    content: content,
    featuredContent: await loadFeaturedRecords,
    availableCategories: createAvailableCategories(content),
  };
};
