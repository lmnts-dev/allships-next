/**
 *
 * @name ListingsTallFormat Section
 * @author Peter Laxalt
 * @description Simple ListingsTallFormat Schema
 * @requires /web/sections/ListingsTallFormat
 *
 */

// __________________________________________________________________________________________

export default {
  title: "Listings: Tall Format",
  name: "listings_tall_format",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Section Name",
      description: "Purely for organization - this does not display anywhere.",
      type: "string",
    },
    {
      name: "listings",
      title: "Listings",
      description: "Content Listings",
      type: "array",
      of: [
        {
          name: "listing",
          title: "Listing",
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "slug", type: "string", title: "Slug" },
            {
              name: "blurbs",
              type: "array",
              title: "Blurbs",
              of: [
                {
                  name: "blurb",
                  type: "object",
                  fields: [
                    { name: "headline", type: "string", title: "Headline" },
                    { name: "body", type: "string", title: "Body" },
                    {
                      name: "cta",
                      title: "Show CTA to section?",
                      description: "Optional.",
                      type: "boolean",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
