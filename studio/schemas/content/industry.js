/**
 *
 * @name Industry Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Industry Data Model
 *
 */

import { ThemeRegistry } from "../sections/_ThemeRegistry";

// __________________________________________________________________________________________

export default {
  name: "industry",
  title: "Industry",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Industry Name",
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
      name: "verticals",
      title: "Verticals",
      type: "array",
      of: [
        {
          title: "Vertical",
          type: "object",
          fields: [
            {
              title: "Name",
              name: "title",
              type: "string"
            },
            {
              title: "Slug",
              name: "slug",
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
        }
      ]
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
