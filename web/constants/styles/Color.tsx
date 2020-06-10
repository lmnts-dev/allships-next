// Imports
//////////////////////////////////////////////////////////////////////

import { createGlobalStyle } from "styled-components";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name Color
 * @description This is the sitewide palette.
 *
 */
export const Color = {
  // Core Colors
  Primary: "var(--primaryColor)",
  Secondary: "var(--secondaryColor)",
  Background: "var(--bgColor)",
  Dialog: "var(--dialogColor)",
  Text: "var(--textColor)",

  // Grayscale Palette
  Black: "#000000",
  Nightsky: "#151313",
  Warmsky: "#34281D",
  Gravel: "#4E4135",
  Slate: "#928070",
  Tan: "#C4AC97",
  Gray: "#DAC9BA",
  Blush: "#F6E7D9",
  Cream: "#FFF6EE",
  White: "#FFFFFF",

  // Primary Palette
  HackerGold: "#EBD048",
  UltraRed: "#E93567",

  // Warm Palette
  Clay: "#A33609",
  Nova: "#E24809",
  Sunlight: "#E9A200",
  Sunset: "#ED9158",

  // Cool Palette
  Galaxy: "#09004B",
  Deepsea: "#002F9E",
  Ocean: "#269FE2",
  Sky: "#7AC0E6",
  Dino: "#23023B",
  Eggplant: "#520589",
  Lilac: "#874BB4",

  // Feedback Palette
  Warning: "#FC6376",
  Success: "#40DA33",
};

export const Palette = createGlobalStyle`
  body {
    --primaryColor: ${Color.UltraRed};
    --secondaryColor: ${Color.HackerGold};
    --bgColor: ${Color.HackerGold};
    --dialogColor: ${Color.Black};
    --textColor: ${Color.UltraRed};

    color: ${Color.Text};
    background-color: ${Color.Background};

    /* Scrollbars */
    scrollbar-color: ${Color.Primary} ${Color.Dialog};
    scrollbar-width: auto;
  }

  *::-webkit-scrollbar {
    width: 25px;
  }

  *::-webkit-scrollbar-track {
    background: ${Color.Dialog};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${Color.Primary} ;
    border-radius: 0px;
    border: 3px solid ${Color.Dialog};
  }


  ::-moz-selection { background: ${Color.Primary}; color: ${Color.Black} }
  ::selection { background: ${Color.Primary}; color: ${Color.Black} }
`;

//////////////////////////////////////////////////////////////////////
// End Component
