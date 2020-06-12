/**
 *
 * @name DefaultPost
 * @author Peter Laxalt
 * @description
 * This the base post scaffold.
 *
 */

import { Theme } from "../scaffold/Theme";
import { Sections } from "../scaffold/Sections";

// __________________________________________________________________________________________

export const DefaultPost = [
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
    name: "author",
    title: "Author",
    type: "reference",
    to: [{ type: "author" }],
  },
  {
    name: "isFeatured",
    title: "Feature this post?",
    type: "boolean",
  },
  Sections(),
  {
    name: "category",
    title: "Category",
    type: "array",
    of: [{ type: "string" }],
  },
  {
    name: "featured_image",
    title: "Featured Image",
    type: "image",
    options: {
      hotspot: true,
    },
  },
  {
    name: "thumbnail_image",
    title: "Thumbnail Image",
    type: "image",
    options: {
      hotspot: true,
    },
  },
  {
    name: "excerpt",
    title: "Excerpt (SEO Only)",
    type: "text",
  },
  ...Theme,
  {
    name: "tags",
    title: "Tags (SEO Only)",
    type: "array",
    of: [
      {
        type: "string",
        name: "tag",
        title: "Tag Name",
      },
    ],
  },
];
