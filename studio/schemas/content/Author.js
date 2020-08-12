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
    },
    {
      title: "Job Title",
      name: "job_title",
      type: "string",
    },
    {
      title: "Author photo",
      name: "author_photo",
      type: "image",
      options: {
        hotspot: true,
      },
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
      lines: 4,
    },
  ],
};

// __________________________________________________________________________________________
