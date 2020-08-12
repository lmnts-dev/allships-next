// Core
import React from "react";

// Components
import LazyImage from "../../../utils/lazyImage";

// Styles
import { EmbellishStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name AddEmbellishments
 * @author Peter Laxalt
 * @description Add embellishments in the corners of any page.
 *
 */

export const AddEmbellishments: React.FunctionComponent = () => {
  return (
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
  );
};

// End Component
// __________________________________________________________________________________________
