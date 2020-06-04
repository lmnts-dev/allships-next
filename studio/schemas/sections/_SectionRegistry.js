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

import { CenteredTextRegistry } from "./CenteredText";
import { ColumnContentRegistry } from "./ColumnContent";
import { FullWidthImageRegistry } from "./FullWidthImage";
import { GridRowRegistry } from "./GridRow";
import { HeadlineRowRegistry } from "./HeadlineRow";
import { MarqueeRowRegistry } from "./MarqueeRow";
import { SectionBreakRegistry } from "./SectionBreak";
import { StickySectionRegistry } from "./StickySection";

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
    { type: CenteredTextRegistry.name },
    { type: ColumnContentRegistry.name },
    { type: FullWidthImageRegistry.name },
    { type: GridRowRegistry.name },
    { type: HeadlineRowRegistry.name },
    { type: MarqueeRowRegistry.name },
    { type: SectionBreakRegistry.name },
    { type: StickySectionRegistry.name },
  ];

  // Add any optional sections here.
  let optionalSections = [];

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
