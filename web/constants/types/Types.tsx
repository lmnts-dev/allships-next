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

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name LMNTS_Sanity_Article
 *
 */

export type LMNTS_Sanity_Article = Sanity_DefaultItem &
  LMNTS_Sanity_DefaultPost;

/**
 *
 * @name LMNTS_Sanity_Event
 *
 */
export type LMNTS_Sanity_Event = Sanity_DefaultItem &
  LMNTS_Sanity_DefaultPost & {
    startsAt?: string;
    endsAt?: string;
  };

/**
 *
 * @name LMNTS_Sanity_Podcast
 *
 */
export type LMNTS_Sanity_Podcast = Sanity_DefaultItem &
  LMNTS_Sanity_DefaultPost & {
    podcastUrl?: string;
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

export type LMNTS_ContentItem = Airtable_DefaultRecord & {
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
 * @name LMNTS_Sanity_Content
 *
 */
export type LMNTS_Sanity_Content = [];

/**
 *
 * @name LMNTS_Sanity_DefaultPost
 *
 */

export type LMNTS_Sanity_DefaultPost = Sanity_DefaultItem & {
  author?: LMNTS_Sanity_Author;
  category?: string[];
  content?: LMNTS_Sanity_Content;
  excerpt?: string;
  featured_image?: Sanity_ImageAsset;
  isFeatured?: boolean;
  slug?: Sanity_Slug;
  tags?: string[];
  thumbnail_image?: Sanity_ImageAsset;
  title?: string;
};

/**
 *
 * @name LMNTS_AvailableSanityListings
 *
 */

export type LMNTS_AvailableSanityListings = (
  | LMNTS_Sanity_Article
  | LMNTS_Sanity_Event
  | LMNTS_Sanity_Podcast
);

/**
 *
 * @name LMNTS_GenericListing
 *
 */

export type LMNTS_GenericListing = {
  author?: string;
  categories?: string[];
  isFeatured?: boolean;
  isPublishedByUs?: boolean;
  slug?: string;
  link?: string;
  tags?: string[];
  thumbnail_image?: string;
  title?: string;
  published?: boolean;
  publishedAt?: string;
};
