/**
 *
 * @name SectionBreak Section
 * @author Peter Laxalt
 * @description
 * Simple SectionBreak Schema
 * @requires /web/sections/SectionBreak
 *
 */

// __________________________________________________________________________________________

export const SectionBreakRegistry = {
  title: "Section Break",
  name: "section_break",
  type: "object",
};

export default {
  ...SectionBreakRegistry,
  fields: [
    {
      name: "style",
      title: "Section Break Style",
      type: "string",
      options: {
        list: [
          {
            title: "Low Contrast Section Break",
            value: "Low Contrast Section Break",
          },
          {
            title: "High Contrast Section Break",
            value: "High Contrast Section Break",
          },
        ],
        layout: "dropdown",
      },
    },
  ],
};
