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

export const InnerGrid = (props) => {

  return (
    <InnerGridStyle className="inner-grid" startBelowNav={props.startBelowNav}>
      {props.children}
    </InnerGridStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
