/**
 *
 * @name Theme Registry
 * @author Peter Laxalt
 * @description
 * This is where we register our Themes to show up
 * in the Sanity builder.
 *
 */

import { Theme } from "../scaffold/Theme";
import { Sections } from "../scaffold/Sections";

// __________________________________________________________________________________________

export const DefaultPage = [
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
  Sections(),
  ...Theme,
  {
    name: "description",
    title: "Description (SEO Only)",
    type: "text",
  },
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
