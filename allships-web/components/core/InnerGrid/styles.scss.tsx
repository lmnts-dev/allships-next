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
  startBelowNav?: boolean;
};

/**
 *
 * @name InnerGrid
 * @author Peter Laxalt
 *
 */

export const InnerGridStyle = styled.div<Props>`
  max-width: ${Theme.Base.Grid.SiteWidth};
  width: 100%;
  margin: ${(props) =>
    props.startBelowNav !== true
      ? "0 auto"
      : "calc(" +
        Root.Nav.Size +
        " + " +
        Theme.Base.Grid.SiteFrameWidth +
        ")" +
        " auto 0 auto"};
  padding-left: calc(
    var(--embellishSize) +
      (var(--embellishOffset) - ${Theme.Base.Grid.SiteFrameWidth}) -
      ${Root.BorderSize}
  );
  padding-right: calc(
    var(--embellishSize) +
      (var(--embellishOffset) - ${Theme.Base.Grid.SiteFrameWidth}) -
      ${Root.BorderSize}
  );

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    padding-left: 0;
    padding-right: 0;
  }
`;
