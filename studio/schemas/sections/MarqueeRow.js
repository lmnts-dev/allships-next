/**
 *
 * @name MarqueeRow Section
 * @author Peter Laxalt
 * @description Simple MarqueeRow Schema
 * @requires /web/sections/MarqueeRow
 *
 */

// __________________________________________________________________________________________

export const MarqueeRowRegistry = {
  title: "Marquee Row",
  name: "marquee_row",
  type: "object",
};

export default {
  ...MarqueeRowRegistry,
  fields: [
    {
      name: "name",
      title: "Section Name",
      description: "Purely for organization - this does not display anywhere.",
      type: "string",
    },
    {
      name: "strings",
      title: "Strings",
      description: "Strings to marquee.",
      type: "array",
      of: [
        {
          name: "string",
          title: "String",
          type: "string",
        },
      ],
    },
    {
      name: "style",
      title: "Style",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Tall", value: "tall" },
        ],
        layout: "radio",
      },
    },
  ],
};
