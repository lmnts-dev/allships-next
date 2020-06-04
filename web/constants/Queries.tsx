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
import { Sanity, Airtable, AirtableUtils } from "../clients";
import {
  LMNTS_Project,
  LMNTS_ServiceCategory,
  LMNTS_Service,
  LMNTS_IndustryCategory,
  LMNTS_Industry,
} from "./Types";

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
  static loadAllRecords = Airtable(AirtableUtils.allRecords.tableName)
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

  /**
   *
   * @name loadFeaturedRecords
   * @returns All of our featured records.
   * Load all of our featured records.
   *
   */
  static loadFeaturedRecords = Airtable(AirtableUtils.featuredRecords.tableName)
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
}
