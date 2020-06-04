/**
 *
 * @name Podcast Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Podcast Data Model
 *
 */

import { DefaultPost } from "../scaffold/DefaultPost";

// __________________________________________________________________________________________

export const PodcastRegistry = {
  name: "podcast",
  title: "Podcast",
  type: "document",
};

export const Podcast = {
  ...PodcastRegistry,
  fields: [
    {
      title: "Podcast URL",
      name: "podcastUrl",
      type: "url",
    },
    ...DefaultPost,
  ],
};

// __________________________________________________________________________________________
