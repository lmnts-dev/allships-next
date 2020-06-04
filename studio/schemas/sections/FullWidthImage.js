/**
 *
 * @name FullWidthImage Section
 * @author Peter Laxalt
 * @description
 * Simple FullWidthImage Schema
 * @requires /web/sections/FullWidthImage
 *
 */

// __________________________________________________________________________________________

export default {
  title: "Fullwidth Image",
  name: "fullwidth_image",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true, metadata: ["dimensions", "palette"] },
    },
    {
      name: "alt",
      title: "Meta Description",
      type: "string",
    },
  ],
};
