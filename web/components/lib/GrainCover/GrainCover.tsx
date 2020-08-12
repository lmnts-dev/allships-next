// Imports
// __________________________________________________________________________________________

// Core
import React from "react";
import GrainCoverStyle from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * GrainCover.js
 * @author Peter Laxalt
 * @description Our main launcher dialog.
 * @example Default: <GrainCover visible={true | false} />
 *
 */
export const GrainCover: React.FunctionComponent = () => {
  return (
    <GrainCoverStyle>
      <div className="grain-cover-inner" />
    </GrainCoverStyle>
  );
};
