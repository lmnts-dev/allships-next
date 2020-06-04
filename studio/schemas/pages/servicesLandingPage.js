/**
 *
 * @name Project Services Landing Page Schema
 * @author Peter Laxalt
 * @description lmnts-6 Services Landing Page Data Model
 *
 */

import { SectionRegistry } from "../sections/_SectionRegistry";
import { DisplayServiceCategoriesRegistryName } from "../sections/DisplayServiceCategories";
import { FeaturedServicesHeroRegistryName } from "../sections/FeaturedServicesHero";

// __________________________________________________________________________________________

export default {
  name: "servicesLandingPage",
  title: "Services Listing Page",
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
          DisplayServiceCategoriesRegistryName,
          FeaturedServicesHeroRegistryName,
        ],
        false
      ),
    },
  ],
};

// __________________________________________________________________________________________
