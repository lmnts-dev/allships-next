/**
 *
 * GrainCover.js
 * @author Peter Laxalt
 * @description Our main launcher dialog.
 * @example Default: <GrainCover visible={true | false} />
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";
import GrainCoverStyle from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const GrainCover = () => {
  return (
    <GrainCoverStyle>
      <div className="grain-cover-inner" />
    </GrainCoverStyle>
  );
};
