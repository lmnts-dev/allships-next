// Root.js:
// This file is primarily used to create naming and can also be
// used to automate some math. Don't forget if you update the other
// style files to include the export down below here if you want to
// reference it conveniently in the Theme.js export.

// Usage:
// 1. First import the file.
// import { Root } from '../../../path/to/Root'
// 2. Use it in your SC: 'color: ${Root.Size}; or simply refer to the object and key when used in functions.'

import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

// Begin Component
//////////////////////////////////////////////////////////////////////

// Assign CSS Variables for automatic Media Queries.
export const Root = {
  // Core Base Measurement
  Size: "var(--Size)",

  ViewWidthFontSize: "var(--ViewWidthFontSize)",
  ViewHeightFontSize: "var(--ViewHeightFontSize)",
  IconSize: "var(--IconSize)",

  // Root Element Measurement
  Rem: "var(--REM)",

  // View Width (vw) Based Measurements
  ViewWidthPadding: "var(--ViewWidthPadding)",

  // Site Grid
  Site: {
    Width: "var(--SiteWidth)",
  },
  Nav: {
    Size: "var(--NavSize)",
  },
  Footer: {
    Size: "var(--FooterSize)",
  },

  Grid: {
    // Universal padding from the edge of the browser
    // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
    Gutter: {
      Top: "var(--GutterTop)",
      Right: "var(--GutterRight)",
      Bottom: "var(--GutterBottom)",
      Left: "var(--GutterLeft)",
    },

    Indent: {
      X: "var(--IndentX)",
      Y: "var(--IndentY)",
    },
  },

  // Buttons
  Button: {
    Size: "var(--ButtonSize)",
  },

  // Inputs
  Input: "var(--InputSize)",

  // Geometry
  Radius: "var(--Radius)",

  // Borders
  BorderSize: "var(--BorderSize)",

  // Dialogs
  DialogPaddingSize: "var(--DialogPaddingSize)",
};

// Responsive Measurements:
// We use these to avoid media queries all
// over the place where possible.

export const RootVariables = createGlobalStyle`
  :root {
    /* ----------------------------------- Large Width Viewports */

    /* --------------- Base Measurements*/
    
    /* -------- Base Measurement */
    --Size: ${Theme.Base.Size.Lg};

    /* -------- Font Sizes (Viewport) */
    --ViewWidthFontSize: ${Theme.Font.Size.ViewWidth.Lg};
    --ViewHeightFontSize: ${Theme.Font.Size.ViewHeight.Lg};
    --IconSize: ${Theme.Font.Icon.Size.Lg};

    /* -------- Root Element Measurement */
    --REM: ${Theme.Base.Rem.Lg};

    /* -------- View Width (vw) Based Measurements */
    --ViewWidthPadding: ${Theme.Base.ViewWidth.Padding.Lg};
    
    /* --------- Site Grid */
    --SiteWidth: ${Theme.Base.Grid.SiteWidth};
    --NavSize: ${Theme.Base.Grid.Nav.Size.Lg};
    --FooterSize: ${Theme.Base.Grid.Footer.Size.Lg};

    /* --- Gutters */
    --GutterTop: ${Theme.Base.Grid.Gutter.Lg.Top};
    --GutterRight: ${Theme.Base.Grid.Gutter.Lg.Right};
    --GutterBottom: ${Theme.Base.Grid.Gutter.Lg.Bottom};
    --GutterLeft: ${Theme.Base.Grid.Gutter.Lg.Left};

    /* --------- Buttons */
    --ButtonSize: ${Theme.Base.Button.Lg};

    /* --------- Inputs */
    --InputSize: ${Theme.Base.Input.Lg};

    /* --------- Geometry */
    --Radius: ${Theme.Base.Geometry.Radius};

    /* --------- Borders */
    --BorderSize: ${Theme.Base.Border.Size};

    /* --------- Dialogs */
    --DialogPaddingSize: ${Theme.Base.DialogPaddingSize.Lg};

    /* -------- Embellishments */
    --embellishOffset: calc(${Root.Size} * .5);
    --embellishSize: calc(${Root.Size});
    
    /* ----------------------------------- Medium Width Viewports */
    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      /* --------------- Base Measurements*/
    
        /* -------- Base Measurement */
        --Size: ${Theme.Base.Size.Md};

        /* -------- Font Sizes (Viewport) */
        --ViewWidthFontSize: ${Theme.Font.Size.ViewWidth.Md};
        --ViewHeightFontSize: ${Theme.Font.Size.ViewHeight.Md};
        --IconSize: ${Theme.Font.Icon.Size.Md};

        /* -------- Root Element Measurement */
        --REM: ${Theme.Base.Rem.Md};

        /* -------- View Width (vw) Based Measurements */
        --ViewWidthPadding: ${Theme.Base.ViewWidth.Padding.Md};

        /* --------- Site Grid */
        --SiteWidth: ${Theme.Base.Grid.SiteWidth};
        --NavSize: ${Theme.Base.Grid.Nav.Size.Md};
        --FooterSize: ${Theme.Base.Grid.Footer.Size.Md};

        /* --- Gutters */
        --GutterTop: ${Theme.Base.Grid.Gutter.Md.Top};
        --GutterRight: ${Theme.Base.Grid.Gutter.Md.Right};
        --GutterBottom: ${Theme.Base.Grid.Gutter.Md.Bottom};
        --GutterLeft: ${Theme.Base.Grid.Gutter.Md.Left};

        /* --------- Buttons */
        --ButtonSize: ${Theme.Base.Button.Md};

        /* --------- Inputs */
        --InputSize: ${Theme.Base.Input.Md};

        /* --------- Geometry */
        --Radius: ${Theme.Base.Geometry.Radius};

        /* --------- Borders */
        --BorderSize: ${Theme.Base.Border.Size};

        /* --------- Dialogs */
        --DialogPaddingSize: ${Theme.Base.DialogPaddingSize.Md};
    }

    /* ----------------------------------- Small Width Viewports */
    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      /* --------------- Base Measurements*/
    
        /* -------- Base Measurement */
        --Size: ${Theme.Base.Size.Sm};

        /* -------- Font Sizes (Viewport) */
        --ViewWidthFontSize: ${Theme.Font.Size.ViewWidth.Sm};
        --ViewHeightFontSize: ${Theme.Font.Size.ViewHeight.Sm};
        --IconSize: ${Theme.Font.Icon.Size.Sm};

        /* -------- Root Element Measurement */
        --Rem: ${Theme.Base.Rem.Sm};

        /* -------- View Width (vw) Based Measurements */
        --ViewWidthPadding: ${Theme.Base.ViewWidth.Padding.Sm};

        /* --------- Site Grid */
        --SiteWidth: ${Theme.Base.Grid.SiteWidth};
        --NavSize: ${Theme.Base.Grid.Nav.Size.Sm};
        --FooterSize: ${Theme.Base.Grid.Footer.Size.Sm};

        /* --- Gutters */
        --GutterTop: ${Theme.Base.Grid.Gutter.Sm.Top};
        --GutterRight: ${Theme.Base.Grid.Gutter.Sm.Right};
        --GutterBottom: ${Theme.Base.Grid.Gutter.Sm.Bottom};
        --GutterLeft: ${Theme.Base.Grid.Gutter.Sm.Left};

        /* --------- Buttons */
        --ButtonSize: ${Theme.Base.Button.Sm};

        /* --------- Inputs */
        --InputSize: ${Theme.Base.Input.Sm};

        /* --------- Geometry */
        --Radius: ${Theme.Base.Geometry.Radius};

        /* --------- Borders */
        --BorderSize: ${Theme.Base.Border.Size};

        /* --------- Dialogs */
        --DialogPaddingSize: ${Theme.Base.DialogPaddingSize.Sm};
    }
  }
`;

// End Component
//////////////////////////////////////////////////////////////////////
