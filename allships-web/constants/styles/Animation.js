/**
 *
 * styles/Animation.js
 * @author Peter Laxalt
 * @description The website animations.
 *
 */

// Core
import { keyframes } from "styled-components";
import styled from "styled-components";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Blink = keyframes`
  to {
    visibility: hidden;
  }
`;
