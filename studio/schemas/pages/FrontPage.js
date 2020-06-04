/**
 *
 * @name Project Front Page Schema
 * @author Peter Laxalt
 * @description lmnts-6 Front Page Data Model
 *
 */

import { Theme } from "../scaffold/Theme";

// __________________________________________________________________________________________

export const FrontPageRegistry = {
  name: "frontPage",
  title: "Front Page",
  type: "document",
};

export const FrontPage = {
  ...FrontPageRegistry,
  fields: [
    {
      name: "hero_image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    ...Theme,
  ],
};

// __________________________________________________________________________________________
