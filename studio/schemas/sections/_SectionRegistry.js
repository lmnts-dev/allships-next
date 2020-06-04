/**
 *
 * @name Section Registry
 * @author Peter Laxalt
 * @description
 * @requires web/sections/SectionLoop
 * This is where we register our section id's to show up
 * in the Sanity builder.
 *
 */

import { DisplayIndustryCategoriesRegistryName } from "./DisplayIndustryCategories";
import { DisplayServiceCategoriesRegistryName } from "./DisplayServiceCategories";
import { FeaturedServicesHeroRegistryName } from "./FeaturedServicesHero";
import { FeaturedIndustriesHeroRegistryName } from "./FeaturedIndustriesHero";

// __________________________________________________________________________________________

/**
 *
 * @name SectionRegistry
 * @param includeSections? : array : Section `types` to include.
 * @param excludeSections? : array : Section `types` to exclude.
 * @returns Array back of sections.
 *
 */
export const SectionRegistry = (includeSections, excludeSections) => {
  /**
   *
   * Default Variables
   *
   */
  let defaultSections = [
    { type: "centered_text" },
    { type: "column_content" },
    { type: "fullwidth_image" },
    { type: "grid_row" },
    { type: "headline" },
    { type: "listings_tall_format" },
    { type: "marquee_row" },
    { type: "quote_hero" },
    { type: "section_break" },
    { type: "stacked_hero" },
    { type: "sticky_section" },
    { type: "fullwidth_hero" },
    { type: "statement_hero" },
    { type: "featured_project_slider" },
  ];

  let optionalSections = [
    { type: "project_horizontal_listings" },
    { type: "link_list_navigation" },
    { type: DisplayIndustryCategoriesRegistryName },
    { type: DisplayServiceCategoriesRegistryName },
    { type: FeaturedServicesHeroRegistryName },
    { type: FeaturedIndustriesHeroRegistryName },
  ];

  let selectedSections = [];

  let filteredSections = defaultSections;

  /**
   *
   * @name handleIncludeSections
   * @returns Array back of defaultSections with included sections added on
   *
   */
  function handleIncludeSections(sectionsToInclude) {
    sectionsToInclude.forEach((type) => {
      let matchedSection = optionalSections.filter(
        (section) => section.type == type
      );

      selectedSections = selectedSections.concat(matchedSection[0]);
    });

    filteredSections = filteredSections.concat(selectedSections);

    return filteredSections;
  }

  /**
   *
   * @name handleExcludeSections
   * @returns Array with specified sections removed
   *
   */
  function handleExcludeSections(sectionsToExclude) {
    sectionsToExclude.forEach((type) => {
      filteredSections = filteredSections.filter(
        (section) => section.type != type
      );
    });

    return filteredSections;
  }

  /**
   *
   * Return Our Data
   *
   */
  if (includeSections && excludeSections) {
    // If both are specified
    handleIncludeSections(includeSections);

    return handleExcludeSections(excludeSections);
  } else if (includeSections) {
    // If only includeSections is specified
    return handleIncludeSections(includeSections);
  } else if (excludeSections) {
    // If only excludeSections is specified
    return handleExcludeSections(excludeSections);
  } else {
    // If none specified
    return defaultSections;
  }
};
