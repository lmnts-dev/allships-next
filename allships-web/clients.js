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
  useCdn: true // `false` if you want to ensure fresh data
});

//////////////////////////////////////////////////////////////////////

/**
 *
 * @name Airtable Settings
 * @description Our global Airtable settings.
 * @see https://airtable.com/appRssYYB66bB4P6Q/api/docs
 *
 */

// General Settings
export const AirtableConfig = {
  baseUrl: "https://airtable.com/",
  apiKey: "keySE7sknWhmqvd7Q",
  baseId: "appRssYYB66bB4P6Q",
  maxRecords: 2000,
  brainjuice: {
    viewName: "Brainjuice",
    tableName: "💯 Frontpage"
  }
};

// This is the meat and potatoes. Import this
// as { Airtable } this to use the client.
// See docs above.
export const Airtable = new airtableClient({
  apiKey: AirtableConfig.apiKey
}).base(AirtableConfig.baseId);

// Load Brainjuice Records
export const BrainjuiceRecords = async () => {
  // Load Tasks
  const recordPromises = Airtable(AirtableConfig.brainjuice.tableName)
    .select({
      // Selecting the first 3 records in Kylie Grid:
      maxRecords: AirtableConfig.maxRecords,
      view: AirtableConfig.brainjuice.viewName
    })
    .all()
    .then((record) => {
      return record;
    })
    .catch((err) => {
      console.error(err);
    });

  const records = await recordPromises;

  return records;
};
