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
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const LayoutStyle = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 0 ${Root.Grid.Gutter.Right} ${Root.Grid.Gutter.Bottom} ${Root.Grid.Gutter.Left};
  background-color: ${Theme.Color.Background};
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: calc(${Root.Nav.Size} * -1);
    transition: background-color ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};
    background-color: ${Theme.Color.Background};
    /* background-color: red; */
    left: 0;
    right: 0;
    height: ${Root.Nav.Size};
  }

  /* &.main-wrapper {
    transition: background-color ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};
  } */
`;
