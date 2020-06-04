/**
 *
 * @name County Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site County Data Model
 *
 */

import { ThemeRegistry } from "../sections/_ThemeRegistry";

// __________________________________________________________________________________________

export default {
  name: "county",
  title: "County or Neighborhood",
  type: "document",
  fields: [
    {
      name: "title",
      title: "County or Neighborhood Name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "theme",
      title: "Theme",
      type: "object",
      fields: ThemeRegistry,
      optiions: { collapsed: true, collapsible: true },
    },
    {
      name: "featured",
      title: "Featured Projects",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }]
        }
      ]
    },
    {
      name: "continents",
      title: "Continent",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "continent" }]
        }
      ]
    },
    {
      name: "countries",
      title: "Countries",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "country" }]
        }
      ]
    },
    {
      name: "regions",
      title: "Regions",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "region" }]
        }
      ]
    },
    {
      name: "states",
      title: "States & Provinces",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "state" }]
        }
      ]
    },
    {
      name: "cities",
      title: "Cities & Towns",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "city" }]
        }
      ]
    },
    {
      name: "areas",
      title: "Metropolitan Area",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "area" }]
        }
      ]
    },
    {
      name: "industries",
      title: "Featured Industries",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "industry" }]
        }
      ]
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "string",
          name: "tag",
          title: "Tag Name"
        }
      ]
    }
  ]
};

// __________________________________________________________________________________________
