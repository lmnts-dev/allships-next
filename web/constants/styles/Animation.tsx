// Core
import { keyframes } from "styled-components";

// Begin Component
// __________________________________________________________________________________________

export const Blink = keyframes`
  to {
    visibility: hidden;
  }
`;

export const Grain = keyframes`
  0%, 100% { transform: scale(1.5) translate(0, 0) }
  10% { transform: scale(1.5) translate(-5%, -10%) }
  20% { transform: scale(1.5) translate(-15%, 5%) }
  30% { transform: scale(1.5) translate(7%, -10%) }
  40% { transform: scale(1.5) translate(-5%, 10%) }
  50% { transform: scale(1.5) translate(-15%, 10%) }
  60% { transform: scale(1.5) translate(15%, 0%) }
  70% { transform: scale(1.5) translate(0%, 15%) }
  80% { transform: scale(1.5) translate(3%, 10%) }
  90% { transform: scale(1.5) translate(-10%, 10%) }
`;
