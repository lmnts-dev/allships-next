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

export const SanityOptions = {
  projectId: "hpvpbfax",
  dataset: "production",
  useCdn: false,
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false to require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
};

// This is our main Sanity client to fetch Sanity data.
export const Sanity = sanityClient(SanityOptions);

// We have to pass a token to Sanity to authenticate us in retrieving
// draft data from Sanity for preview mode.
export const SanityPreview = sanityClient({
  ...SanityOptions,
  token: "skskjGEok61svIEZK5vP85kGV5metCKC7wXSQrbINNsYQLOUyNs7zcEAXlQXZhY4MI8GFGuB8r0B9tQdvo0naEaRslYYHp6n7mh4Q1XLoFkeqSCFEY6xbex1ZDR1hpYGRIae8ZsmBEl3ijW8fUwAkdcrQUryZ0urworJEhsHmdO2RGjEytZv",
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
