/**
 *
 * @name About Landing Page Schema
 * @author Peter Laxalt
 * @description About Landing Page Data Model
 *
 */

import { DefaultPage } from "../scaffold/DefaultPage";

// __________________________________________________________________________________________

export const AboutPageRegistry = {
  name: "aboutPage",
  title: "About Page",
  type: "document",
};

export const AboutPage = {
  ...AboutPageRegistry,
  fields: [...DefaultPage],
};

// __________________________________________________________________________________________
