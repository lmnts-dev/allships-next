/**
 *
 * Navigation.js
 * @author Peter Laxalt
 * @description The website Navigation.
 *
 */

// Core
import React from "react";

// Components
import LazyImage from "../../../utils/lazyImage";

// Styles
import { FrameStyle, EmbellishStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Frame = ({ shouldFocus }) => {
  return (
    // @ts-ignore
    <>
      <FrameStyle shouldFocus={shouldFocus} className="frame">
        <span className="frame-left" />
        <span className="frame-right" />
        <span className="frame-bottom" />
        <span className="frame-top" />
      </FrameStyle>
      <EmbellishStyle>
        <span className="embellish embellish-top-left">
          <LazyImage src="/nexus.png" alt="ALLSHIPS" />
        </span>
        <span className="embellish embellish-top-right">
          <LazyImage src="/nexus.png" alt="ALLSHIPS" />
        </span>
        <span className="embellish embellish-bottom-right">
          <LazyImage src="/nexus.png" alt="ALLSHIPS" />
        </span>
        <span className="embellish embellish-bottom-left">
          <LazyImage src="/nexus.png" alt="ALLSHIPS" />
        </span>
      </EmbellishStyle>
    </>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
