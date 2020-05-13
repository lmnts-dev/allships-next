/**
 *
 * Navigation.js
 * @author Peter Laxalt
 * @description The website Navigation.
 *
 */

// Core
import React from "react";

// Styles
import { InnerGridStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name InnerGrid
 * @description A generic wrapper to make sure our content has consistent padding & gutters.
 * @param startBelowNav : boolean ? : Add padding to compensate for our Navigation Bar. Defaults to false.
 * @param children : void : The elements to wrap element around.
 *
 */
export const InnerGrid = ({ children, startBelowNav }) => {
  return (
    <InnerGridStyle className="inner-grid" startBelowNav={startBelowNav}>
      {children}
    </InnerGridStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
