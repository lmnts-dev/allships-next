// Core
import React from "react";

// Styles
import { FrameStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name Frame
 * @author Peter Laxalt
 * @description Add the website Frame to a page.
 *
 */
export const Frame: React.FunctionComponent = () => {
  return (
    <FrameStyle className="frame">
      <span className="frame-left" />
      <span className="frame-right" />
      <span className="frame-bottom" />
      <span className="frame-top" />
    </FrameStyle>
  );
};

// End Component
// __________________________________________________________________________________________
