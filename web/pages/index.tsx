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
import { GetStaticProps } from "next";
import { LMNTS_ContentItem } from "../constants/Types";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type FrontPage = {
  availableCategories: string[];
  featuredContent: LMNTS_ContentItem[];
  content: LMNTS_ContentItem[];
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
  content,
  featuredContent,
  availableCategories,
}) => {
  console.log("content", content);
  console.log("featuredContent", featuredContent);
  console.log("availableCategories", availableCategories);

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
 *
 */
export const getStaticProps: GetStaticProps = async () => {
  let content = await loadAllRecords;
  // let jsonContent = JSON.stringify(content);
  // let jsonParsedContent = JSON.parse(jsonContent);

  /**
   *
   * Return our Server Data
   *
   */
  return {
    props: {
      content: content,
      featuredContent: await loadFeaturedRecords,
      availableCategories: createAvailableCategories(content),
    },
  };
};
