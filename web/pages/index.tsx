// Core
import React from "react";

// Components
import { InnerGrid } from "../components/core/InnerGrid";
import { SiteHead } from "../components/core/SiteHead";
import { AddEmbellishments } from "../components/core/AddEmbellishments";
import { GrainCover } from "../components/lib/GrainCover";

// Sections
import { CardListings } from "../components/core/CardListings";

// Types
import { GetStaticProps } from "next";
import { LMNTS_AppData } from "../constants/types";

// Utilities
import { QueryUtils } from "../constants/Queries";
import { useRouter } from "next/router";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 * @description The website homepage.
 *
 */
const FrontPage: React.FunctionComponent<LMNTS_AppData> = ({
  allContent,
  allFeaturedContent,
  allCategories,
}) => {
  let router = useRouter();
  let fromPreviewMode = router.query.fromPreviewMode
    ? router.query.fromPreviewMode == "yerr"
      ? true
      : false
    : false;

  return (
    <>
      <InnerGrid startBelowNav={true}>
        <SiteHead title="ALLSHIPS | A Creative Community." />
        <AddEmbellishments />
        <GrainCover />
        <CardListings
          availableCategories={allCategories}
          featuredContent={allFeaturedContent}
          content={allContent}
          isFrontPage
          showFilterBar
          showPageHero
          showFeaturedListing
        />
      </InnerGrid>

      {fromPreviewMode ? (
        <a
          href={`/`}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            background: "green",
            color: "white",
            padding: 20,
            fontWeight: "bold",
            zIndex: 999999999,
            textTransform: "uppercase",
          }}
        >
          Preview mode closed
        </a>
      ) : null}
    </>
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
  return await QueryUtils.initAppData(false);
};
