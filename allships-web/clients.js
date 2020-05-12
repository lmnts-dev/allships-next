/**
 *
 * /client.ts
 * @author Peter Laxalt
 * @description The website Sanity Configuration.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

import sanityClient from "@sanity/client";
import airtableClient from "airtable";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name Sanity.io Settings
 * @description Our global Sanity.io settings.
 * @see https://www.sanity.io/
 *
 */

// General Settings
export const Sanity = sanityClient({
  projectId: "w2xt1cyc",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
});

//////////////////////////////////////////////////////////////////////

/**
 *
 * @name Airtable Settings
 * @description Our global Airtable settings.
 * @returns Airtable variables
 * @see https://airtable.com/appRssYYB66bB4P6Q/api/docs
 *
 */

export const AirtableUtils = {
  baseUrl: "https://airtable.com/",
  apiKey: "keySE7sknWhmqvd7Q",
  baseId: "apptQRcp3DUnuhlm3",
  maxRecords: 2000,
  allRecords: {
    viewName: "Gallery",
    tableName: "Content",
  },
  featuredRecords: {
    viewName: "Featured Content",
    tableName: "Content",
  },
  emailList: {
    tableName: "Email List",
  },
};

/**
 *
 * @name Airtable
 * @returns Airtable Data
 * Our Airtable client to load data.
 *
 */
export const Airtable = new airtableClient({
  apiKey: AirtableUtils.apiKey,
}).base(AirtableUtils.baseId);

/**
 *
 * @name loadAllRecords
 * @returns All of our records.
 * Load all of our records.
 *
 */
export const loadAllRecords = Airtable(AirtableUtils.allRecords.tableName)
  .select({
    // Selecting the first 3 records in Kylie Grid:
    maxRecords: AirtableUtils.maxRecords,
    view: AirtableUtils.allRecords.viewName,
  })
  .all()
  .then((record) => {
    return record;
  })
  .catch((err) => {
    console.error(err);
  });

/**
 *
 * @name loadFeaturedRecords
 * @returns All of our featured records.
 * Load all of our featured records.
 *
 */
export const loadFeaturedRecords = Airtable(
  AirtableUtils.featuredRecords.tableName
)
  .select({
    // Selecting the first 3 records in Kylie Grid:
    maxRecords: AirtableUtils.maxRecords,
    view: AirtableUtils.featuredRecords.viewName,
  })
  .all()
  .then((record) => {
    return record;
  })
  .catch((err) => {
    console.error(err);
  });

/**
 *
 * @name createAvailableCategories
 * @returns All categories in current use from `content` parameter.
 * @param content : array : Records returned from `loadFeaturedRecords()`
 *
 */

export const createAvailableCategories = (content) => {
  // Remap all existing categories & remove null/undefined records.
  let availableCategories = content
    .map((item) => {
      return item.fields.Category ? item.fields.Category : undefined;
    })
    .filter((item) => item != null || item != undefined);

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

export const addToEmailList = (email) => {
  Airtable(AirtableUtils.emailList.tableName).create(
    [
      {
        fields: {
          Email: email,
        },
      },
    ],
    (err, records) => {
      if (err) {
        console.error(err);
        return false; // Unsuccessful
      } else {
        console.log("👍 Submitted Successfully");

        return true; // Successful
      }
    }
  );
};
