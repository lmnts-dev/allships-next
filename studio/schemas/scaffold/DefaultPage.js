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
import { DefaultOpenGraph } from "./DefaultOpenGraph";

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
  ...DefaultOpenGraph
];
