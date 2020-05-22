// Core
import React from "react";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * Icons/Custom/Arrow.tsx
 * @author Peter Laxalt
 * @description Arrow icon.
 *
 */
const Arrow: React.FunctionComponent = () => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    version="1.1"
    className="icon"
  >
    <g id="arrow-back-group">
      <g id="arrow-back"></g>
      <polygon
        id="arrow-back-el"
        points="16 7 3.83 7 9.42 1.41 8 0 0 8 8 16 9.41 14.59 3.83 9 16 9"
      ></polygon>
    </g>
  </svg>
);

export default Arrow;
