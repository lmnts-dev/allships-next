/**
 *
 * @name Experiment Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Experiment Data Model
 *
 */

// __________________________________________________________________________________________

export default {
  name: "experiment",
  title: "Experiment",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "ref",
      title: "Component.tsx Reference",
      type: "string"
    },
    {
      name: "reviewState",
      type: "string",
      options: {
        list: [
          { title: "✏️ In Progress", value: "draft" },
          { title: "👀 Needs Review", value: "review" },
          { title: "✅ Approved", value: "approved" }
        ],
        layout: "dropdown"
      }
    },
    {
      name: "cover",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }]
        }
      ]
    },
    {
      name: "phases",
      title: "Phases",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "phase" }]
        }
      ]
    },
    {
      name: "industries",
      title: "Industries",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "industry" }]
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
      title: "Country",
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
      title: "Region",
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
      title: "State",
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
      title: "City or Town",
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
      name: "counties",
      title: "County or Neighborhood",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "county" }]
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
