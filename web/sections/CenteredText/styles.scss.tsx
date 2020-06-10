// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name CenteredTextStyle
 *
 */
export const CenteredTextStyle = styled.section`
  padding: calc(${Root.Size} * 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${Theme.Font.HeaderAlt};

  blockquote {
    font-size: 3rem;
    line-height: 1.2;
    text-align: center;
    width: 100%;
    max-width: 65vw;
    margin: 0 auto;
    padding: 0 0 ${Root.Size} 0;
  }

  .author,
  .company {
    font-size: 1.4rem;
  }

  .author {
    font-weight: 400;
    margin-bottom: calc(${Root.Size} * 0.25);
  }

  .company {
    font-weight: 200;
  }

  /* Section Kerning */

  + .section-break {
    padding-top: 0;
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    padding: calc(${Root.Size} * 2) calc(${Root.Size} / 2) !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: ${Theme.Font.HeaderAlt};

    blockquote {
      font-size: 1.5rem;
      line-height: 1.2;
      text-align: center;
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
      padding: 0 0 ${Root.Size} 0;
    }

    .author,
    .company {
      font-size: 1rem;
    }

    .author {
      font-weight: 400;
      margin-bottom: calc(${Root.Size} * 0.25);
    }

    .company {
      font-weight: 200;
    }

    /* Section Kerning */

    + .section-break {
      padding-top: 0;
    }
  }
`;
