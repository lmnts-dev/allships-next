// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name Frame
 * @author Peter Laxalt
 *
 */

export const FrameStyle = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 700;
  will-change: transform;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  /* Frame Borders */
  .frame-left,
  .frame-right,
  .frame-bottom,
  .frame-top {
    background: ${Theme.Color.Primary};
    transition: transform ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};
    pointer-events: none;
    will-change: transform;
    backface-visibility: hidden;
  }

  .frame-left,
  .frame-right {
    position: fixed;
    width: ${Theme.Base.Grid.SiteFrameWidth};
    top: 0px;
    bottom: 0px;
  }

  .frame-left {
    left: 0px;
  }

  .frame-right {
    right: 0px;
  }

  .frame-top,
  .frame-bottom {
    position: fixed;
    height: ${Theme.Base.Grid.SiteFrameWidth};
    left: 0px;
    right: 0px;
  }

  .frame-top {
    top: 0px;
  }

  .frame-bottom {
    bottom: 0px;
  }
`;
