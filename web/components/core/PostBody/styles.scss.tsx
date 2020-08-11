// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";

// Constants

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name PostBodyStyle
 * @description Our styles for postings.
 *
 */

export const PostBodyStyle = styled.div`
  /* Settings */
  --articleFont: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  --articleReadingFontSize: 1.2rem;

  --articlePadding: calc(${Root.Size} * 4);
  --articleMaxWidth: calc(${Root.Site.Width} / 2);

  /* Core Styles */
  padding-top: var(--articlePadding);
  padding-bottom: var(--articlePadding);
  font-family: var(--articleFont);
  margin-left: calc(${Root.Grid.Gutter.Left} * -1);
  margin-right: calc(${Root.Grid.Gutter.Right} * -1);
  width: calc(100% + (${Root.Grid.Gutter.Right} + ${Root.Grid.Gutter.Left}));

  /* Reset Fonts */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${Theme.Font.Header};
    text-transform: uppercase;
    line-height: 0.8;
  }

  a {
    color: ${Theme.Color.Secondary};

    &:hover {
      text-decoration: none;
      background: ${Theme.Color.Primary};
    }
  }

  p,
  ul {
    font-family: var(--articleFont);
    max-width: var(--articleMaxWidth);
    margin: 0 auto;
    color: ${Theme.Color.White};
  }

  p {
    font-size: var(--articleReadingFontSize);
    line-height: 1.5;
    color: ${Theme.Color.White};
  }

  /* Core Elements */
  .post-intro-section {
    h1 {
      font-family: ${Theme.Font.Header};
      text-align: center;
    }

    ul {
      list-style-type: none;
      display: flex;
      justify-content: center;
      padding-bottom: ${Root.Size};
      font-family: ${Theme.Font.Header};
      text-transform: uppercase;
      font-size: 1.4rem;
      color: ${Theme.Color.White};

      li {
        margin: 0 calc(${Root.Size} / 4);
      }

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        font-size: .9rem;
      }
    }
  }

  article {
    padding-left: ${Root.Grid.Gutter.Left};
    padding-right: ${Root.Grid.Gutter.Right};
  }
`;
