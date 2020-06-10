// Core
import React from "react";

// Styles
import { SectionLoopStyle } from "./styles.scss";
import { InnerGrid } from "../InnerGrid";

// Types

// Components
// -- Core
import { SectionBreak } from "../../../sections/SectionBreak";
import { GridRow } from "../../../sections/GridRow";
import { CenteredText } from "../../../sections/CenteredText";
import { FullWidthImage } from "../../../sections/FullWidthImage";
import { StickySection } from "../../../sections/StickySection";
import { Headline } from "../../../sections/Headline";
import { ColumnContent } from "../../../sections/ColumnContent";
import { MarqueeRow } from "../../../sections/MarqueeRow";

// Component Typings
//////////////////////////////////////////////////////////////////////

export type LMNTS_SectionLoopData = {};

type LMNTS_SectionLoop = {
  content: any;
  data?: LMNTS_SectionLoopData;
};

// Begin Component
//////////////////////////////////////////////////////////////////////

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
      <InnerGrid>
        {content
          ? content.map((schema: any, idx: number) => {
              switch (schema._type) {
                /**
                 *
                 * Generic
                 *
                 */
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
      </InnerGrid>
    </SectionLoopStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
