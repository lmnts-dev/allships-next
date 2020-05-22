// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Begin Styles
//////////////////////////////////////////////////////////////////////

type Props = {
  shouldFocus?: boolean;
};

/**
 *
 * @name Frame
 * @author Peter Laxalt
 *
 */

export const FrameStyle = styled.div<Props>`
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
    transition: transform ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};
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

export const EmbellishStyle = styled.div`
  /* Embellishments */
  .embellish {
    z-index: 100;
    position: fixed;
    width: var(--embellishSize);
    height: var(--embellishSize);
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      display: none;
    }

    img {
      max-width: 100%;
    }

    &.embellish-top-left {
      left: var(--embellishOffset);
      top: calc(
        var(--embellishOffset) + (${Root.Nav.Size} + ${Root.BorderSize})
      );
    }

    &.embellish-top-right {
      right: var(--embellishOffset);
      top: calc(
        var(--embellishOffset) + (${Root.Nav.Size} + ${Root.BorderSize})
      );
    }

    &.embellish-bottom-left {
      left: var(--embellishOffset);
      bottom: var(--embellishOffset);
    }

    &.embellish-bottom-right {
      right: var(--embellishOffset);
      bottom: var(--embellishOffset);
    }
  }
`;
