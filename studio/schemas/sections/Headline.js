/**
 *
 * @name Headline Section
 * @author Peter Laxalt
 * @description
 * Simple Headline Schema
 * @requires /web/sections/Headline
 *
 */

// __________________________________________________________________________________________

export default {
  title: "Headline",
  name: "headline",
  type: "object",
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "subheadline",
      title: "Subheadline",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "text",
      rows: 4,
      validation: (validate) => validate.required(),
    },
    {
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Split", value: "split" },
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "dropdown",
      },
    },
  ],
};
