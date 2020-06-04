/**
 *
 * @name Theme
 * @author Peter Laxalt
 * @description
 * The default Theme scaffold.
 *
 */

// __________________________________________________________________________________________

export const Theme = [
  {
    name: "theme",
    title: "Theme",
    type: "object",
    fields: [
      { name: "foreground", title: "Foreground", type: "color" },
      { name: "background", title: "Background", type: "color" },
      { name: "selection", title: "Selection", type: "color" },
      { name: "blendMode", title: "Blend Mode", type: "string" },
    ],
  },
];
