/**
 *
 * @name api/preview.ts
 * @author Peter Laxalt
 * @description Enables preview mode cookies and redirects to a given slug.
 * @example localhost:3000/api/preview?secret=<SECRET_TOKEN>&slug=</path/to/preview/data>
 *
 */

// Imports
// __________________________________________________________________________________________

import { NextApiRequest, NextApiResponse } from "next";

// Begin Component
// __________________________________________________________________________________________

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({
      message: "🚫 Invalid token: " + req.query.secret,
      slug: "🚫 Slug: " + req.query.slug,
    });
  } else {
    res.setHeader("Content-Type", "application/json");

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({});

    // Redirect to the path from the fetched post
    // @TODO: We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    res.writeHead(307, { Location: req.query.slug });

    res.end();

    // return res.status(401).json({
    //   message: "✅ Secret Valid: " + req.query.secret,
    //   slug: "✅ Slug Valid: " + req.query.slug,
    // });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // const post = await getPreviewPostBySlug(req.query.slug);

  // If the slug doesn't exist prevent preview mode from being enabled
  // if (!post) {
  //   return res.status(401).json({ message: "Invalid slug" });
  // }
}
