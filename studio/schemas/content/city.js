/**
 *
 * @name City Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site City Data Model
 *
 */

// __________________________________________________________________________________________

export default {
  name: "city",
  title: "City",
  type: "document",
  fields: [
    {
      name: "title",
      title: "City Name",
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
