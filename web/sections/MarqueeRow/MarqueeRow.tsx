// Core
import React from "react";

// Styles
import { MarqueeRowStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_MarqueeRow = {
  schema: {
    strings?: string[];
    style: string;
  };
};

/**
 *
 * @name MarqueeRow
 * @author Peter Laxalt
 * @description Marquee rotating through items.
 * @requires /studio/sections/MarqueeRow
 *
 */
export const MarqueeRow: React.FunctionComponent<LMNTS_Section_MarqueeRow> = ({
  schema,
}) => {
  let { strings, style } = schema;

  if (strings) {
    return (
      <MarqueeRowStyle
        className={`section section-marquee section-marquee-style-${style}`}
      >
        <div className="section-marquee-container">
          <ul>
            {strings
              ? strings.map((string: string, idx: any) => {
                  return (
                    <li key={idx} className={`item-${idx}`}>
                      <span>{string}</span>
                      <figure />
                    </li>
                  );
                })
              : false}
          </ul>
          <ul>
            {strings
              ? strings.map((string: string, idx: any) => {
                  return (
                    <li key={idx} className={`item-${idx}`}>
                      <span>{string}</span>
                      <figure />
                    </li>
                  );
                })
              : false}
          </ul>
        </div>
      </MarqueeRowStyle>
    );
  } else {
    console.log("🚫 Strings not provided to Section: MarqueeRow");
    return null;
  }
};

// End Component
// __________________________________________________________________________________________
