/**
 *
 * @name QuoteHero Section
 * @author Peter Laxalt
 * @description Simple QuoteHero Schema
 * @requires /web/sections/QuoteHero
 *
 */

// __________________________________________________________________________________________

export default {
  title: "Quote Hero",
  name: "quote_hero",
  type: "object",
  fields: [
    {
      name: "quote",
      title: "Quote to display",
      type: "string",
    },
    {
      name: "caption",
      title: "Caption to display above quote",
      type: "string",
    },
    {
      name: "intro",
      title: "Intro to display next to the quote.",
      type: "string",
    },
    {
      name: "cta",
      title: "CTA below intro. Optional.",
      type: "object",
      fields: [
        {
          name: "slug",
          type: "string",
          title: "Slug",
        },
        {
          name: "label",
          type: "string",
          title: "Label",
        },
      ],
    },
    {
      name: "author",
      title: "Author of quote. Optional.",
      type: "object",
      fields: [
        {
          name: "name",
          type: "string",
          title: "Name",
          validation: (valid) => valid.required(),
        },
        {
          name: "company",
          type: "string",
          title: "Company",
          validation: (valid) => valid.required(),
        },
      ],
    },
    {
      name: "extraContent",
      title: "Extra Content",
      description: "Displayed beneath Intro Body.",
      type: "array",
      of: [
        {
          name: "marqueeRow",
          title: "Marquee Row",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Section Name",
              description:
                "Purely for organization - this does not display anywhere.",
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
        },
      ],
    },
  ],
};
