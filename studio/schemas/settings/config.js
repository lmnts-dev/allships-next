/**
 *
 * @name Config Schema
 * @author Peter Laxalt
 * @description Site Config Data Model
 *
 */

// __________________________________________________________________________________________

export const ConfigRegistry = {
  name: "config",
  title: "🤖 Settings",
  type: "document",
};

export const Config = {
  ...ConfigRegistry,
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
    },
    {
      name: "description",
      title: "Site Description (SEO Only)",
      type: "string",
    },
    {
      name: "location",
      title: "Site Location (eg 'New York City, NY')",
      type: "string",
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
  ],
};

// __________________________________________________________________________________________
