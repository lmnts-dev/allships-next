// GrainCover Styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Animations
import { Grain } from "../../../constants/styles/Animation";

// Begin Styles
//////////////////////////////////////////////////////////////////////


const GrainCoverStyle = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
  display: flex;
  z-index: 999;
  mix-blend-mode: multiply;

  .grain-cover-inner {
    width: 1000vw;
    height: 1000vh;
    animation: grain 8s steps(10) infinite;
    background-image: url('noise.png');
    animation: ${Grain} 8s steps(10) infinite;
  }
`;

export default GrainCoverStyle;
