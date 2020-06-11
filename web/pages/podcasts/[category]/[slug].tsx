// Core
import React from "react";

// Components
import { SiteHead } from "../../../components/core/SiteHead";

// Sections
import { PostBody } from "../../../components/core/PostBody";

// Types
import { GetStaticProps, GetStaticPaths } from "next";
import { LMNTS_AppData, LMNTS_Sanity_Podcast } from "../../../constants/types";

// Utilities
import { QueryUtils, Queries } from "../../../constants/Queries";
import { CardListings } from "../../../components/core/CardListings";
import { InnerGrid } from "../../../components/core/InnerGrid";
import { Sanity } from "../../../clients";
import slugify from "../../../utils/slugify";
import { createGlobalStyle } from "styled-components";
import { Theme } from "../../../constants/Theme";

// Component Typing
// __________________________________________________________________________________________

export type LMNTS_Podcast_Post = LMNTS_AppData & {
  _document: LMNTS_Sanity_Podcast;
};

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 * @description The website homepage.
 *
 */
const PostTemplate: React.FunctionComponent<LMNTS_Podcast_Post> = ({
  allContent,
  allFeaturedContent,
  allCategories,
  _document,
}) => {
  // Variable Overrides
  const VariableOverrides = createGlobalStyle`
  body {
    --bgColor: ${Theme.Color.Black};
  }
`;

  return (
    <>
      <VariableOverrides />
      <SiteHead title={`${_document.title} | ALLSHIPS`} />
      <PostBody
        post={_document}
        baseRoute="/podcasts"
        categoryDynamicRoute="[category]"
      />
      <InnerGrid>
        <CardListings
          availableCategories={allCategories}
          featuredContent={allFeaturedContent}
          content={allContent}
          showFilterBar
          showPageHero={false}
          showFeaturedListing={false}
          authorFilterOverride="By Us"
        />
      </InnerGrid>
    </>
  );
};

export default PostTemplate;

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
  let allPathsIncludingCategories: {
    params: { slug: string; category: string };
  }[] = [];

  allPodcasts.map((item: LMNTS_Sanity_Podcast) => {
    // Check if item has categories
    if (item.category) {
      item.category.map((category: string) => {
        let newPath = {
          params: { slug: item.slug.current, category: slugify(category) },
        };

        // Push new category paths
        allPathsIncludingCategories.unshift(newPath);
      });
    } else {
      // If not, default to "all"
      let newPath = {
        params: { slug: item.slug.current, category: "all" },
      };

      // Push default category path
      allPathsIncludingCategories.unshift(newPath);
    }
  });

  console.log("allPathsIncludingCategories:", allPathsIncludingCategories);

  return { paths: allPathsIncludingCategories, fallback: false };
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
  let currentSlug = context.params ? context.params.slug : "";

  console.log("currentSlug", currentSlug);

  let appData = await QueryUtils.initAppData();
  let _document = await Sanity.fetch(Queries.CurrentPodcast(), {
    slug: currentSlug,
  });

  return {
    props: {
      ...appData.props,
      _document: _document,
    },
  };
};
