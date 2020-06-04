/**
 *
 * @name DisplayServiceCategories Section
 * @author Peter Laxalt
 * @description
 * Simple DisplayServiceCategories Schema
 * @requires /web/sections/DisplayServiceCategories
 *
 */

// __________________________________________________________________________________________

export const DisplayServiceCategoriesRegistryName =
  "display_service_categories";

export const DisplayServiceCategories = {
  title: "Display Service Categories",
  name: DisplayServiceCategoriesRegistryName,
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
