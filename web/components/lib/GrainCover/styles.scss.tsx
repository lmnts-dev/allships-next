// GrainCover Styles

// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Animations
import { Grain } from "../../../constants/styles/Animation";

// Begin Styles
// __________________________________________________________________________________________


const GrainCoverStyle = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
  /* display: flex; */
  display: none;
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
