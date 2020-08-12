// Imports
// __________________________________________________________________________________________
import { Color } from "../styles/Color";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name Settings.js
 * @author Peter Laxalt
 * @description This is the sitewide information that is used throughout the entire
 * build of the site. This goes from SEO to headings.
 *
 */
export const Settings = {
  siteTitle:
    "ALLSHIPS",
  siteTitleShort: "ALLSHIPS",
  siteDescription: "A Creative Community",
  siteBaseKeywords:
    "podcasts, creative, resources, interview, creativity",
  siteUrl: "https://allships.co",
  themeColor: Color.Primary,
  secondaryColor: Color.Secondary,
  backgroundColor: Color.Background,
  pathPrefix: "/",
  logo: "src/assets/images/icon.png",
  logoLight: "src/assets/images/icon.png",
  logoDark: "src/assets/images/icon.png",
  social: {
    twitter: "ALLSHIPS",
    facebook: "ALLSHIPS",
    instagram: "ALLSHIPS",
    fbAppId: "ALLSHIPS",
  },
};
