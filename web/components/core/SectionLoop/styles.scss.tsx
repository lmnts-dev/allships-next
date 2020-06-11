/**
 *
 * SectionLoopStyle.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website SectionLoopStyle Styles.
 *
 */

// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Begin Styles
// __________________________________________________________________________________________

let sectionPadding = `calc(${Root.Size} * 2)`;
let sectionContentMaxWidth = `550px`;

export const SectionLoopStyle = styled.section`
  width: 100%;
  margin: 0 auto;

  /***************** */
  /* Sections */
  /***************** */

  .section {
    /***************** */
    /* Global Adjustments */
    /***************** */

    p {
      font-size: 1.5em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
      font-family: ${Theme.Font.HeaderAlt};
      font-weight: 500;
      font-size: 3em;
    }

    /***************** */
    /* Namespaces */
    /***************** */

    /* -- FullWidthImage */
    &-fullwidth-image {
      + .section-centered-text {
        padding-top: calc(${sectionPadding} * 2);
      }
    }

    /* -- CenteredText */
    &-centered-text {
      padding: ${sectionPadding};
    }

    /* -- Sticky */
    &-sticky {
      padding: ${sectionPadding} 0;

      .section-sticky-col {
        &.content {
          max-width: ${sectionContentMaxWidth};
        }
      }
    }

    /* -- SectionBreak */
    &-break {
      padding: ${sectionPadding} 0;
    }

    /* -- GridRow */
    &-grid-row {
      padding: ${sectionPadding} 0;
    }

    /* -- SmallHeadline */
    &-headline {
      padding: ${sectionPadding} ${sectionPadding} 0 ${sectionPadding};

      .section-headline-inner {
        max-width: ${sectionContentMaxWidth};
      }
    }
  }
`;
