/**
 *
 * @name Config Schema
 * @author Peter Laxalt
 * @description Site Config Data Model
 *
 */

// __________________________________________________________________________________________

export default {
  name: "config",
  title: "🤖 Settings",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Company Name",
      type: "string"
    },
    {
      name: "items",
      title: "Items",
      type: "reference",
      to: [{ type: "project" }]
    }
  ]
};

// __________________________________________________________________________________________
