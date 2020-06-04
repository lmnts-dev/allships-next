/**
 *
 * @name FeaturedIndustriesHero Section
 * @author Peter Laxalt
 * @description
 * Simple FeaturedIndustriesHero Schema
 * @requires /web/sections/FeaturedIndustriesHero
 *
 */

// __________________________________________________________________________________________

export const FeaturedIndustriesHeroRegistryName = "featured_industries_hero";

export const FeaturedIndustriesHero = {
  title: "Featured Industries Hero",
  name: FeaturedIndustriesHeroRegistryName,
  type: "object",
  fields: [
    {
      name: "name",
      title: "Section Name",
      description: "Purely for organizational purposes",
      type: "string",
    },
    {
      name: "style",
      title: "Hero Style...",
      type: "string",
      options: {
        list: [
          { title: "Fullwidth", value: "fullwidth" },
          { title: "Default", value: "default" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "industries",
      title: "Industries",
      type: "array",
      of: [
        {
          type: "reference",
          name: "industryCategory",
          to: [{ type: "industryCategory" }],
        },
        {
          type: "reference",
          name: "industry",
          to: [{ type: "industry" }],
        },
      ],
    },
  ],
};
