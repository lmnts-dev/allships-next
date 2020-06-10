import { createGlobalStyle } from "styled-components";
import { Base } from "./Base";


/**
 * 
 * @name Font
 * This is the sitewide font reference.
 * 
 */
export const Font = {
  Body: `'VT323', monospace`,
  Code: `'VT323', monospace`,
  Header: `'VT323', monospace`,
  HeaderAlt: `'VT323', monospace`,
  // Header: `"Cera Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  // Body: `"Brown", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  // Code: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
  Size: {
    Sm: "1rem",
    Md: "1rem",
    Lg: "1rem",
    ViewWidth: {
      Sm: "6.8vw",
      Md: "5.2vw",
      Lg: "1.2vw"
    },
    ViewHeight: {
      Sm: "6.8vh",
      Md: "5.2vh",
      Lg: "2vh"
    }
  },
  Icon: {
    Size: {
      Sm: "8.5vw",
      Md: "8.5vw",
      Lg: "1.7vw"
    }
  }
};

// Global Type Styles
export const Typography = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

  /* Base Text Styles */
  body {
    --appBodyText: ${Font.Body};
    --appHeaderText: ${Font.Body};

    line-height: 1;
    font-size: 1rem;
    font-family: ${Font.Body};
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  /* Paragraph Styles */
  p {
    font-family: ${Font.Body};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.2px;
    padding-bottom: calc(var(--Size) / 3.5);

    &.lead {
      font-size: 1.4rem;
      @media (max-width: ${Base.Media.Width.Md + "px"}) {
        font-size: 1.2rem;
      }
    }
  }

  .p-sm {
    font-family: ${Font.Body};
    line-height: 1.2;
    font-size: 0.9rem;
    letter-spacing: -0.2px;
  }

  .p-lg {
    font-family: ${Font.Body};
    line-height: 1.4;
    font-size: 1.2rem;
    letter-spacing: -0.2px;
  }

  /* Header Styles */
  h1, h2, h3, h4, h5, h6, .headline {
    font-family: ${Font.Header};
    font-weight: 400;
    line-height: 1.1;
    padding: 0;
    margin: 0;
    letter-spacing: -0.2px;

    &.alt {
      font-family: ${Font.HeaderAlt};
    }
  }

  h1, .h1 {
    font-size: 6rem;
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 2rem;
    }
  }
  h2, .h2 {
    font-size: 3rem;
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 2rem;
    }
  }
  h3, .h3 {
    font-size: 2.5rem;
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 2rem;
    }
  }
  h4, .h4 {
    font-size: 2rem;
  }
  h5, .h5 {
    font-size: 1.75rem;
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1rem;
    }
  }
  h6, .h6 {
    font-size: 1.5rem;
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.1rem;
    }
  }

  .headline {
    font-size: 7.25rem;
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 4rem;
    }
    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      font-size: 3.5rem;
    }
  }

  h1, h2, h3, h4, h5, h6, p, .heading-padding { padding-bottom: calc(var(--Size) / 3.5); }
`;
