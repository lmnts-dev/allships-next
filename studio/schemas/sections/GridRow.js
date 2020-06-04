/**
 *
 * @name GridRow Section
 * @author Peter Laxalt
 * @description GridRow Schema for the Grid builder
 * @requires /web/sections/GridRow
 *
 */

// __________________________________________________________________________________________

export default {
  title: "Grid Row",
  name: "grid_row",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Grid Name",
      type: "string",
    },
    {
      name: "items",
      title: "Grid Items",
      type: "array",
      options: {
        layout: "grid",
      },
      of: [
        {
          title: "Grid Item",
          type: "object",
          fields: [
            {
              name: "width",
              title: "Width",
              type: "string",
              options: {
                list: [
                  { title: "25%", value: "25" },
                  { title: "33%", value: "33" },
                  { title: "50%", value: "50" },
                  { title: "66%", value: "66" },
                  { title: "75%", value: "75" },
                  { title: "100%", value: "100" },
                ],
                layout: "dropdown",
              },
            },
            {
              name: "orientation",
              title: "Orientation",
              type: "string",
              options: {
                list: [
                  { title: "Cover", value: "cover" },
                  { title: "Contain", value: "contain" },
                ],
                layout: "radio",
              },
            },
            {
              title: "Image",
              name: "image",
              type: "image",
            },
            {
              name: "meta",
              title: "Metadata",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
