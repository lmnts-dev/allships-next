/**
 *
 * @name LinkListNavigation Section
 * @author Peter Laxalt
 * @description Simple LinkListNavigation Schema
 * @requires /web/sections/LinkListNavigation
 *
 */

// __________________________________________________________________________________________

export default {
  title: "Link List Navigation",
  name: "link_list_navigation",
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
