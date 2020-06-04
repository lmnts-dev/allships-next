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

type ReadingWidthGridProps = {
  startBelowNav?: boolean;
};

export const ReadingWidthGrid: React.FunctionComponent<ReadingWidthGridProps> = ({
  startBelowNav,
  children,
}) => {
  return (
    <ReadingWidthGridStyle className="inner-grid" startBelowNav={startBelowNav}>
      {children}
    </ReadingWidthGridStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
