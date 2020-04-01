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
import Draggable from "react-draggable";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const GrainCover = ({
  handleCommand,
  handleTextChange,
  handleAddItem,
  appState
}) => {
  return (
    <GrainCoverStyle>
      <div className="grain-cover-inner" />
    </GrainCoverStyle>
  );
};
