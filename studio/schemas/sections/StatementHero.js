/**
 *
 * @name StatementHero Section
 * @author Peter Laxalt
 * @description Simple StatementHero Schema
 * @requires /web/sections/StatementHero
 *
 */

// __________________________________________________________________________________________

export default {
  title: "Statement Hero",
  name: "statement_hero",
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
