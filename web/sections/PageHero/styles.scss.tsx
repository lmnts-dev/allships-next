// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";

// Animations

// Begin Styles
// __________________________________________________________________________________________

/**
 * 
 * @name PageHeroStyle
 * 
 */
export const PageHeroStyle = styled.div`
  width: 100%;
  margin: 0 auto;

  .page-hero-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: ${Root.Size};

    img {
      padding-bottom: calc(${Root.Size} / 2);
      width: 100%;

      @media (max-width: ${Theme.Base.Media.Width.Sm}) {
        padding-bottom: calc(${Root.Size} / 4);
        width: 90%;
        margin: 0 auto;
      }
    }

    p {
      padding-bottom: ${Root.Size};
      font-size: 2.5rem;

      @media (max-width: ${Theme.Base.Media.Width.Sm}) {
        padding-bottom: calc(${Root.Size} / 4);
        font-size: 1.5rem;
      }
    }

    h1 {
      color: ${Theme.Color.Dialog};
    }
  }
`;
