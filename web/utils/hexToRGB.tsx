/**
 *
 * hexToRGB.tsx
 * @author Peter Laxalt
 * @description Convert #HEXCODES to RGBA
 * @example hexToRGB('#FF0000', 0.5);
 *
 */

export const hexToRGB = (hex: string, alpha: number) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha !== undefined) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};
