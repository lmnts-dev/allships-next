/**
 *
 * @name Project Industries Landing Page Schema
 * @author Peter Laxalt
 * @description lmnts-6 Industries Landing Page Data Model
 *
 */

import { SectionRegistry } from "../sections/_SectionRegistry";
import { DisplayIndustryCategoriesRegistryName } from "../sections/DisplayIndustryCategories";
import { FeaturedIndustriesHeroRegistryName } from "../sections/FeaturedIndustriesHero";

// __________________________________________________________________________________________

export default {
  name: "industriesLandingPage",
  title: "Industries Listing Page",
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
          "project_horizontal_listings",
          "link_list_navigation",
          DisplayIndustryCategoriesRegistryName,
          FeaturedIndustriesHeroRegistryName,
        ],
        false
      ),
    },
  ],
};

// __________________________________________________________________________________________
