/**
 *
 * @name StickySection Section
 * @author Peter Laxalt
 * @description
 * Simple StickySection Schema
 * @requires /web/sections/StickySection
 *
 */

// __________________________________________________________________________________________

export default {
  title: "Sticky Section",
  name: "sticky_section",
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
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Image Left", value: "img_left" },
          { title: "Image Right", value: "img_right" },
        ],
        layout: "dropdown",
      },
    },
  ],
};
