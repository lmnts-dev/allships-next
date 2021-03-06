// Imports
// __________________________________________________________________________________________

// Core
import React from "react";
import { createGlobalStyle } from "styled-components";

// Styles
import { Typography } from "./Font";
import { Palette } from "./Color";
import { RootVariables } from "../Root";
import { Theme } from "../Theme";
import { Root } from "../Root";

// Begin Component
// __________________________________________________________________________________________

let dialogShadowSize = "calc(" + Root.BorderSize + " * 2)";

/**
 *
 * @name GlobalClasses
 * @author Peter Laxalt
 * @description This is the global styles throughout the app.
 *
 */
const GlobalClasses = createGlobalStyle`

  /* Media Query Modifiers */
  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    &.__visible-mobile,
    &.__visible-tablet {
      display: block;

      .card-listings-filter-bar-categories-mobile {

      }
    }

    &.__visible-desktop {
      display: none;
    }
  }

  @media (min-width: ${Theme.Base.Media.Width.Md}) {
    &.__visible-mobile,
    &.__visible-tablet {
      display: none;
    }
  }

  /** Dialogs */
  .dialog {
    background: ${Theme.Color.Dialog};
    pointer-events: all;
    border: ${Root.BorderSize} solid ${Theme.Color.Primary};
    box-shadow: ${dialogShadowSize} ${dialogShadowSize} 0px 0px ${Theme.Color.Primary};
    color: ${Theme.Color.Primary};
    font-size: 1.3rem;

    &.__maximized {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0px !important;
      bottom: 0 !important;
      width: calc(100vw - 0px) !important;
      height: 100vh !important;
      min-width: calc(100vw - 0px) !important;
      max-width: calc(100vw - 0px) !important;
      min-height: 100vh !important;
      max-height: 100vh !important;
    }

    .dialog-header {
      display: flex;
      text-transform: uppercase;
      border-bottom: ${Root.BorderSize} solid ${Theme.Color.Primary};

      .col {
        display: flex;
        height: ${Root.Nav.Size};
        align-items: center;

        &.title {
          flex: 1;
          padding: 0 ${Root.DialogPaddingSize};
          color: ${Theme.Color.Secondary};
        }

        &.toggle {
          width: ${Root.Nav.Size};
          border-left: ${Root.BorderSize} solid ${Theme.Color.Primary};
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          font-size: 2rem;

          &:hover {
            background: ${Theme.Color.Secondary};
            color: ${Theme.Color.Dialog};
          }

          &.__maximize {
            figure {
              padding: 0;
              margin: 0;
              width: calc(${Root.Nav.Size} * .5);
              height: calc(${Root.Nav.Size} * .5);
              border-top: 6px;
              border-right: 3px;
              border-bottom: 3px;
              border-left: 3px;
              border-style: solid;
              border-color:  ${Theme.Color.Primary};
            }
          }
        }
      }
    }

    &.__route-dialog {
      .dialog-header {
        background: ${Theme.Color.Primary};
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        .col {
          &.title {
            color: ${Theme.Color.Dialog}
          }

          &.toggle {
            background: ${Theme.Color.Dialog};

            &:hover {
              background: ${Theme.Color.Secondary};
              color: ${Theme.Color.Dialog};
            }
          }
        }
      }

      .launcher-dialog-structure {
        display: flex;
        flex-direction: column;

        .dialog-tabs {
          width: 100%;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          ul {
            display: flex;
            justify-content: flex-start;
            width: 100%;
            border-bottom: ${Root.BorderSize} solid ${Theme.Color.Primary};

            li {
              border-right: ${Root.BorderSize} solid ${Theme.Color.Primary};
              text-transform: uppercase;
              cursor: pointer;

              a {
                display: block;
                padding: ${Root.DialogPaddingSize};
                color: ${Theme.Color.Primary};

                &:hover {
                  text-decoration: none;
                }
              }

              &:not(.__active) {
                &:hover {
                  a {
                    background: ${Theme.Color.Secondary};
                    color: ${Theme.Color.Dialog};
                  }
                }
              }

              &.__active {
                position: relative;

                &:before {
                  content: '';
                  position: absolute;
                  left: 0;
                  right: 0;
                  bottom:  calc(${Root.BorderSize} * -1);
                  height: calc(${Root.BorderSize} * 2);
                  background: ${Theme.Color.Black};
                }
              }
            }
          }
        }
      }
    }

    .dialog-content {
      padding: ${Root.DialogPaddingSize};
    }
  }

  /** Animation */
  @keyframes marquee {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  /** Article Listings */
  .article-listing-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 0 calc(${Root.DialogPaddingSize} * -1);
    width: calc(100% + (${Root.DialogPaddingSize} * 2));

    .article-listing {
      width: 33%;
    }
  }

  .__maximized {
    .article-listing-wrapper {
      .article-listing {
        width: 25%;
      }
    }
  }

  .article-listing {
    padding: ${Root.DialogPaddingSize};
    color: ${Theme.Color.Secondary};

    .article-listing-inner {

      .article-listing-media {
        position: relative;
      }

      .article-listing-details {
        span {
          display: block;
          text-transform: uppercase;

          &.__date {
            margin-top: calc(${Root.Size} / 4);
          }

          &.__title {
            font-size: 2rem;
          }
        }
      }
    }

    &:hover {
      text-decoration: none;

      .article-listing-media {
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          z-index: 5;
          width: 100%;
          height: 100%;
          box-shadow: inset 0px 0px 0px ${Root.BorderSize} ${Theme.Color.Secondary};
        }
      }
    }

    &:active {
      color: ${Theme.Color.Primary};

      .article-listing-media {
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          z-index: 5;
          width: 100%;
          height: 100%;
          box-shadow: inset 0px 0px 0px ${Root.BorderSize} ${Theme.Color.Primary};
        }
      }
    }
  }

  /** Buttons */
  .btn {
    --btnPadding: calc(${Root.Size} / 2);
    --btnHeight: calc(${Root.Size} * .75);

    padding: 0 var(--btnPadding);
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--btnHeight);
    text-transform: uppercase;
    font-size: 1.5rem;
    cursor: pointer;
    outline: 0;
    border: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

      /** Category List */
      .category-list {
        display: flex;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-family: var(--appBodyText);

        li {
          background: ${Theme.Color.White};
          padding: ${Root.BorderSize};
          margin-right: ${Root.BorderSize};
          text-transform: uppercase;
          font-family: var(--appBodyText);

          a {
            color: ${Theme.Color.Primary};

            &:hover {
              text-decoration: none;
            }
          }

          &:last-child {
            margin-right: 0;
          }

          &.__is-published-by-us {
            background: ${Theme.Color.Dialog};
            color: ${Theme.Color.Secondary};
          }

          &.__category-pill {
            color: ${Theme.Color.Primary};
          }
        }
      }


`;

/**
 *
 * Browser Reset
 *
 */

const Reset = createGlobalStyle`
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

  /** For Lazy Loading **/
  .lazy {
    opacity: 0;
    transition: opacity ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};

    &.loaded {
      opacity: 1;
    }
  }

  /** Object Fit **/
  .object-fit {
    background: darkgray;
    position: relative;
    width: 100%;
    padding-bottom: 80%;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    margin: 0;
    padding: 0;
    /* height: 100%; */
    overflow: auto;
    /* overflow: hidden; */
  }

  * {
    /* cursor: none !important; */
  }



  /* Sections
     ========================================================================== */

  /**
   * Remove the margin in all browsers.
   */

  body {
    height: 100%;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    /* overflow: hidden; */
  }

  /**
   * Render the 'main' element consistently in IE.
   */

  main {
    display: block;
  }


  /* Grouping content
     ========================================================================== */

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd 'em' font sizing in all browsers.
   */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
     ========================================================================== */

  /**
   * Remove the gray background on active links in IE 10.
   */

  a {
    background-color: transparent;
  }

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

  b,
  strong {
    font-weight: bolder;
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd 'em' font sizing in all browsers.
   */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
   * Add the correct font size in all browsers.
   */

  small {
    font-size: 80%;
  }

  /**
   * Prevent 'sub' and 'sup' elements from affecting the line height in
   * all browsers.
   */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
     ========================================================================== */

  /**
   * Remove the border on images inside links in IE 10.
   */

  img {
    border-style: none;
  }

  /* Forms
     ========================================================================== */

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

  button,
  input { /* 1 */
    overflow: visible;
  }

  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

  button,
  select { /* 1 */
    text-transform: none;
  }

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
   * Remove the inner border and padding in Firefox.
   */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
   * Restore the focus styles unset by the previous rule.
   */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
   * Correct the padding in Firefox.
   */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from 'fieldset' elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    'fieldset' elements in all browsers.
   */

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

  progress {
    vertical-align: baseline;
  }

  /**
   * Remove the default vertical scrollbar in IE 10+.
   */

  textarea {
    overflow: auto;
  }

  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to 'inherit' in Safari.
   */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* Interactive
     ========================================================================== */

  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

  details {
    display: block;
  }

  /*
   * Add the correct display in all browsers.
   */

  summary {
    display: list-item;
  }

  /* Misc
     ========================================================================== */

  /**
   * Add the correct display in IE 10+.
   */

  template {
    display: none;
  }

  /**
   * Add the correct display in IE 10.
   */

  [hidden] {
    display: none;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }


  ul {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;

    -webkit-margin-before: 0px;
    -webkit-margin-after: 0px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    border: 1px solid #ddd;
  }

  video {
    max-width: 100%;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent; /* for remove highlight */
  }

  /* Intercom */
  .intercom-namespace {
    .intercom-launcher-frame {
      bottom: unset !important;
      top: 18px !important;
      right: 139px !important;
    }
  }

  .intercom-container {
    display: none !important;
  }

`;

/**
 *
 * @name GlobalStyle
 * @author Peter Laxalt
 * @description This exports all of our global styles.
 *
 */
export const GlobalStyle: React.FunctionComponent = () => (
  <>
    <RootVariables />
    <Reset />
    <GlobalClasses />
    <Typography />
    <Palette />
  </>
);
