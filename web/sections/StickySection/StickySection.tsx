// Core
import React from "react";

// Types
import { Sanity_ImageAsset } from "../../constants/types/Sanity";

// Styles
import { StickySectionStyle } from "./styles.scss";

// Utils
import { urlFor } from "../../utils/urlFor";
import { LazyImage } from "../../utils/lazyImage";
import { calcAspectRatio } from "../../utils/calcAspectRatio";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type LMNTS_Section_StickySection = {
  schema: {
    layout?: string;
    headline?: string;
    subheadline?: string;
    body?: string;
    images?: Sanity_ImageAsset[];
  };
};

/**
 *
 * @name StickySection
 * @author Peter Laxalt
 * @description A Sticky Section component.
 * @requires studio/sections/StickySection
 *
 */

export const StickySection: React.FunctionComponent<LMNTS_Section_StickySection> = ({
  schema,
}) => {
  let { layout, headline, subheadline, body, images } = schema;

  return (
    <StickySectionStyle
      className={`section section-sticky section-sticky-${
        layout ? (layout == "img_left" ? "left" : "right") : "right"
      }`}
    >
      <div className="section-sticky-col content">
        <div className="add-doodad add-doodad-indent section-sticky-col-inner">
          {headline ? <h3 className="io">{headline}</h3> : false}
          {subheadline ? (
            <h3 className="io subheadline">{subheadline}</h3>
          ) : (
            false
          )}
          {body ? <p className="io">{body}</p> : false}
        </div>
      </div>

      <div className="section-sticky-col img">
        <div className="section-sticky-col-inner">
          {images
            ? images.map((image: Sanity_ImageAsset, idx: number) => {
                return (
                  <div
                    className={`section-sticky-img-wrapper ${
                      image.metadata
                        ? image.metadata.hasAlpha
                          ? "__hide-placeholder-bg"
                          : false
                        : false
                    }`}
                    data-aspect-ratio={`${
                      image.metadata
                        ? image.metadata.dimensions.aspectRatio
                        : -1
                    }`}
                    style={
                      image.metadata.dimensions
                        ? {
                            paddingBottom: calcAspectRatio(
                              image.metadata.dimensions
                            ),
                          }
                        : {}
                    }
                    key={idx}
                  >
                    <LazyImage
                      src={`${urlFor(image).width(2000).auto("format").url()}`}
                      alt={headline + ": " + subheadline}
                      title={headline + ": " + subheadline}
                      aspectRatio={`${
                        image.metadata
                          ? image.metadata.dimensions.aspectRatio
                          : -1
                      }`}
                    />
                  </div>
                );
              })
            : false}
        </div>
      </div>
    </StickySectionStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
