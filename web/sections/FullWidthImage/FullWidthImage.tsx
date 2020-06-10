// Core
import React from "react";

// Types
import { Sanity_ImageAsset } from "../../constants/types/Sanity";

// Styles
import { FullWidthImageStyle } from "./styles.scss";

// Components
import LazyImage from "../../utils/lazyImage";

// Helpers
import { urlFor } from "../../utils/urlFor";
import { calcAspectRatio } from "../../utils/calcAspectRatio";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type LMNTS_Section_ColumnContent = {
  schema: {
    image?: Sanity_ImageAsset;
    alt?: string;
  };
};

/**
 *
 * @name FullWidthImage
 * @author Peter Laxalt
 * @description Simple full width image breaking the grid.
 * @requires /studio/sections/FullWidthImage
 *
 */
export const FullWidthImage: React.FunctionComponent<LMNTS_Section_ColumnContent> = ({
  schema,
}) => {
  let { image, alt } = schema;

  if (image) {
    return (
      <FullWidthImageStyle
        className={`section section-fullwidth-image ${
          image.metadata
            ? image.metadata.hasAlpha
              ? "__hide-placeholder-bg"
              : false
            : false
        }`}
        data-aspect-ratio={`${
          image.metadata ? image.metadata.dimensions.aspectRatio : -1
        }`}
        style={
          image.metadata
            ? {
                paddingBottom: calcAspectRatio(image.metadata.dimensions),
              }
            : {}
        }
      >
        <LazyImage
          src={`${urlFor(image).width(2000).auto("format").url()}`}
          alt={alt}
        />
      </FullWidthImageStyle>
    );
  } else {
    console.log("🚫 Image not provided to Section: FullWidthImage");
    return null;
  }
};

// End Component
//////////////////////////////////////////////////////////////////////
