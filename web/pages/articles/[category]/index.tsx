// Core
import React from "react";
import { Sanity } from "../../../clients";

// Components
import { SiteHead } from "../../../components/core/SiteHead";
import { InnerGrid } from "../../../components/core/InnerGrid";
import { AddEmbellishments } from "../../../components/core/AddEmbellishments";
import { GrainCover } from "../../../components/lib/GrainCover";
import { RouteDialog } from "../../../components/lib/RouteDialog";
import { PodcastLoop, ArticleLoop } from "..";

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
const ArticleCategoryTemplate: React.FunctionComponent<LMNTS_AppData> = ({
  allContent,
  allFeaturedContent,
  allCategories,
  allSanityArticles,
}) => {
  let router = useRouter();

  return (
    <InnerGrid startBelowNav={true}>
      <SiteHead title="ALLSHIPS | Articles" />
      <AddEmbellishments />
      <GrainCover />
      <RouteDialog
        title="Articles"
        baseRoute="/articles"
        currentRoute={router.query.category ? router.query.category : ""}
        categoryDynamicRoute="[category]"
        categoriesAsTabs={QueryUtils.getSubCategoriesFromContent(
          QueryUtils.genericizeSanityListing(allSanityArticles)
        )}
      >
        <div className="article-listing-wrapper">
          <ArticleLoop
            filterBy={router.query.category ? router.query.category : ""}
            allSanityArticles={allSanityArticles}
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

export default ArticleCategoryTemplate;

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
  let allArticles = await Sanity.fetch(Queries.AllArticles());
  let allGenericArticles = QueryUtils.genericizeSanityListing(allArticles);
  let allArticleSubCategories = QueryUtils.getSubCategoriesFromContent(
    allGenericArticles
  );

  let allArticleCategoryPaths = allArticleSubCategories.map((item: string) => ({
    params: { category: slugify(item) },
  }));

  return { paths: allArticleCategoryPaths, fallback: false };
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
  let appData = await QueryUtils.initAppData(context.preview ? true : false);

  return {
    props: {
      ...appData.props,
      activeCategory: currentSlug,
    },
  };
};
