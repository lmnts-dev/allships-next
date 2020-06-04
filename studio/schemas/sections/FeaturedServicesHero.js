/**
 *
 * @name FeaturedServicesHero Section
 * @author Peter Laxalt
 * @description
 * Simple FeaturedServicesHero Schema
 * @requires /web/sections/FeaturedServicesHero
 *
 */

// __________________________________________________________________________________________

export const FeaturedServicesHeroRegistryName = "featured_services_hero";

export const FeaturedServicesHero = {
  title: "Featured Services Hero",
  name: FeaturedServicesHeroRegistryName,
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
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "reference",
          name: "serviceCategory",
          to: [{ type: "serviceCategory" }],
        },
        {
          type: "reference",
          name: "service",
          to: [{ type: "service" }],
        },
      ],
    },
  ],
};
