
// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";

// Helpers
import { hexToRGB } from "../../utils/hexToRGB";

// Begin Styles
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name SectionBreakStyle
 *
 */
export const SectionBreakStyle = styled.section`
  padding: calc(${Root.Size} * 2) 0;
  position: relative;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: ${hexToRGB(Theme.Color.White, 0.15)};
    height: 1px;
  }

  &.section-break-high-contrast {
    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background: ${hexToRGB(Theme.Color.White, 1)};
      height: 1px;
    }
  }
`;
