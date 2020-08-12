// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
// Blocks

// Begin Styles
// __________________________________________________________________________________________

type Props = {
  Color?: string;
};

/**
 *
 * @name IconStyle
 * @description Icon component styles.
 * @param Color?: string : Add an option color or fill to the icon. Defaults to `Theme.Color.Black`.
 *
 */
const IconStyle = styled.span<Props>`
  font-size: ${Root.IconSize};
  line-height: 0;
  height: ${Root.IconSize};
  width: ${Root.IconSize};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  color: ${(props) => (props.Color ? props.Color : Theme.Color.Black)};

  svg {
    fill: ${(props) => (props.Color ? props.Color : Theme.Color.Black)};
  }
`;

export default IconStyle;
