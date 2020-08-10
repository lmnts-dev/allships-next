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
  static baseUrl = "https://allships-alpha.now.sh";
  static vercelProjectId = "allships";
  static baseUrlHook = "https://api.vercel.com/v1/integrations/deploy/QmUcSnSD2s4xbbwHGVBJFYXcaLegbYo9GQQaUYhCQD4vYD/gcnS6mZ3NN";
  static stagingUrl = "https://allships-staging.now.sh";
  static stagingUrlHook = "`https://api.vercel.com/v1/integrations/deploy/QmUcSnSD2s4xbbwHGVBJFYXcaLegbYo9GQQaUYhCQD4vYD/gcnS6mZ3NN";
}
