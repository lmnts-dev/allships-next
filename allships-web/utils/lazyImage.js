/**
 *
 * LazyImage.tsx
 * @author Peter Laxalt
 * @description Convert #HEXCODES to RGBA
 * @example hexToRGB('#FF0000', 0.5);
 *
 */

import React from "react";
import LazyLoad from "vanilla-lazyload";

// Only initialize it one time for the entire application
// @ts-ignore

// if (!document.lazyLoadInstance) {
//   // @ts-ignore
//   document.lazyLoadInstance = new LazyLoad({
//     elements_selector: ".lazy"
//   });
// }

export class LazyImage extends React.Component {
  // Update lazyLoad after first rendering of every image
  componentDidMount() {
    if (!document.lazyLoadInstance) {
      // @ts-ignore
      document.lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
      });
    }

    // @ts-ignore
    document.lazyLoadInstance.update();
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    // @ts-ignore
    document.lazyLoadInstance.update();
  }

  // Just render the image with data-src
  render() {
    // @ts-ignore
    const { alt, src, srcset, sizes, width, height } = this.props;
    return (
      <img
        alt={alt}
        className="lazy"
        data-src={src}
        data-srcset={srcset}
        data-sizes={sizes}
        width={width}
        height={height}
      />
    );
  }
}

export default LazyImage;
