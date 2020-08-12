

// Core
import React from "react";

// Styles
import { CenteredTextStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_CenteredText = {
  schema: {
    content: string;
    author?: string;
    company?: string;
  };
};

/**
 *
 * @name CenteredText
 * @author Peter Laxalt
 * @description Simple centered text row.
 *
 */
export const CenteredText: React.FunctionComponent<LMNTS_Section_CenteredText> = ({
  schema,
}) => {
  let { content, author, company } = schema;

  return (
    <CenteredTextStyle className={`section section-centered-text`}>
      <blockquote>{content}</blockquote>
      {author ? <span className="author">{author}</span> : false}
      {company ? <span className="company">{company}</span> : false}
    </CenteredTextStyle>
  );
};

// End Component
// __________________________________________________________________________________________
