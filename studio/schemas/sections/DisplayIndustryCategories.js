/**
 *
 * @name DisplayIndustryCategories Section
 * @author Peter Laxalt
 * @description
 * Simple DisplayIndustryCategories Schema
 * @requires /web/sections/DisplayIndustryCategories
 *
 */

// __________________________________________________________________________________________

export const DisplayIndustryCategoriesRegistryName =
  "display_industry_categories";

export const DisplayIndustryCategories = {
  title: "Display Industry Categories",
  name: DisplayIndustryCategoriesRegistryName,
  type: "object",
  fields: [
    {
      name: "name",
      title: "Section Name",
      description: "Purely for organizational purposes",
      type: "string",
    },
    {
      name: "as",
      title: "Display as...",
      type: "string",
      options: {
        list: [
          { title: "Horizontal Listings", value: "horizontal_listings" },
          { title: "Vertical Listings", value: "vertical_listings" },
        ],
        layout: "dropdown",
      },
    },
  ],
};
