// Core
import React from "react";

// Components
import { InnerGrid } from "../components/core/InnerGrid";
import { SiteHead } from "../components/core/SiteHead";

// Sections
import { PostBody } from "../sections/PostBody";

// Types
import { GetStaticProps } from "next";
import { LMNTS_AppData } from "../constants/types";

// Utilities
import { QueryUtils } from "../constants/Queries";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 * @description The website homepage.
 *
 */
const PostTemplate: React.FunctionComponent<LMNTS_AppData> = ({}) => {
  return (
    <InnerGrid startBelowNav={true}>
      <SiteHead title="ALLSHIPS | A Creative Coalition." />
      <PostBody />
    </InnerGrid>
  );
};

export default PostTemplate;

/**
 *
 * @name Server Rendered Data
 * @author Peter Francis Laxalt
 * @description Try to do as many data-specific tasks here as possible.
 *
 */
export const getStaticProps: GetStaticProps = async () => {
  return await QueryUtils.initAppData();
};
