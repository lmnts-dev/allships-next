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
import { FrameStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Frame = ({ shouldFocus }) => {
  return (
    // @ts-ignore
    <FrameStyle shouldFocus={shouldFocus} className="frame">
      <span className="frame-left" />
      <span className="frame-right" />
      <span className="frame-bottom" />
      <span className="frame-top" />
    </FrameStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
