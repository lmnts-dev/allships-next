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
  :root {
    --cardHoverTranslate: calc(${Root.Size} * 0.15);
    --cardPadding: calc(${Root.Size} * 0.25);
  }

  .content-card {
  
    width: 20%;
    padding: var(--cardPadding);
    position: relative;

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

    &.__isLink {
      cursor: pointer;

      .content-card-inner {
        position: relative;

        /** External Link Indicator */
        &:after {
          content: "";
          position: absolute;
          top: 0px;
          right: -10px;
          width: 0; 
          height: 0; 
          border-top: 20px solid transparent;
          border-bottom: 20px solid transparent;  
          border-left: 20px solid ${Theme.Color.Primary};
          transform: rotate(-45deg);
          transform-origin: bottom left;
          z-index: 15;
        }
      }

      &:hover {
        .content-card-inner {
          transform: translate(
            calc(var(--cardHoverTranslate) * -1),
            calc(var(--cardHoverTranslate) * -1)
          );
        }

        &:before {
          transform: translate(
            calc(var(--cardHoverTranslate)),
            calc(var(--cardHoverTranslate))
          );
        }
      }

      &:active {
        .content-card-inner {
          transform: translate(0, 0);
        }

        &:before {
          transform: translate(
            calc(var(--cardHoverTranslate)),
            calc(var(--cardHoverTranslate))
          );
        }
      }
    }

    .content-card-inner {
      width: 100%;
      padding-bottom: 450px;
      overflow: hidden;
      position: relative;
      background: ${Theme.Color.Primary};
      border: ${Root.BorderSize} solid ${Theme.Color.Primary};
      transform: translate(0, 0);

      /** Card Title */
      .content-card-title {
        position: absolute;
        left: 0;
        bottom: 0;
        max-width: 100%;
        background: ${Theme.Color.Primary};
        color: ${Theme.Color.Background};
        text-transform: uppercase;
        font-size: 1.2rem;
        padding: ${Root.BorderSize} calc(${Root.BorderSize} * 2) ${Root.BorderSize};
        z-index: 10;
        pointer-events: none;
      }

      /** Card Category */
      .content-card-categories {
        position: absolute;
        left: 0;
        top: 0;
        max-width: 100%;
        z-index: 10;
        padding: ${Root.BorderSize};
        display: flex;
        pointer-events: none;

        li {
          background: ${Theme.Color.White};
          padding: ${Root.BorderSize};
          margin-right: ${Root.BorderSize};
          text-transform: uppercase;
          color: ${Theme.Color.Primary};

          &:last-child {
            margin-right: 0;
          }
        }
      }

      /** Card Cover */
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
        z-index: 5;
      }
    }
  }
`;

export default GlobalStyles;
