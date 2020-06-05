// Core
import React from "react";

// Components
import { InnerGrid } from "../../components/core/InnerGrid";
import { SiteHead } from "../../components/core/SiteHead";
import { AddEmbellishments } from "../../components/core/AddEmbellishments";
import { GrainCover } from "../../components/lib/GrainCover";

// Sections
import { CardListings } from "../../sections/CardListings";

// Types
import { GetStaticProps } from "next";
import { LMNTS_AppData } from "../../constants/types";

// Utilities
import { QueryUtils } from "../../constants/Queries";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * pages/podcasts/index.tsx
 * @author Peter Laxalt
 * @description The website PodcastListings.
 *
 */
const PodcastListings: React.FunctionComponent<LMNTS_AppData> = ({
  allContent,
  allFeaturedContent,
  allCategories,
}) => {
  return (
    <InnerGrid startBelowNav={true}>
      <SiteHead title="ALLSHIPS | Podcasts" />
      <AddEmbellishments />
      <GrainCover />
      <CardListings
        availableCategories={allCategories}
        featuredContent={allFeaturedContent}
        content={allContent}
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
 * @description Try to do as many data-specific tasks here as possible.
 *
 */
export const getStaticProps: GetStaticProps = async () => {
  return await QueryUtils.initAppData();
};
