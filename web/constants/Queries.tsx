/**
 *
 * Queries.tsx:
 * @author Peter Laxalt
 * @description
 * This file is primarily used to manage our site's queries and the
 * manipulation of data that comes with them.
 *
 */

import groq from "groq";
import { Airtable, AirtableUtils } from "../clients";
import {
  LMNTS_Sanity_Article,
  LMNTS_Sanity_Event,
  LMNTS_Sanity_Podcast,
  LMNTS_GenericListing,
  LMNTS_AvailableSanityListings,
  LMNTS_Airtable_ContentRecord,
} from "./types";
import slugify from "../utils/slugify";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name Queries
 * @description Our Site Queries.
 * @returns A plethora of useful GROQ queries to fetch data.
 *
 */

export class Queries {
  /**
   *
   * Navigation Bar
   *
   */
  
  static NavigationData = () => {
    return groq`*[_id == "siteNav"][0]`;
  };

  /**
   *
   * Articles
   *
   */

  static AllArticles = () => {
    return groq`*[_type == "article"]{
      ..., 
      "author": author->,
      "featured_image": featured_image.asset->,
      "thumbnail_image": thumbnail_image.asset->
    }`;
  };

  /**
   *
   * Events
   *
   */

  static AllEvents = () => {
    return groq`*[_type == "event"]{
      ..., 
      "author": author->,
      "featured_image": featured_image.asset->,
      "thumbnail_image": thumbnail_image.asset->
    }`;
  };

  /**
   *
   * Podcasts
   *
   */

  static AllPodcasts = () => {
    return groq`*[_type == "podcast"]{
      ..., 
      "author": author->,
      "featured_image": featured_image.asset->,
      "thumbnail_image": thumbnail_image.asset->
    }`;
  };
}

//////////////////////////////////////////////////////////////////////

/**
 *
 * @name QueryUtils
 * @description Our functions to manipulate data coming in.
 * @example
 * import { QueryUtils } from "../constants/QueryUtils"
 * QueryUtils.restructureProjectData(data);
 *
 */
export class QueryUtils {
  /**
   *
   * @name loadAllRecords
   * @returns All of our records.
   * Load all of our records.
   *
   */

  static loadAllRecords = () => {
    return Airtable(AirtableUtils.allRecords.tableName)
      .select({
        // Selecting the first 3 records in Kylie Grid:
        maxRecords: AirtableUtils.maxRecords,
        view: AirtableUtils.allRecords.viewName,
      })
      .all()
      .then((record: any) => {
        let unserializedRecord = record;
        let stringifiedRecord = JSON.stringify(unserializedRecord);
        let serializedRecord = JSON.parse(stringifiedRecord);

        return serializedRecord;
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  /**
   *
   * @name loadFeaturedRecords
   * @returns All of our featured records.
   * Load all of our featured records.
   *
   */

  static loadFeaturedRecords = () => {
    return Airtable(AirtableUtils.featuredRecords.tableName)
      .select({
        // Selecting the first 3 records in Kylie Grid:
        maxRecords: AirtableUtils.maxRecords,
        view: AirtableUtils.featuredRecords.viewName,
      })
      .all()
      .then((record: any) => {
        let unserializedRecord = record;
        let stringifiedRecord = JSON.stringify(unserializedRecord);
        let serializedRecord = JSON.parse(stringifiedRecord);

        return serializedRecord;
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  /**
   *
   * @name createAvailableCategories
   * @returns All categories in current use from `content` parameter.
   * @param content : array : Records returned from `loadFeaturedRecords()`
   *
   */

  static createAvailableCategories = (content: any) => {
    // Remap all existing categories & remove null/undefined records.
    let availableCategories = content
      .map((item: any) => {
        return item.fields.Category ? item.fields.Category : undefined;
      })
      .filter((item: any) => item != null || item != undefined);

    // Remove Duplicates
    availableCategories = new Set(availableCategories);
    availableCategories = [...availableCategories];

    return availableCategories;
  };

  /**
   *
   * @name addToEmailList
   * @returns A response of true or false if the new email has been added
   * @param email : string : Email address to add
   *
   */

  static addToEmailList = (email: any) => {
    Airtable(AirtableUtils.emailList.tableName).create(
      [
        {
          fields: {
            Email: email,
          },
        },
      ],
      (err: any, records: any) => {
        if (err) {
          console.error(err);
          return false; // Unsuccessful
        } else {
          console.log("👍 Submitted Successfully", records);

          return true; // Successful
        }
      }
    );
  };

  /**
   *
   * @name genericizeSanityListing
   * @description Genericize a Sanity content listing.
   * @returns A new, generic array of the supplied Sanity listing.
   * @param {LMNTS_AvailableSanityListings} listings
   *
   */

  static genericizeSanityListing = (
    listings: LMNTS_AvailableSanityListings[]
  ) => {
    // Define our empty array
    let genericListing: LMNTS_GenericListing[] = [];

    // Re-map our listings
    if (listings.length > 0) {
      listings.map((item: LMNTS_AvailableSanityListings) => {
        // Loop through the categories.
        let genericCategories: string[] = item.category
          ? item.category.map((category: string) => {
              return category;
            })
          : [];

        // Loop through the tags.
        let genericTags: string[] = item.tags
          ? item.tags.map((tag: string) => {
              return tag;
            })
          : [];

        // Check for slug.
        let genericSlug: string = item.slug
          ? item.slug.current
          : item.title
          ? slugify(item.title)
          : "/";

        // Create our generic item.
        let genericItem: LMNTS_GenericListing = {
          author: item.author ? item.author.name : "",
          categories: genericCategories,
          isFeatured: item.isFeatured ? item.isFeatured : false,
          isPublishedByUs: true,
          slug: genericSlug,
          tags: genericTags,
          thumbnail_image: item.thumbnail_image
            ? item.thumbnail_image.url
            : null,
          title: item.title ? item.title : null,
          published: true,
          publishedAt: item._createdAt,
        };

        // Add our newly generic listing to our original array. Repeat.
        genericListing = genericListing.concat(genericItem);
      });
    }

    // Return our nicely generic listings.
    return genericListing;
  };

  /**
   *
   * @name mergeSanityContentToGenericListings
   * @description Merge all Sanity content to be listed as content items.
   * @returns A new array of generic Sanity content items.
   * @param {LMNTS_Sanity_Article[]} articles
   * @param {LMNTS_Sanity_Event[]} events
   * @param {LMNTS_Sanity_Podcast[]} podcasts
   *
   */

  static mergeSanityContentToGenericListings = (
    articles: LMNTS_Sanity_Article[],
    events: LMNTS_Sanity_Event[],
    podcasts: LMNTS_Sanity_Podcast[]
  ) => {
    // Define our empty array
    let mergedContent: LMNTS_GenericListing[] = [];

    // Genericize Content
    let genericArticles = QueryUtils.genericizeSanityListing(articles);
    let genericEvents = QueryUtils.genericizeSanityListing(events);
    let genericPodcasts = QueryUtils.genericizeSanityListing(podcasts);

    // Add our generic content to our empty array
    genericArticles.map((article: LMNTS_GenericListing) => {
      mergedContent = mergedContent.concat(article);
    });
    genericEvents.map((event: LMNTS_GenericListing) => {
      mergedContent = mergedContent.concat(event);
    });
    genericPodcasts.map((podcast: LMNTS_GenericListing) => {
      mergedContent = mergedContent.concat(podcast);
    });

    // @todo: Sort our new content by published time.

    // Return our newly merged array.
    return mergedContent;
  };

  /**
   *
   * @name findFeaturedContent
   * @description Create a featured content array from genericized data.
   * @returns A new array of generic content items that are.
   * @param {LMNTS_GenericListing[]} genericListings
   *
   */

  static findFeaturedContent = (genericListings: LMNTS_GenericListing[]) => {
    return genericListings.filter((listing) => listing.isFeatured);
  };

  /**
   *
   * @name genericizeAirtableListings
   * @description Genericize a Airtable content listing.
   * @returns A new, generic array of the supplied Airtable listing.
   * @param {Airtable} listings
   *
   */
  static genericizeAirtableListings = (
    listings: LMNTS_Airtable_ContentRecord[]
  ) => {
    // Define our empty array
    let genericListing: LMNTS_GenericListing[] = [];

    // Re-map our listings
    if (listings.length > 0) {
      listings.map((item: LMNTS_Airtable_ContentRecord) => {
        // Loop through the tags.
        let genericTags: string[] = item.fields["Tags"]
          ? item.fields["Tags"].map((tag: string) => {
              return tag;
            })
          : [];

        // Check if it's published by us
        let isPublishedByUs = item.fields["Author"]
          ? item.fields["Author"] == "By Us"
          : false;

        // Create our generic item.
        let genericItem: LMNTS_GenericListing = {
          author: item.fields["Author"] ? item.fields["Author"] : "",
          categories: [item.fields["Category"] ? item.fields["Category"] : ""],
          isFeatured: item.fields["Featured"] ? item.fields["Featured"] : false,
          isPublishedByUs: isPublishedByUs,
          slug: null,
          tags: genericTags,
          thumbnail_image: item.fields["Attachments"]
            ? item.fields["Attachments"][0].url
            : null,
          title: item.fields["Name"] ? item.fields["Name"] : null,
          published: item.fields["Published"] ? item.fields["Published"] : true,
          publishedAt: item.fields["Date Added"],
        };

        // Add our newly generic listing to our original array. Repeat.
        genericListing = genericListing.concat(genericItem);
      });
    }

    // Return our nicely generic listings.
    return genericListing;
  };

  /**
   *
   * @name mergeGenericContent
   * @description Merge two or more arrays of Generic Content.
   * @returns A new, generic array of the supplied Airtable listing.
   * @param {LMNTS_GenericListing[][]} listings
   *
   */
  static mergeGenericContent = (listings: LMNTS_GenericListing[][]) => {
    // Create our empty listings array.
    let mergedListings: LMNTS_GenericListing[] = [];

    // Check if our array is valid first.
    if (listings.length > 0) {
      listings.map((listing: LMNTS_GenericListing[]) => {
        mergedListings = mergedListings.concat(listing);
      });
    }

    // Return our listings.
    return mergedListings;
  };

  /**
   *
   * @name getCategoriesFromContent
   * @description Generate categories from a subset of listings.
   * @returns {string[]} An array of category strings.
   * @param {LMNTS_GenericListing[]} listings
   *
   */
  static getCategoriesFromContent = (listings: LMNTS_GenericListing[]) => {
    // Create our empty categories array.
    let categories: string[] = [];

    // Check if our array is valid first.
    if (listings.length > 0) {
      // Map our supplied listings.
      listings.map((listing) => {
        // Check for categories in the individual listings.
        listing.categories
          ? // Map categories if they exist.
            listing.categories.map((category) => {
              categories = categories.concat(category);
            })
          : null;
      });

      // Remove Duplicates
      categories = Array.from(new Set(categories));
    }

    // Return our Categories
    return categories;
  };
}
