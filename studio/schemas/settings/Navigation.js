/**
 *
 * @name Navigation Schema
 * @author Peter Laxalt
 * @description Site Navigation Data Model
 *
 */

import { ThemeIconIllustrationDropdown } from "../scaffold/Theme";

// __________________________________________________________________________________________

export const NavigationRegistry = {
  name: "navigation",
  title: "Navigation",
  // __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  type: "document",
};

export const Navigation = {
  ...NavigationRegistry,
  fields: [
    {
      title: "Launcher Link List (Extra Links)",
      name: "link_list",
      type: "array",
      description: "These show in the launcher dialog that aren't launcher commands.",
      of: [
        {
          title: "Link",
          name: "link",
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "href",
              title: "Enter slug",
              description: "I.e. '/agency'. This is the end of the link after allships.co including the '/'.",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },

    {
      title: "Footer Link List (Extra Links)",
      name: "footer_link_list",
      type: "array",
      description: "These show in the footer above the launcher commands.",
      of: [
        {
          title: "Link",
          name: "link",
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "href",
              title: "Enter slug",
              description: "I.e. '/agency'. This is the end of the link after allships.co including the '/'.",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },

    {
      title: "Navigation CTA",
      name: "nav_cta",
      type: "object",
      description: "This shows in the navigation bar next to the menu button. It's hidden on mobile so be sure to include it in the linklist above.",
      fields: [
        {
          title: "Link",
          name: "link",
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "href",
              title: "Enter slug",
              description: "I.e. '/agency'. This is the end of the link after allships.co including the '/'.",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};

// __________________________________________________________________________________________
