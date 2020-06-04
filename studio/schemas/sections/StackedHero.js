/**
 *
 * @name StackedHero Section
 * @author Peter Laxalt
 * @description
 * Simple StackedHero Schema
 * @requires /web/sections/StackedHero
 *
 */

// __________________________________________________________________________________________

export default {
  title: "Stacked Hero",
  name: "stacked_hero",
  type: "object",
  fields: [
    {
      name: "caption",
      title: "Caption",
      description: "Displayed above headline.",
      type: "string",
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "introCaption",
      title: "Intro Caption",
      description: "Displayed above the Intro Body.",
      type: "string",
    },
    {
      name: "introBody",
      title: "Intro Body",
      description: "Displayed beneath headline & caption.",
      type: "text",
      rows: 4,
      validation: (validate) => validate.required(),
    },
    {
      name: "cta",
      title: "Call to Action",
      description: "Displayed beneath Intro Body.",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "href", type: "string", title: "Slug" },
      ],
    },
    {
      name: "extraContent",
      title: "Extra Content",
      description: "Displayed beneath Intro Body.",
      type: "array",
      of: [
        {
          name: "numberedCards",
          title: "Numbered Cards",
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "List Name",
              description:
                "Purely for organization - this does not display anywhere.",
            },
            {
              name: "list",
              type: "array",
              title: "Card List",
              of: [
                {
                  name: "numberedCard",
                  type: "object",
                  fields: [
                    { name: "name", type: "string", title: "Name" },
                    { name: "excerpt", type: "string", title: "Excerpt" },
                    { name: "slug", type: "string", title: "Slug" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
