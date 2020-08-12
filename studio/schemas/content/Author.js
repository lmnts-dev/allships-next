/**
 *
 * @name Author Sanity.io Schema
 * @author Peter Laxalt
 * @description Site Author Data Model
 *
 */

// __________________________________________________________________________________________

export const AuthorRegistry = {
  name: "author",
  title: "Author",
  type: "document",
};

export const Author = {
  ...AuthorRegistry,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Job Title",
      name: "job_title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Author photo",
      name: "author_photo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Twitter",
      name: "twitter",
      type: "url",
    },
    {
      title: "Instagram",
      name: "instagram",
      type: "url",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Website",
      name: "web",
      type: "string",
    },
    {
      title: "Bio",
      name: "bio",
      type: "text",
      rows: 4,
    },
  ],
};

// __________________________________________________________________________________________
