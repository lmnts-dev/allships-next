// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name ArticleTextStyle
 *
 */
export const ArticleTextStyle = styled.article`
  padding: calc(${Root.Size});

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    padding: calc(${Root.Size} * 1);
  }
`;
