// ContentCard Styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { createGlobalStyle } from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Animations
import { Blink } from "../../../constants/styles/Animation";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const GlobalStyles = createGlobalStyle`
  .content-card {
    --hoverTranslate: calc(${Root.Size} * 0.15);
    --cardPadding: calc(${Root.Size} * 0.25);

    width: 20%;
    padding: var(--cardPadding);
    position: relative;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      left: calc(var(--cardPadding));
      right: calc(var(--cardPadding));
      bottom: calc(var(--cardPadding));
      top: calc(var(--cardPadding));
      background: ${Theme.Color.Primary};
      transform: translate(0, 0);
    }

    .content-card-inner {
      width: 100%;
      padding-bottom: 450px;
      overflow: hidden;
      position: relative;
      background: ${Theme.Color.Primary};
      border: ${Root.BorderSize} solid ${Theme.Color.Primary};
      transform: translate(0, 0);

      img {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        object-fit: cover;
        object-position: center center;
        width: 100%;
        height: 100%;
        max-width: 100%;
      }
    }

    &:hover {
      .content-card-inner {
        transform: translate(
          calc(var(--hoverTranslate) * -1),
          calc(var(--hoverTranslate) * -1)
        );
      }

      &:before {
        transform: translate(
          calc(var(--hoverTranslate)),
          calc(var(--hoverTranslate))
        );
      }
    }

    &:active {
      .content-card-inner {
        transform: translate(0, 0);
      }

      &:before {
        transform: translate(
          calc(var(--hoverTranslate)),
          calc(var(--hoverTranslate))
        );
      }
    }
  }
`;

export default GlobalStyles;
