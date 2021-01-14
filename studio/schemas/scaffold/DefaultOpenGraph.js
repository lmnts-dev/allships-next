/**
 *
 * @name DefaultOpenGraph
 * @author Peter Laxalt
 * @description
 * Default OpenGraph settings.
 *
 */

// __________________________________________________________________________________________

export const DefaultOpenGraph = [
  {
    name: "opengraph",
    type: "object",
    title: "(Optional) OpenGraph",
    description: "For SEO & preview links when sharing this page.",
    options: {
      collapsible: true,
      collapsed: true,
    },
    fieldsets: [
      {name: 'opengraph', title: 'OpenGraph Settings'}
    ],
    fields: [
      {
        name: "image",
        title: "Image",
        type: "image",
        fieldset: 'opengraph',
        options: {
          hotspot: true,
        },
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        fieldset: 'opengraph',
      },
      {
        name: "tags",
        title: "Tags",
        type: "array",
        fieldset: 'opengraph',
        of: [
          {
            type: "string",
            name: "tag",
            title: "Tag Name",
          },
        ],
      },
    ]
  }
];
