/**
 *
 * @name api/exit-preview.ts
 * @author Peter Laxalt
 * @description Clears preview mode cookies.
 * @example localhost:3000/api/exit-preview
 */

// Imports
// __________________________________________________________________________________________

import { NextApiRequest, NextApiResponse } from "next";

// Begin Component
// __________________________________________________________________________________________

export default async function exit(req: NextApiRequest, res: NextApiResponse) {
  req;

  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData();

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: "/?fromPreviewMode=yerr" });
  res.end();
}
