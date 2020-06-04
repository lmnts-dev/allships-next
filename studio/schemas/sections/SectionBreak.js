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

export default {
  title: "Section Break",
  name: "section_break",
  type: "object",
  fields: [
    {
      name: "style",
      title: "Section Break Style",
      type: "string",
      options: {
        list: [
          { title: "Low Contrast Section Break", value: "Low Contrast Section Break" },
          { title: "High Contrast Section Break", value: "High Contrast Section Break" },
        ],
        layout: "dropdown",
      },
    },
  ],
};
