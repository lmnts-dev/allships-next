/**
 *
 * @name ColumnContent Section
 * @author Peter Laxalt
 * @description Simple ColumnContent Schema
 * @requires /web/sections/ColumnContent
 *
 */

// __________________________________________________________________________________________

export default {
  title: "Column Content",
  name: "column_content",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Section Name",
      description: "Purely for organization - this does not display anywhere.",
      type: "string",
    },
    {
      name: "caption",
      title: "Caption",
      description: "Displayed above headline. Optional.",
      type: "string",
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "content",
      title: "Content Columns",
      description: "Columns of content.",
      type: "array",
      of: [
        {
          name: "contentColumn",
          title: "Content Column",
          type: "object",
          fields: [
            { name: "headline", type: "string", title: "Headline" },
            { name: "content", type: "string", title: "Content" },
            {
              name: "cta",
              title: "Call to Action",
              description: "Optional.",
              type: "object",
              options: {
                collapsible: true,
              },
              fields: [
                { name: "label", type: "string", title: "Label" },
                { name: "href", type: "string", title: "Slug" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "headlineStyle",
      title: "Headline Style",
      type: "string",
      options: {
        list: [
          { title: "Solid", value: "solid" },
          { title: "Outline", value: "outline" },
        ],
        layout: "radio",
      },
    },
    {
      name: "headlineSize",
      title: "Headline Size",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Small", value: "sm" },
          { title: "Medium", value: "md" },
          { title: "Large", value: "lg" },
          { title: "Extra Large", value: "xl" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "contentHeadlineSize",
      title: "Content Headline Size",
      description: "Size of columned content headlines.",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Small", value: "sm" },
          { title: "Medium", value: "md" },
          { title: "Large", value: "lg" },
          { title: "Extra Large", value: "xl" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "scrollDownLabel",
      title: "Scroll Down Label",
      description: "Scroll down arrow label. Optional.",
      type: "string",
    },
  ],
};
