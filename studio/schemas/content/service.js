/**
 *
 * @name Service Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Service Data Model
 *
 */

// __________________________________________________________________________________________

export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Name",
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
