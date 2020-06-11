// Core
import React from "react";

// Components
import { InnerGrid } from "../../components/core/InnerGrid";
import { SiteHead } from "../../components/core/SiteHead";
import { AddEmbellishments } from "../../components/core/AddEmbellishments";
import { GrainCover } from "../../components/lib/GrainCover";

// Sections
import { CardListings } from "../../components/core/CardListings";

// Types
import { GetStaticProps } from "next";
import { LMNTS_AppData } from "../../constants/types";

// Utilities
import { QueryUtils } from "../../constants/Queries";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * pages/articles/index.tsx
 * @author Peter Laxalt
 * @description The website ArticleListings.
 *
 */
const ArticleListings: React.FunctionComponent<LMNTS_AppData> = ({
  allContent,
  allFeaturedContent,
  allCategories,
}) => {
  return (
    <InnerGrid startBelowNav={true}>
      <SiteHead title="ALLSHIPS | Articles" />
      <AddEmbellishments />
      <GrainCover />
      <CardListings
        availableCategories={allCategories}
        featuredContent={allFeaturedContent}
        content={allContent}
        showFeaturedListing
        showFilterBar
        showPageHero
      />
    </InnerGrid>
  );
};

export default ArticleListings;

/**
 *
 * @name Server Rendered Data
 * @author Peter Francis Laxalt
 * @description Try to do as many data-specific tasks here as possible.
 *
 */
export const getStaticProps: GetStaticProps = async () => {
  return await QueryUtils.initAppData();
};
