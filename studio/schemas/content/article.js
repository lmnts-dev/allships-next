/**
 *
 * @name Article Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Article Data Model
 *
 */

import { DefaultPost } from "../scaffold/DefaultPost";

// __________________________________________________________________________________________

export const ArticleRegistry = {
  name: "article",
  title: "Article",
  type: "document",
};

export const Article = {
  ...ArticleRegistry,
  fields: [...DefaultPost],
};

// __________________________________________________________________________________________
