/**
 *
 * /client.ts
 * @author Peter Laxalt
 * @description The website Sanity Configuration.
 *
 */

// Imports
// __________________________________________________________________________________________

import sanityClient from "@sanity/client";
import airtableClient from "airtable";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name Sanity.io Settings
 * @description Our global Sanity.io settings.
 * @see https://www.sanity.io/
 *
 */

// General Settings

export const SanityUtils = {
  projectId: "hpvpbfax",
  dataset: "production",
  useCdn: false,
};

export const Sanity = sanityClient({
  projectId: SanityUtils.projectId,
  dataset: SanityUtils.dataset,
  useCdn: SanityUtils.useCdn,
});

// __________________________________________________________________________________________

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
