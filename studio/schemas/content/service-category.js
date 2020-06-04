/**
 *
 * @name Service Category Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Service Category Data Model
 *
 */

import { SectionRegistry } from "../sections/_SectionRegistry";
import { ThemeRegistry } from "../sections/_ThemeRegistry";

// __________________________________________________________________________________________

export default {
  name: "serviceCategory",
  title: "Service Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Category Name",
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
      name: "content",
      type: "array",
      title: "Page Sections",
      of: SectionRegistry(),
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
        },
      ],
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
    {
      name: "theme",
      title: "Theme",
      type: "object",
      fields: ThemeRegistry,
      optiions: { collapsed: true, collapsible: true },
    },
  ],
};

// __________________________________________________________________________________________
