/**
 *
 * ReadingWidthGrid/styles.scss.js
 * @author Peter Laxalt
 * @description ReadingWidthGrid styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ReadingWidthGridStyle = styled.div`
  max-width: ${Theme.Base.Grid.ReadingWidth};
  width: 100%;
  margin: 0 auto;
`;
