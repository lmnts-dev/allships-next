/**
 *
 * @name HeadlineRow Section
 * @author Peter Laxalt
 * @description
 * Simple HeadlineRow Schema
 * @requires /web/sections/HeadlineRow
 *
 */

// __________________________________________________________________________________________

export const HeadlineRowRegistry = {
  title: "Headline Row",
  name: "headline",
  type: "object",
};

export default {
  ...HeadlineRowRegistry,
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
