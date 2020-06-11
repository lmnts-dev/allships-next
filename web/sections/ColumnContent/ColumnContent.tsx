// Core
import React from "react";

// Styles
import { ColumnContentStyle } from "./styles.scss";
import { InnerGrid } from "../../components/core/InnerGrid";
import Link from "next/link";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_ColumnContent = {
  schema: {
    caption?: string;
    headline?: string;
    content?: {
      headline?: string;
      content?: string;
      cta?: string;
    }[];
    headlineStyle?: string;
    headlineSize?: string;
    contentHeadlineSize?: string;
    scrollDownLabel?: string;
  };
};

/**
 *
 * @name ColumnContent
 * @author Peter Laxalt
 * @description Simple component for column sectioned content.
 *
 */
export const ColumnContent: React.FunctionComponent<LMNTS_Section_ColumnContent> = ({
  schema,
}) => {
  let {
    caption,
    headline,
    content,
    headlineStyle,
    headlineSize,
    contentHeadlineSize,
    scrollDownLabel,
  } = schema;

  if (content) {
    return (
      <ColumnContentStyle className="section section-column-content">
        <InnerGrid>
          <div className="section-column-content-top">
            {caption ? (
              <span className="txt-caption add-knotch add-knotch-indent">
                {caption}
              </span>
            ) : (
              false
            )}
            <h2
              className={`${headlineStyle ? "style-" + headlineStyle : false} ${
                headlineSize ? "size-" + headlineSize : false
              }`}
            >
              {headline}
            </h2>
          </div>

          <div className="section-column-content-bottom">
            {content.map((col: any, idx: any) => {
              let { headline, content, cta } = col;

              return (
                <div className="col section-column-content-el" key={idx}>
                  <div className="col-inner section-column-content-el-inner">
                    <h4
                      className={`add-doodad add-doodad-indent ${
                        contentHeadlineSize
                          ? "size-" + contentHeadlineSize
                          : false
                      }`}
                    >
                      {headline}
                    </h4>
                    <p>{content}</p>
                    {cta ? (
                      <Link href={cta.href}>
                        <a className="btn add-knotch add-knotch-indent">
                          {cta.label}
                        </a>
                      </Link>
                    ) : (
                      false
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {scrollDownLabel ? (
            <span className="scroll-down">
              <span className="scroll-down-inner">{scrollDownLabel}</span>
            </span>
          ) : (
            false
          )}
        </InnerGrid>
      </ColumnContentStyle>
    );
  } else {
    console.log("🚫 Content not provided to Section: ColumnContent");
    return null;
  }
};

// End Component
// __________________________________________________________________________________________
