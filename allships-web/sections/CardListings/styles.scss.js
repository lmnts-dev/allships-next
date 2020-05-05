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
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;

  .content-card {
    width: 25%;
  }
`;

export default CardListingsStyle;
