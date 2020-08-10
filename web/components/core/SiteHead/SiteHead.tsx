/**
 *
 * Head.js
 * @author Peter Laxalt
 * @description The website <head>.
 *
 */

// Core
import Head from "next/head";

// Begin Component
// __________________________________________________________________________________________

let siteTitle = "ALLSHIPS";
let baseUrl = "https://allships.co";
let description = "A Creative Community";
let keywords = "podcasts, creative, resources, interview, creativity";

export const SiteHead = ({ title = siteTitle + " | " + description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Basic page needs */}
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      {/* Opengraph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/og.gif`} />
      <meta property="og:image:width" content="596" />
      <meta property="og:image:height" content="328" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:domain"
        // @ts-ignore
        value={baseUrl}
      />
      <meta
        name="twitter:title"
        // @ts-ignore
        value={`${title}`}
      />
      <meta
        name="twitter:description"
        // @ts-ignore
        value={description}
      />
      <meta name="twitter:image" content={`${baseUrl}/og.gif`} />
      <meta
        name="twitter:url"
        // @ts-ignore
        value={baseUrl}
      />

      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffc40d" />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="theme-color" content="#ffc40d" />
    </Head>
  );
};
