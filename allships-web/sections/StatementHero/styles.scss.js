/**
 *
 * Navigation.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website Navigation Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
// import { Root } from "../../constants/Root";

// Utility Functions
import { hexToRGB } from "../../utils/hexToRGB";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const HeroStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  h1 {
    padding-bottom: 900px;
    font-size: 10.85vw;
    letter-spacing: -5px;
    padding-top: 80px;
    font-weight: 500;
  }
`;
