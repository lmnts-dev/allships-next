// Core
import React from "react";

// Components
import { InnerGrid } from "../../../components/core/InnerGrid";
import { SiteHead } from "../../../components/core/SiteHead";
import { AddEmbellishments } from "../../../components/core/AddEmbellishments";
import { GrainCover } from "../../../components/lib/GrainCover";
import { RouteDialog } from "../../../components/lib/RouteDialog";

// Sections
import { CardListings } from "../../../components/core/CardListings";

// Types
import { GetStaticProps } from "next";
import {
  LMNTS_AppData,
  LMNTS_GenericListing,
  LMNTS_Sanity_Article,
} from "../../../constants/types";

// Utilities
import { QueryUtils } from "../../../constants/Queries";
import Link from "next/link";
import slugify from "../../../utils/slugify";
import LazyImage from "../../../utils/lazyImage";
import { parseDateTime } from "../../../utils/parseDateTime";
import { useRouter } from "next/router";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_ArticleLoop = {
  allSanityArticles: LMNTS_Sanity_Article[];
  filterBy?: any; // string
};

/**
 *
 * @name ArticleLoop
 * @author Peter Laxalt
 * @description Displays Podcast Listings
 *
 */
export const ArticleLoop: React.FunctionComponent<LMNTS_ArticleLoop> = ({
  allSanityArticles,
  filterBy,
}) => {
  let allArticles: LMNTS_GenericListing[] = QueryUtils.genericizeSanityListing(
    allSanityArticles
  );

  if (filterBy) {
    let allArticlesWithSubCategorySlugs: LMNTS_GenericListing[] = allArticles.map(
      (article: LMNTS_GenericListing) => {
        return {
          ...article,
          subCategories: article.subCategories
            ? article.subCategories.map((subCategory: string) => {
                return slugify(subCategory);
              })
            : [],
        };
      }
    );

    allArticles = allArticlesWithSubCategorySlugs.filter(
      (article: LMNTS_GenericListing) =>
        article.subCategories ? article.subCategories.includes(filterBy) : false
    );
  }

  return (
    <>
      {allArticles
        ? allArticles.length > 0
          ? allArticles.map((article: LMNTS_GenericListing, idx: number) => {
              return (
                <Link
                  href={`/article/[slug]`}
                  as={`/article/${article.slug}`}
                  key={idx}
                >
                  <a className="article-listing __podcast-listing">
                    <div className="article-listing-inner">
                      <div className="article-listing-media object-fit">
                        {article.thumbnail_image ? (
                          <LazyImage src={article.thumbnail_image} />
                        ) : null}
                      </div>
                      <div className="article-listing-details">
                        {article.publishedAt ? (
                          <span className="__date">
                            {parseDateTime(article.publishedAt)}
                          </span>
                        ) : null}
                        <span className="__title">{article.title}</span>
                      </div>
                    </div>
                  </a>
                </Link>
              );
            })
          : null
        : null}
    </>
  );
};

/**
 *
 * @name pages/articles/index.tsx
 * @author Peter Laxalt
 * @description The website ArticleListings.
 *
 */
const ArticleListings: React.FunctionComponent<LMNTS_AppData> = ({
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
        baseRoute="/launcher/articles"
        currentRoute={router.query.category ? router.query.category : ""}
        categoryDynamicRoute="[category]"
        categoriesAsTabs={QueryUtils.getSubCategoriesFromContent(
          QueryUtils.genericizeSanityListing(allSanityArticles)
        )}
      >
        <div className="article-listing-wrapper">
          <ArticleLoop allSanityArticles={allSanityArticles} />
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

export default ArticleListings;

/**
 *
 * @name Server Rendered Data
 * @author Peter Francis Laxalt
 * @description Try to do as many data-specific tasks here as possible.
 *
 */
export const getStaticProps: GetStaticProps = async (context) => {
  return await QueryUtils.initAppData(context.preview ? true : false);
};
