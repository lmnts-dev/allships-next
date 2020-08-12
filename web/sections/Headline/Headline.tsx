// Core
import React from "react";

// Styles
import { HeadlineStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_Headline = {
  schema: {
    headline?: string;
    subheadline?: string;
    body?: string;
    layout: string;
    size?: string;
  };
};

/**
 *
 * @name Headline
 * @author Peter Laxalt
 * @description Simple Headline component.
 * @requires studio/sections/Headline
 *
 */
export const Headline: React.FunctionComponent<LMNTS_Section_Headline> = ({
  schema,
}) => {
  let { headline, subheadline, body, layout, size } = schema;

  return (
    <HeadlineStyle
      className={`section section-headline section-headline-layout-${layout} section-headline-size-${
        size ? size : "regular"
      }`}
    >
      <div className="section-headline-inner">
        <div className="section-headline-header">
          {headline ? <h3 className="io">{headline}</h3> : false}
          {subheadline ? (
            <h3 className="io subheadline">{subheadline}</h3>
          ) : (
            false
          )}
        </div>
        {body ? <p className="io">{body}</p> : false}
      </div>
    </HeadlineStyle>
  );
};

// End Component
// __________________________________________________________________________________________
