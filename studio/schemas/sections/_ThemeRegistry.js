/**
 *
 * @name Theme Registry
 * @author Peter Laxalt
 * @description
 * @requires web/Themes/ThemeLoop
 * This is where we register our Theme id's to show up
 * in the Sanity builder.
 *
 */

// __________________________________________________________________________________________

export const ThemeRegistry = [
  { name: "foreground", title: "Foreground", type: "color" },
  { name: "background", title: "Background", type: "color" },
  { name: "foregroundScroll", title: "ForegroundScroll", type: "color" },
  { name: "backgroundScroll", title: "BackgroundScroll", type: "color" },
  { name: "selection", title: "Selection", type: "color" },
  { name: "blendMode", title: "Blend Mode", type: "string",  },
];
