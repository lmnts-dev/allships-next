/**
 *
 * Listings.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website Listings Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { createGlobalStyle } from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
// import { hexToRGB } from "../../../utils/hexToRGB";
import { Root } from "../../../constants/Root";

// Begin Interface
//////////////////////////////////////////////////////////////////////

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const CursorContainerStyle = styled.div`
  position: fixed;
  z-index: 998;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  mix-blend-mode: exclusion;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    display: none;
  }
`;

export const GloballyHideCursor = createGlobalStyle`
  * {
    cursor: none !important;

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      cursor: crosshair !important;
    }
  }
`;

export const CursorStyle = styled.div`
  z-index: 998;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  mix-blend-mode: exclusion;
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};

  .cursor-border {
    border: ${Root.BorderSize} solid ${Theme.Color.Primary};
    width: 80px;
    height: 80px;
    opacity: 1;
    background: rgba(0, 0, 0, 0);
    transition: all ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};
    transform: translate(-50%, -50%) scale(1);
    /* filter: blur(0px); */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  &.active {
    .cursor-border {
      transform: translate(-50%, -50%) scale(2);
      opacity: 1;
      /* filter: blur(5px); */
    }
  }

  &.idle {
    /* Hover States: Idle */
    .cursor-slider-controls {
      opacity: 0;
      transition: all ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};
      position: relative;

      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid ${Theme.Color.Primary};
        top: 50%;
        opacity: 0;
        transition: all ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};
      }

      &:before {
        opacity: 0;
        transform: translate(-200%, -50%);
      }

      &:after {
        opacity: 0;
        transform: translate(150%, -50%) rotate(180deg);
      }
    }
  }

  &.link {
    .cursor-border {
      transform: translate(-50%, -50%) scale(2);
    }
  }

  &.focus {
    .cursor-border {
      background: rgba(0, 0, 0, 0);
      border: 1px solid rgba(0, 0, 0, 0);
      background-image: url("https://source.unsplash.com/1600x900/?pink");
      background-attachment: fixed;
      transform: translate(-50%, -50%) scale(1);
      width: 50vw;
      height: 50vw;
    }
  }

  &.slider {
    .cursor-border {
      transform: translate(-50%, -50%) scale(2);

      .cursor-slider-controls {
        position: relative;
        opacity: 1;
        transition: all ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};

        &:before,
        &:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-right: 5px solid ${Theme.Color.Primary};
          top: 50%;
          opacity: 1;
          transition: all ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};
        }

        &:before {
          opacity: 1;
          transform: translate(-500%, -50%);
        }

        &:after {
          opacity: 1;
          transform: translate(450%, -50%) rotate(180deg);
        }
      }
    }

    &.active {
      .cursor-border {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 1;
        filter: blur(0px);
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    display: none;
  }
`;

export const CursorPoint = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  mix-blend-mode: exclusion;

  .cursor-point {
    /* width: 10px;
    height: 10px;
    background: ${Theme.Color.Primary}; */
    transform: translate(-50%, -50%) scale(1);
    transition: all ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};
    position: relative;

    &:before, &:after {
      content: "";
      position: absolute;
      width: ${Root.BorderSize};
      height: ${Root.Size};
      background: ${Theme.Color.Primary};
      top: 50%;
      left: 50%;
      transition: all ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};
      opacity: 1;
    }

    &:before {
      transform: translate(-50%, -50%);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(90deg);
    }

    /* &.link {
      height: 2px;
      width: 40px;

      &:before {
        opacity: 1;
      }
    } */
  }

  &.active {
    .cursor-point {

      &.link {
        height: 1px;
        width: 40px;
        transform: translate(-50%, -50%) scale(2);
      }
    }
  }
`;
