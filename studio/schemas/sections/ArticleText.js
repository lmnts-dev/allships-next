/**
 *
 * @name ArticleText Section
 * @author Peter Laxalt
 * @description
 * Simple ArticleText Schema
 * @requires /web/sections/ArticleText
 *
 */

// __________________________________________________________________________________________

export const ArticleTextRegistry = {
  title: "Article Text",
  name: "article_text",
  type: "object",
};

export const ArticleText = {
  ...ArticleTextRegistry,
  fields: [
    {
      name: "text_content",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
