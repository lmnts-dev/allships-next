// Core
import React from "react";

// Styles
import { SectionLoopStyle } from "./styles.scss";

// Components
// -- Core
import {
  SectionBreak,
  LMNTS_Section_SectionBreak,
} from "../../../sections/SectionBreak";
import { GridRow, LMNTS_Section_GridRow } from "../../../sections/GridRow";
import {
  CenteredText,
  LMNTS_Section_CenteredText,
} from "../../../sections/CenteredText";
import {
  FullWidthImage,
  LMNTS_Section_FullWidthImage,
} from "../../../sections/FullWidthImage";
import {
  StickySection,
  LMNTS_Section_StickySection,
} from "../../../sections/StickySection";
import { Headline, LMNTS_Section_Headline } from "../../../sections/Headline";
import {
  ColumnContent,
  LMNTS_Section_ColumnContent,
} from "../../../sections/ColumnContent";
import {
  MarqueeRow,
  LMNTS_Section_MarqueeRow,
} from "../../../sections/MarqueeRow";
import {
  LMNTS_Section_ArticleText,
  ArticleText,
} from "../../../sections/ArticleText";

// Component Typings
// __________________________________________________________________________________________

export type LMNTS_SectionLoop = {
  content: (
    | LMNTS_Section_CenteredText
    | LMNTS_Section_ColumnContent
    | LMNTS_Section_GridRow
    | LMNTS_Section_Headline
    | LMNTS_Section_MarqueeRow
    | LMNTS_Section_SectionBreak
    | LMNTS_Section_FullWidthImage
    | LMNTS_Section_StickySection
    | LMNTS_Section_ArticleText
  )[];
};

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name SectionLoop
 * @author Peter Laxalt
 * @description The loop to display section components.
 * @requires studio/scaffold/Sections
 *
 */
export const SectionLoop: React.FunctionComponent<LMNTS_SectionLoop> = ({
  content,
}) => {
  return (
    <SectionLoopStyle className="project-sections">
      {content
        ? content.map((schema: any, idx: number) => {
            switch (schema._type) {
              /**
               *
               * Generic
               *
               */
              case "article_text":
                return <ArticleText schema={schema} key={idx} />;

              case "centered_text":
                return <CenteredText schema={schema} key={idx} />;

              case "column_content":
                return <ColumnContent schema={schema} key={idx} />;

              case "fullwidth_image":
                return <FullWidthImage schema={schema} key={idx} />;

              case "grid_row":
                return <GridRow schema={schema} key={idx} />;

              case "headline":
                return <Headline schema={schema} key={idx} />;

              case "marquee_row":
                return <MarqueeRow schema={schema} key={idx} />;

              case "sticky_section":
                return <StickySection schema={schema} key={idx} />;

              case "section_break":
                return <SectionBreak schema={schema} key={idx} />;

              /**
               *
               * Default
               *
               */
              default:
                return console.log(
                  "🧸 SectionLoop: Section '" +
                    schema._type +
                    "' does not exist. ID: " +
                    idx
                );
            }
          })
        : false}
    </SectionLoopStyle>
  );
};

// End Component
// __________________________________________________________________________________________
