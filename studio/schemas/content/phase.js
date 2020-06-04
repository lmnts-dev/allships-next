/**
 *
 * @name Phase Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Phase Data Model
 *
 */

import { ThemeRegistry } from "../sections/_ThemeRegistry";

// __________________________________________________________________________________________

export default {
  name: "phase",
  title: "Phases",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Phase Name",
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
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "service"
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
