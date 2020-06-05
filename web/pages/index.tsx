// Core
import React from "react";

// Components
import { InnerGrid } from "../components/core/InnerGrid";
import { SiteHead } from "../components/core/SiteHead";

// Sections
import { CardListings } from "../sections/CardListings";

// Types
import { GetStaticProps } from "next";
import {
  LMNTS_Airtable_ContentRecord,
  LMNTS_GenericListing,
  LMNTS_Sanity_Article,
  LMNTS_Sanity_Event,
  LMNTS_Sanity_Podcast,
} from "../constants/types";

// Utilities
import { QueryUtils, Queries } from "../constants/Queries";
import { Sanity } from "../clients";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type FrontPage = {
  // Airtable Data
  allAirtableCategories: string[];
  allAirtableFeaturedContent: LMNTS_Airtable_ContentRecord[];
  allAirtableContent: LMNTS_Airtable_ContentRecord[];

  // Generic Airtable Data
  allGenericAirtableContent: LMNTS_GenericListing[];
  allGenericAirtableFeaturedContent: LMNTS_GenericListing[];

  // Sanity Data
  allSanityArticles: LMNTS_Sanity_Article[];
  allSanityEvents: LMNTS_Sanity_Event[];
  allSanityPodcasts: LMNTS_Sanity_Podcast[];
  allSanityFeaturedContent: LMNTS_GenericListing[];
  allSanityContent: LMNTS_GenericListing[];

  // Generic Data
  allContent: LMNTS_Airtable_ContentRecord[];
  allFeaturedContent: LMNTS_Airtable_ContentRecord[];
  allCategories: string[];
};

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 * @description The website homepage.
 *
 */
const FrontPage: React.FunctionComponent<FrontPage> = ({
  // Airtable Data
  allAirtableContent,
  allAirtableFeaturedContent,
  allAirtableCategories,

  // Generic Airtable Data
  allGenericAirtableContent,
  allGenericAirtableFeaturedContent,

  // Sanity Data
  allSanityArticles,
  allSanityEvents,
  allSanityPodcasts,
  allSanityFeaturedContent,
  allSanityContent,

  // Generic Data
  allContent,
  allFeaturedContent,
  allCategories,
}) => {
  // Airtable Data
  console.log("allAirtableContent", allAirtableContent);
  console.log("allAirtableFeaturedContent", allAirtableFeaturedContent);
  console.log("allAirtableCategories", allAirtableCategories);

  // Generic Airtable Data
  console.log("allGenericAirtableContent", allGenericAirtableContent);
  console.log(
    "allGenericAirtableFeaturedContent",
    allGenericAirtableFeaturedContent
  );

  // Sanity Data
  console.log("allSanityArticles", allSanityArticles);
  console.log("allSanityEvents", allSanityEvents);
  console.log("allSanityPodcasts", allSanityPodcasts);
  console.log("allSanityContent", allSanityContent);
  console.log("allSanityFeaturedContent", allSanityFeaturedContent);

  // Generic Data
  console.log("allContent", allContent);
  console.log("allFeaturedContent", allFeaturedContent);
  console.log("allCategories", allCategories);

  return (
    <InnerGrid startBelowNav={true}>
      <SiteHead title="ALLSHIPS | A Creative Coalition." />
      <CardListings
        availableCategories={allAirtableCategories}
        featuredContent={allAirtableFeaturedContent}
        content={allAirtableContent}
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
  // Load all Airtable content
  let allAirtableContent = await QueryUtils.loadAllRecords();
  let allAirtableFeaturedContent = await QueryUtils.loadFeaturedRecords();
  let allAirtableCategories = QueryUtils.createAvailableCategories(
    allAirtableContent
  );

  // Genericize Airtable Content
  let allGenericAirtableContent = QueryUtils.genericizeAirtableListings(
    allAirtableContent
  );
  let allGenericAirtableFeaturedContent = QueryUtils.findFeaturedContent(
    allGenericAirtableContent
  );

  // Load all Sanity content
  let allSanityArticles = await Sanity.fetch(Queries.AllArticles());
  let allSanityEvents = await Sanity.fetch(Queries.AllEvents());
  let allSanityPodcasts = await Sanity.fetch(Queries.AllPodcasts());
  let allSanityContent = QueryUtils.mergeSanityContentToGenericListings(
    allSanityArticles,
    allSanityEvents,
    allSanityPodcasts
  );
  let allSanityFeaturedContent = QueryUtils.findFeaturedContent(
    allSanityContent
  );

  // Merge Airtable & Sanity Content
  let allContent: LMNTS_GenericListing[] = QueryUtils.mergeGenericContent([
    allGenericAirtableContent,
    allSanityContent,
  ]);
  let allFeaturedContent: LMNTS_GenericListing[] = QueryUtils.mergeGenericContent(
    [allGenericAirtableFeaturedContent, allSanityFeaturedContent]
  );
  let allCategories: string[] = QueryUtils.getCategoriesFromContent(allContent);

  /**
   *
   * Return our Server Data
   *
   */
  return {
    props: {
      // Export Airtable Content
      allAirtableContent: allAirtableContent,
      allAirtableFeaturedContent: allAirtableFeaturedContent,
      allAirtableCategories: allAirtableCategories,

      // Export Generic Airtable Content
      allGenericAirtableContent: allGenericAirtableContent,
      allGenericAirtableFeaturedContent: allGenericAirtableFeaturedContent,

      // Export Sanity Content
      allSanityArticles: allSanityArticles,
      allSanityEvents: allSanityEvents,
      allSanityPodcasts: allSanityPodcasts,
      allSanityContent: allSanityContent,
      allSanityFeaturedContent: allSanityFeaturedContent,

      // Export Merged Content & Categories
      allContent: allContent,
      allFeaturedContent: allFeaturedContent,
      allCategories: allCategories,
    },
  };
};
