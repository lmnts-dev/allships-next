// Core
import React from "react";

// Styles
import { InnerGridStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

type Props = {
  children: any;
  startBelowNav?: boolean;
};

/**
 *
 * @name InnerGrid
 * @description A generic wrapper to make sure our content has consistent padding & gutters.
 * @param startBelowNav : boolean ? : Add padding to compensate for our Navigation Bar. Defaults to false.
 * @param children : ReactChildren : The elements to wrap element around.
 *
 */
export const InnerGrid: React.FunctionComponent<Props> = ({
  children,
  startBelowNav,
}) => {
  return (
    <InnerGridStyle className="inner-grid" startBelowNav={startBelowNav}>
      {children}
    </InnerGridStyle>
  );
};

// End Component
// __________________________________________________________________________________________
