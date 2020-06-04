/**
 *
 * @name Navigation Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Navigation Data Model
 *
 */

// __________________________________________________________________________________________

export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "main",
      title: "Main",
      type: "array",
      of: [
        {
          title: "Item",
          type: "object",
          fields: [
            {
              title: "Label",
              name: "label",
              type: "string"
            },
            {
              title: "Slug",
              name: "slug",
              type: "string"
            }
          ]
        }
      ]
    }

    // {
    //   name: "items",
    //   title: "Items",
    //   type: "reference",
    //   to: [{ type: "project" }]
    // }
  ]
};

// __________________________________________________________________________________________
