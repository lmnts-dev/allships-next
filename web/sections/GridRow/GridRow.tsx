// Core
import React from "react";

// Styles
import { GridRowStyle } from "./styles.scss";
import LazyImage from "../../utils/lazyImage";

// Helpers
import { urlFor } from "../../utils/urlFor";
import { calcAspectRatio } from "../../utils/calcAspectRatio";
import { Sanity_ImageAsset } from "../../constants/types/Sanity";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_GridRow = {
  schema: {
    items?: Sanity_ImageAsset[];
  };
};

/**
 *
 * @name GridRow
 * @author Peter Laxalt
 * @description Grid row for display items.
 * @requires studio/sections/GridRow
 *
 */
export const GridRow: React.FunctionComponent<LMNTS_Section_GridRow> = ({
  schema,
}) => {
  let { items } = schema;

  if (items) {
    return (
      // @ts-ignore
      <GridRowStyle className={`section section-grid-row`}>
        {items.map((item: any, idx: number) => {
          let { width, orientation, image, meta } = item;

          if (image) {
            return (
              <div
                className={`io section-grid-col section-grid-item section-grid-item-${width}w section-grid-item-orientation-${orientation}`}
                key={idx}
              >
                <div
                  className={`section-grid-img-wrapper ${
                    image && image.metadata
                      ? image.metadata.hasAlpha
                        ? "__hide-placeholder-bg"
                        : false
                      : false
                  }`}
                  data-aspect-ratio={`${
                    image && image.metadata
                      ? image.metadata.dimensions.aspectRatio
                      : -1
                  }`}
                  style={
                    image && image.metadata
                      ? {
                          paddingBottom: calcAspectRatio(
                            image.metadata.dimensions
                          ),
                        }
                      : {}
                  }
                >
                  <LazyImage
                    src={`${urlFor(image).width(2048).auto("format").url()}`}
                    alt={meta}
                    title={meta}
                    uniqueKey={
                      Math.random().toString(36).substring(2, 15) +
                      Math.random().toString(36).substring(2, 15)
                    }
                  />
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </GridRowStyle>
    );
  } else {
    console.log("🚫 Items not provided to Section: GridRow");
    return null;
  }
};

// End Component
// __________________________________________________________________________________________
