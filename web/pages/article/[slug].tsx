// Core
import React from "react";

// Components
import { SiteHead } from "../../components/core/SiteHead";

// Sections
import { PostBody } from "../../components/core/PostBody";

// Types
import { GetStaticProps, GetStaticPaths } from "next";
import { LMNTS_AppData, LMNTS_Sanity_Article } from "../../constants/types";

// Utilities
import { QueryUtils, Queries } from "../../constants/Queries";
import { CardListings } from "../../components/core/CardListings";
import { InnerGrid } from "../../components/core/InnerGrid";

// Component Typing
// __________________________________________________________________________________________

export type LMNTS_Article_Post = LMNTS_AppData & {
  _document: LMNTS_Sanity_Article;
  previewMode: boolean;
};

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 * @description The website Article Post Template.
 *
 */
const ArticlePostTemplate: React.FunctionComponent<LMNTS_Article_Post> = ({
  allContent,
  allFeaturedContent,
  allCategories,
  previewMode,
  _document,
}) => {
  // Check for preview mode
  if (previewMode) {
    console.log("👀 Preview mode enabled");
  }

  return (
    <>
      <SiteHead
        title={`${previewMode ? "👀 Preview Mode: " : ""}${
          _document.title
        } | ALLSHIPS`}
      />
      <PostBody
        post={_document}
        baseRoute="/launcher/articles"
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
      {previewMode ? (
        <a
          href={`/api/exit-preview`}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            background: "red",
            color: "white",
            padding: 20,
            fontWeight: "bold",
            zIndex: 999999999,
            textTransform: "uppercase",
          }}
        >
          Close preview mode
        </a>
      ) : null}
    </>
  );
};

export default ArticlePostTemplate;

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
  let allArticles = await QueryUtils.getSanityClient(true).fetch(
    Queries.AllArticles()
  );

  let allArticlePaths = allArticles.map((item: LMNTS_Sanity_Article) => ({
    params: {
      slug: item.slug.current,
    },
  }));

  console.log("🤠 Loading static paths...");
  return { paths: allArticlePaths, fallback: false };
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

  let appData = await QueryUtils.initAppData(context.preview ? true : false);
  let _document = await QueryUtils.getSanityClient(
    context.preview ? true : false
  ).fetch(Queries.CurrentArticle(), {
    slug: currentSlug,
  });

  return {
    props: {
      ...appData.props,
      _document: _document,
      previewMode: context.preview ? true : false,
    },
  };
};
