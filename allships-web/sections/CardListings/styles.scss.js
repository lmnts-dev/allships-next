// CardListings Styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";

// Animations
import { Blink } from "../../constants/styles/Animation";

// Begin Styles
//////////////////////////////////////////////////////////////////////

const CardListingsStyle = styled.div`
  width: 100%;
  max-width: ${Theme.Base.Grid.ReadingWidth};
  margin: 0 auto;

  .card-listings-list {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-left: calc(var(--cardPadding) * -1);
    margin-right: calc(var(--cardPadding) * -1);
    width: calc(100% + (var(--cardPadding) * 2));

    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      margin-left: 0;
      margin-right: 0;
      width: 100%;
    }

    .content-card {
      width: 25%;

      @media (max-width: ${Theme.Base.Media.Width.Sm}) {
        width: 100%;
      }
    }
  }
`;

export default CardListingsStyle;
