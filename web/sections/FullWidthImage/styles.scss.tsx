// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";
import { CssUtils } from "../../constants/styles/CssUtils";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name FullWidthImageStyle
 *
 */
export const FullWidthImageStyle = styled.section`
  position: relative;
  background: ${Theme.Color.Primary};
  width: calc(100% + (${Root.Grid.Gutter.Left} + ${Root.Grid.Gutter.Right}));
  padding-bottom: 59.65%;
  overflow: hidden;
  margin-left: calc(${Root.Grid.Gutter.Left} * -1);
  margin-right: calc(${Root.Grid.Gutter.Right} * -1);
  ${CssUtils.ShowLoadingIndicator()}

  img {
    ${CssUtils.ObjectFit()}
    z-index: 15;
  }

  /* Section Kerning */
  + .section-centered-text {
    padding-top: calc(${Root.Size} * 2);
  }
`;
