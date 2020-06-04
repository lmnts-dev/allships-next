/**
 *
 * @name Service Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Service Data Model
 *
 */

import { SectionRegistry } from "../sections/_SectionRegistry";
import { ThemeRegistry } from "../sections/_ThemeRegistry";

// __________________________________________________________________________________________

export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "theme",
      title: "Theme",
      type: "object",
      fields: ThemeRegistry,
      optiions: { collapsed: true, collapsible: true },
    },
    {
      name: "content",
      type: "array",
      title: "Page Sections",
      of: SectionRegistry(),
    },
    {
      name: "featured",
      title: "Featured Projects",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "string",
          name: "tag",
          title: "Tag Name",
        },
      ],
    },
  ],
};

// __________________________________________________________________________________________
