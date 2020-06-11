/**
 *
 * ReadingWidthGrid/styles.scss.js
 * @author Peter Laxalt
 * @description ReadingWidthGrid styles.
 *
 */

// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";

// Begin Styles
// __________________________________________________________________________________________

type Props = {
  startBelowNav?: boolean;
};

export const ReadingWidthGridStyle = styled.div<Props>`
  max-width: ${Theme.Base.Grid.ReadingWidth};
  width: 100%;
  margin: 0 auto;
`;
