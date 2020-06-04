/**
 *
 * @name ProjectHorizontalListings Section
 * @author Peter Laxalt
 * @description Simple ProjectHorizontalListings Schema
 * @requires /web/sections/ProjectHorizontalListings
 *
 */

// __________________________________________________________________________________________

export default {
  title: "Project Horizontal Listings",
  name: "project_horizontal_listings",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Section Name",
      description: "Purely for organization - this does not display anywhere.",
      type: "string",
    },
  ],
};
