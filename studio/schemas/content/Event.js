/**
 *
 * @name Event Sanity.io Schema
 * @author Peter Laxalt
 * @description Site Event Data Model
 *
 */

import { DefaultPost } from "../scaffold/DefaultPost";

// __________________________________________________________________________________________

export const EventRegistry = {
  name: "event",
  title: "Event",
  type: "document",
};

export const Event = {
  ...EventRegistry,
  fields: [
    {
      title: "Starts at",
      name: "startsAt",
      type: "datetime",
    },
    {
      title: "Ends at",
      name: "endsAt",
      type: "datetime",
    },
    ...DefaultPost,
  ],
};

// __________________________________________________________________________________________
