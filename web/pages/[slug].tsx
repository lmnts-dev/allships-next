// Core
import React from "react";

// Components
import { SiteHead } from "../components/core/SiteHead";

// Types
import { GetStaticProps, GetStaticPaths } from "next";
import {
  LMNTS_AppData,
  LMNTS_Sanity_Article,
  LMNTS_Sanity_Page,
} from "../constants/types";

// Utilities
import { QueryUtils, Queries } from "../constants/Queries";
import { SectionLoop } from "../components/core/SectionLoop";
import { urlFor } from "../utils/urlFor";
import { PostBodyStyle } from "../components/core/PostBody/styles.scss";

// Component Typing
// __________________________________________________________________________________________

export type LMNTS_Dynamic_Page = LMNTS_AppData & {
  _document: LMNTS_Sanity_Page;
  previewMode: boolean;
};

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 * @description The website Dynamic Page Template.
 *
 */
const DynamicPage: React.FunctionComponent<LMNTS_Dynamic_Page> = ({
  previewMode,
  _document,
}) => {
  // Check for preview mode
  if (previewMode) {
    console.log("👀 Preview mode enabled");
  }

  console.log(_document);

  let { content } = _document;

  return (
    <>
      <SiteHead
        title={`${previewMode ? "👀 Preview Mode: " : ""}${
          _document.title
        } | ALLSHIPS`}
        opengraph={
          _document.opengraph && _document.opengraph.image
            ? urlFor(_document.opengraph.image).width(700).auto("format").url()
            : undefined
        }
      />
      {/* ___________________________________________ */}
      {/* Section Loop  */}
      <PostBodyStyle className="pseudo-post">
        <article>
          <SectionLoop content={content} />
        </article>
      </PostBodyStyle>

      {/* ___________________________________________ */}
      {/* Preview Mode  */}
      {previewMode ? (
        <a
          href={`/api/exit-preview`}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            background: "red",
            color: "white",
            padding: 20,
            fontWeight: "bold",
            zIndex: 999999999,
            textTransform: "uppercase",
          }}
        >
          Close preview mode
        </a>
      ) : null}
    </>
  );
};

export default DynamicPage;

/**
 *
 * @name getStaticPaths
 * @description
 * This function gets called at build time on server-side.
 * It won't be called on client-side, so you can even do
 * direct database queries. See the "Technical details" section.
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 *
 */
export const getStaticPaths: GetStaticPaths = async () => {
  let allPages = await QueryUtils.getSanityClient(false).fetch(
    Queries.AllPages()
  );

  let allPagePaths = allPages.map((item: LMNTS_Sanity_Article) => ({
    params: {
      slug: item.slug.current,
    },
  }));

  console.log("🤠 Loading static paths...");
  return { paths: allPagePaths, fallback: false };
};

/**
 *
 * @name getStaticProps
 * @description
 * This function gets called at build time on server-side.
 * It won't be called on client-side, so you can even do
 * direct database queries. See the "Technical details" section.
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 *
 */
export const getStaticProps: GetStaticProps = async (context) => {
  let currentSlug = context.params ? context.params.slug : "";

  let appData = await QueryUtils.initAppData(context.preview ? true : false);
  let _document = await QueryUtils.getSanityClient(
    context.preview ? true : false
  ).fetch(Queries.CurrentPage(), {
    slug: currentSlug,
  });

  return {
    props: {
      ...appData.props,
      _document: _document,
      previewMode: context.preview ? true : false,
    },
  };
};
