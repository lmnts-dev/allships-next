/**
 *
 * @name studio/utils/resolveProductionUrl.js
 * @author Peter Laxalt
 * @description Resolves URLs for previewing content.
 */

// Imports
// __________________________________________________________________________________________

import siteSettings from "../config/siteSettings";

// Begin Component
// __________________________________________________________________________________________

export default function resolveProductionUrl(document) {
  return `${siteSettings.baseUrl}/api/${siteSettings.previewApiRoute}?secret=${
    siteSettings.previewSecret
  }&slug=/${document._type}/${
    document.slug.current
  }`;
}
