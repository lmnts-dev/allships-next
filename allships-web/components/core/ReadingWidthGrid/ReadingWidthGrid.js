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
import { ReadingWidthGridStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ReadingWidthGrid = (props) => {

  return (
    <ReadingWidthGridStyle className="inner-grid" startBelowNav={props.startBelowNav}>
      {props.children}
    </ReadingWidthGridStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
