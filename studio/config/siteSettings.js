/**
 *
 * @name studio/config/siteSettings.js
 * @author Peter Laxalt
 * @description Strings to use throughout the studio settings.
 */

// Begin Component
// __________________________________________________________________________________________

export default class siteSettings {
  static previewSecret = "89509"; // THIS HAS TO MATCH THE `SANITY_PREVIEW_SECRET` SET IN `.env.local` IN `/web`
  static previewApiRoute = "preview";
  // static baseUrl = "https://allships.co";
  static baseUrl = "http://localhost:3000";
}
