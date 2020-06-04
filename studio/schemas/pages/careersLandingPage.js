/**
 *
 * @name Careers Landing Page Schema
 * @author Peter Laxalt
 * @description lmnts-6 Careers Landing Page Data Model
 *
 */

import { SectionRegistry } from "../sections/_SectionRegistry";

// __________________________________________________________________________________________

export default {
  name: "careersLandingPage",
  title: "Careers Listing Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Purely for organization - this does not display anywhere.",
      type: "string",
    },
    {
      name: "content",
      type: "array",
      title: "Page Sections",
      of: SectionRegistry(
        [
          // "industry_category_listings",
          "project_horizontal_listings",
          "link_list_navigation",
        ],
        false
      ),
    },
  ],
};

// __________________________________________________________________________________________
