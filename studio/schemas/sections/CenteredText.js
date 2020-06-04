/**
 *
 * @name CenteredText Section
 * @author Peter Laxalt
 * @description
 * Simple CenteredText Schema
 * @requires /web/sections/CenteredText
 *
 */

// __________________________________________________________________________________________

export default {
  title: "Centered Text",
  name: "centered_text",
  type: "object",
  fields: [
    {
      name: "content",
      title: "Body",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
  ],
};
