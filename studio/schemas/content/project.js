/**
 *
 * @name Project Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Project Data Model
 *
 */

import { SectionRegistry } from "../sections/_SectionRegistry";
import { ThemeRegistry } from "../sections/_ThemeRegistry";

// __________________________________________________________________________________________

export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "reviewState",
      type: "string",
      options: {
        list: [
          { title: "✏️ In Progress", value: "draft" },
          { title: "👀 Needs Review", value: "review" },
          { title: "🕑 Coming Soon", value: "coming-soon" },
          { title: "🔐 Confidential", value: "confidential" },
          { title: "✅ Approved", value: "approved" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "theme",
      title: "Theme",
      type: "object",
      fields: ThemeRegistry,
      optiions: { collapsed: true, collapsible: true },
    },
    {
      name: "cover",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "hero_style",
      title: "Hero Styling",
      type: "object",
      fields: [
        {
          name: "background_img",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "background_img_alpha",
          title: "Background Image Tint (Decimal between 0 & 1)",
          type: "number",
        },
      ],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
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
      name: "stages",
      title: "Stages",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "stage" }],
        },
      ],
    },
    {
      name: "phases",
      title: "Phases",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "phase" }],
        },
      ],
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
      name: "industries",
      title: "Industries",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "industry" }],
        },
      ],
    },
    {
      name: "continents",
      title: "Continent",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "continent" }],
        },
      ],
    },
    {
      name: "countries",
      title: "Country",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "country" }],
        },
      ],
    },
    {
      name: "regions",
      title: "Region",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "region" }],
        },
      ],
    },
    {
      name: "states",
      title: "State",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "state" }],
        },
      ],
    },
    {
      name: "cities",
      title: "City or Town",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "city" }],
        },
      ],
    },
    {
      name: "areas",
      title: "Metropolitan Area",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "area" }],
        },
      ],
    },
    {
      name: "counties",
      title: "County or Neighborhood",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "county" }],
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
