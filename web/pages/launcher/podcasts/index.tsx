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
  LMNTS_Sanity_Podcast,
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

type LMNTS_PodcastLoop = {
  allSanityPodcasts: LMNTS_Sanity_Podcast[];
  filterBy?: any; // string
};

/**
 *
 * @name PodcastLoop
 * @author Peter Laxalt
 * @description Displays Podcast Listings
 *
 */
export const PodcastLoop: React.FunctionComponent<LMNTS_PodcastLoop> = ({
  allSanityPodcasts,
  filterBy,
}) => {
  let allPodcasts: LMNTS_GenericListing[] = QueryUtils.genericizeSanityListing(
    allSanityPodcasts
  );

  // console.log("allPodcasts:", allPodcasts);
  // console.log("filterBy:", filterBy);

  if (filterBy) {
    let allPodcastsWithSubCategorySlugs: LMNTS_GenericListing[] = allPodcasts.map(
      (podcast: LMNTS_GenericListing) => {
        return {
          ...podcast,
          subCategories: podcast.subCategories
            ? podcast.subCategories.map((subCategory: string) => {
                return slugify(subCategory);
              })
            : [],
        };
      }
    );

    // console.log(
    //   "allPodcastsWithSubCategorySlugs:",
    //   allPodcastsWithSubCategorySlugs
    // );

    allPodcasts = allPodcastsWithSubCategorySlugs.filter(
      (podcast: LMNTS_GenericListing) =>
        podcast.subCategories ? podcast.subCategories.includes(filterBy) : false
    );
  }

  return (
    <>
      {allPodcasts
        ? allPodcasts.length > 0
          ? allPodcasts.map((podcast: LMNTS_GenericListing, idx: number) => {
              return (
                <Link
                  href={`/podcast/[slug]`}
                  as={`/podcast/${podcast.slug}`}
                  key={idx}
                >
                  <a className="article-listing __podcast-listing">
                    <div className="article-listing-inner">
                      <div className="article-listing-media object-fit">
                        {podcast.thumbnail_image ? (
                          <LazyImage src={podcast.thumbnail_image} />
                        ) : null}
                      </div>
                      <div className="article-listing-details">
                        {podcast.publishedAt ? (
                          <span className="__date">
                            {parseDateTime(podcast.publishedAt)}
                          </span>
                        ) : null}
                        <span className="__title">{podcast.title}</span>
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
 * @name pages/podcasts/index.tsx
 * @author Peter Laxalt
 * @description The website PodcastListings.
 *
 */
const PodcastListings: React.FunctionComponent<LMNTS_AppData> = ({
  allContent,
  allFeaturedContent,
  allCategories,
  allSanityPodcasts,
}) => {
  let router = useRouter();

  return (
    <InnerGrid startBelowNav={true}>
      <SiteHead title="ALLSHIPS | Podcasts" />
      <AddEmbellishments />
      <GrainCover />
      <RouteDialog
        title="Podcasts"
        baseRoute="/launcher/podcasts"
        currentRoute={router.query.category ? router.query.category : ""}
        categoryDynamicRoute="[category]"
        categoriesAsTabs={QueryUtils.getSubCategoriesFromContent(
          QueryUtils.genericizeSanityListing(allSanityPodcasts)
        )}
      >
        <div className="article-listing-wrapper">
          <PodcastLoop allSanityPodcasts={allSanityPodcasts} />
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

export default PodcastListings;

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
