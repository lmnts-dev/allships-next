/**
 *
 * calcAspectRatio.tsx
 * @author Peter Laxalt
 * @description Calculate a bottom padding to match an images aspect ratio.
 * @example 
 * {
 *   paddingBottom: calcAspectRatio(
 *     image.metadata.dimensions
 *   ),
 * }
 *
 */

export const calcAspectRatio = (dimensions: {
  width: number;
  height: number;
}) => {
  let height = dimensions.height;
  let width = dimensions.width;
  let aspectRatio = height / width;
  let aspectRatioCalculated = `calc(${aspectRatio} * 100%)`;

  return aspectRatioCalculated;
};
