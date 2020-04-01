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
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
// import { Root } from "../../constants/Root";

// Begin Interface
//////////////////////////////////////////////////////////////////////

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const CursorStyle = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  mix-blend-mode: exclusion;
  transition: all 0.25s ease-out;
  display: none;

  .cursor-border {
    border-radius: 50%;
    border: 1px solid white;
    width: 80px;
    height: 80px;
    opacity: 1;
    transition: all 0.25s ease-out;
    transform: translate(-50%, -50%);
    filter: blur(0px);
  }

  &.active {
    .cursor-border {
      width: 400px;
      height: 400px;
      opacity: 0;
      filter: blur(5px);
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    display: none;
  }
`;

export const CursorPoint = styled.div`
  /* z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  mix-blend-mode: exclusion;

  .cursor-point {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    transform: translate(-50%, -50%) scale(1);
    transition: all 0.25s ease-out;
  }

  &.active {
    .cursor-point {
      transform: translate(-50%, -50%) scale(3);
    }
  } */
`;
