// Core
import React from "react";

// Styles
import { ArticleTextStyle } from "./styles.scss";

// Components
import BlockContent from "@sanity/block-content-to-react";
// Types
import { Sanity_BlockContent } from "../../constants/types/Sanity";
import { SanityOptions } from "../../clients";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type LMNTS_Section_ArticleText = {
  schema: {
    text_content: Sanity_BlockContent[];
  };
};

/**
 *
 * @name ArticleText
 * @author Peter Laxalt
 * @description Rich, portable text row.
 * @see https://www.sanity.io/docs/block-type
 *
 */
export const ArticleText: React.FunctionComponent<LMNTS_Section_ArticleText> = ({
  schema,
}) => {
  return (
    <ArticleTextStyle className={`section section-article-text`}>
      <BlockContent
        blocks={schema.text_content}
        projectId={SanityOptions.projectId}
        dataset={SanityOptions.dataset}
      />
    </ArticleTextStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
