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
import {
  loadFeaturedRecords,
  loadAllRecords,
  createAvailableCategories,
} from "../clients";

// Components
import { InnerGrid } from "../components/core/InnerGrid";
import { ReadingWidthGrid } from "../components/core/ReadingWidthGrid";
import LazyImage from "../utils/lazyImage";

// Sections
import { CardListings } from "../sections/CardListings";
import { Theme } from "../constants/Theme";

// Begin Component
//////////////////////////////////////////////////////////////////////

const FrontPage = (props) => {
  let { content, featuredContent, availableCategories } = props;

  console.log(availableCategories);

  return (
    <InnerGrid startBelowNav={true}>
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
