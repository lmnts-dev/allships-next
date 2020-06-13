/**
 *
 * @name Types
 * @author Peter Laxalt
 * @description Our site typings.
 *
 */

import { Sanity_DefaultItem, Sanity_ImageAsset, Sanity_Slug } from "./Sanity";
import {
  Airtable_ImageAssetReference,
  Airtable_DefaultRecord,
} from "./Airtable";
import { LMNTS_SectionLoop } from "../../components/core/SectionLoop";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name LMNTS_Sanity_Article
 *
 */

export type LMNTS_Sanity_Article = Sanity_DefaultItem &
  LMNTS_Sanity_DefaultPost & {
    _type: "article";
  };

/**
 *
 * @name LMNTS_Sanity_Event
 *
 */
export type LMNTS_Sanity_Event = Sanity_DefaultItem &
  LMNTS_Sanity_DefaultPost & {
    startsAt?: string;
    endsAt?: string;
    _type: "event";
  };

/**
 *
 * @name LMNTS_Sanity_Podcast
 *
 */

export type LMNTS_Sanity_Podcast = Sanity_DefaultItem &
  LMNTS_Sanity_DefaultPost & {
    podcastUrl?: string;
    _type: "podcast";
  };

/**
 *
 * @name LMNTS_ContentCardFields
 *
 */

export type LMNTS_ContentCardFields = {
  Attachments?: Airtable_ImageAssetReference[];
  Author?: string;
  Category?: string;
  Link?: string;
  Name?: string;
  Notes?: string;
  Tags?: string[];
  Featured?: boolean;
  Published?: boolean;
  "Date Added": string;
};

/**
 *
 * @name LMNTS_ContentItem
 *
 */

export type LMNTS_Airtable_ContentRecord = Airtable_DefaultRecord & {
  fields: LMNTS_ContentCardFields;
};

/**
 *
 * @name LMNTS_Sanity_Author
 *
 */

export type LMNTS_Sanity_Author = Sanity_DefaultItem & {
  name?: string;
  job_title?: string;
  twitter?: string;
  instagram?: string;
  email?: string;
  author_photo?: Sanity_ImageAsset;
};

/**
 *
 * @name LMNTS_Sanity_DefaultPost
 *
 */

export type LMNTS_Sanity_DefaultPost = LMNTS_SectionLoop &
  Sanity_DefaultItem & {
    author?: LMNTS_Sanity_Author;
    category?: string[];
    excerpt?: string;
    featured_image?: Sanity_ImageAsset;
    isFeatured?: boolean;
    slug: Sanity_Slug;
    tags?: string[];
    thumbnail_image?: Sanity_ImageAsset;
    title?: string;
  };

/**
 *
 * @name LMNTS_AvailableSanityListings
 *
 */

export type LMNTS_Sanity_AvailableListings =
  | LMNTS_Sanity_Article
  | LMNTS_Sanity_Event
  | LMNTS_Sanity_Podcast;

/**
 *
 * @name LMNTS_GenericListing
 *
 */

export type LMNTS_GenericListing = {
  author?: string | null;
  categories?: string[] | null;
  subCategories?: string[] | null;
  isFeatured?: boolean | null;
  isPublishedByUs?: boolean | null;
  type: string;
  slug?: string | null;
  link?: string | null;
  tags?: string[] | null;
  thumbnail_image?: string | null;
  title?: string | null;
  published?: boolean | null;
  publishedAt?: string | null;
};

/**
 *
 * @name LMNTS_AppData
 *
 */
export type LMNTS_AppData = {
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
  allContent: LMNTS_GenericListing[];
  allFeaturedContent: LMNTS_GenericListing[];
  allCategories: string[];
};
