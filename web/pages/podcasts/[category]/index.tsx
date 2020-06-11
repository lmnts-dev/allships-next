// Core
import React from "react";
import { Sanity } from "../../../clients";

// Components
import { SiteHead } from "../../../components/core/SiteHead";
import { InnerGrid } from "../../../components/core/InnerGrid";
import { AddEmbellishments } from "../../../components/core/AddEmbellishments";
import { GrainCover } from "../../../components/lib/GrainCover";
import { RouteDialog } from "../../../components/lib/RouteDialog";
import { PodcastLoop } from "..";

// Sections
import { CardListings } from "../../../components/core/CardListings";

// Types
import { GetStaticProps, GetStaticPaths } from "next";
import { LMNTS_AppData } from "../../../constants/types";

// Utilities
import { QueryUtils, Queries } from "../../../constants/Queries";
import slugify from "../../../utils/slugify";
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
const PodcastCategoryTemplate: React.FunctionComponent<LMNTS_AppData> = ({
  allContent,
  allFeaturedContent,
  allCategories,
  allSanityPodcasts,
}) => {
  let router = useRouter();

  console.log("router.query:", router.query);

  return (
    <InnerGrid startBelowNav={true}>
      <SiteHead title="ALLSHIPS | Podcasts" />
      <AddEmbellishments />
      <GrainCover />
      <RouteDialog
        title="Podcasts"
        baseRoute="/podcasts"
        currentRoute={router.query.category ? router.query.category : ""}
        categoryDynamicRoute="[category]"
        categoriesAsTabs={QueryUtils.getSubCategoriesFromContent(
          QueryUtils.genericizeSanityListing(allSanityPodcasts)
        )}
      >
        <div className="article-listing-wrapper">
          <PodcastLoop
            filterBy={router.query.category ? router.query.category : ""}
            allSanityPodcasts={allSanityPodcasts}
          />
        </div>
      </RouteDialog>
      <CardListings
        availableCategories={allCategories}
        featuredContent={allFeaturedContent}
        content={allContent}
        showFilterBar
        showPageHero
        showFeaturedListing
      />
    </InnerGrid>
  );
};

export default PodcastCategoryTemplate;

/**
 *
 * @name getStaticPaths
 * @description
 * This function gets called at build time on server-side.
 * It won't be called on client-side, so you can even do
 * direct database queries. See the "Technical details" section.
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 *
 */
export const getStaticPaths: GetStaticPaths = async () => {
  let allPodcasts = await Sanity.fetch(Queries.AllPodcasts());
  let allGenericPodcasts = QueryUtils.genericizeSanityListing(allPodcasts);
  let allPodcastSubCategories = QueryUtils.getSubCategoriesFromContent(
    allGenericPodcasts
  );

  let allPodcastCategoryPaths = allPodcastSubCategories.map((item: string) => ({
    params: { category: slugify(item) },
  }));

  return { paths: allPodcastCategoryPaths, fallback: false };
};

/**
 *
 * @name getStaticProps
 * @description
 * This function gets called at build time on server-side.
 * It won't be called on client-side, so you can even do
 * direct database queries. See the "Technical details" section.
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 *
 */
export const getStaticProps: GetStaticProps = async (context) => {
  let currentSlug = context.params ? context.params.category : "";
  let appData = await QueryUtils.initAppData();

  return {
    props: {
      ...appData.props,
      activeCategory: currentSlug,
    },
  };
};
