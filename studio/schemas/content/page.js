/**
 *
 * @name Page Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Page Data Model
 *
 */

 import { ThemeRegistry } from "../sections/_ThemeRegistry";

// __________________________________________________________________________________________

export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "theme",
      title: "Theme",
      type: "object",
      fields: ThemeRegistry,
      optiions: { collapsed: true, collapsible: true },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    }
  ]

  // preview: {
  //   select: {
  //     title: "title",
  //     author: "author.name",
  //     media: "mainImage"
  //   },
  //   prepare(selection) {
  //     const { author } = selection;
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`
  //     });
  //   }
  // }
};

// __________________________________________________________________________________________
