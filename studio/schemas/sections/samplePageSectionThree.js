/**
 *
 * @name Sample Page Section
 * @author Peter Laxalt
 * @description
 * This is a boilerplate of a builder page section. T
 * The schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'samplePageSectionOne'
 *  }
 *
 */

// __________________________________________________________________________________________

export default {
  title: "Sample Builder Section Three",
  name: "samplePageSectionThree",
  type: "object",
  fields: [
    {
      name: "Image",
      title: "Image",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "alt",
      title: "Meta Description",
      type: "string"
    }
  ]
};
