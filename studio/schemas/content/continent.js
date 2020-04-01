/**
 *
 * @name Continent Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Continent Data Model
 *
 */

// __________________________________________________________________________________________

export default {
  name: "continent",
  title: "Continent",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Continent Name",
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
