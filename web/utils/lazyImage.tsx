// Core
import React from "react";
import LazyLoad from "vanilla-lazyload";

// Begin Component
// __________________________________________________________________________________________

type Props = {
  alt?: string;
  src?: string;
  srcset?: string;
  sizes?: string;
  width?: string;
  height?: string;
  style?: object;
  title?: string;
  aspectRatio?: string;
};

/**
 *
 * LazyImage.tsx
 * @author Peter Laxalt
 * @description Lazy loaded image component.
 *
 */

export class LazyImage extends React.Component<Props, any> {
  // Update lazyLoad after first rendering of every image
  componentDidMount() {
    if (!document.lazyLoadInstance) {
      // @ts-ignore
      document.lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
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
    const {
      alt,
      src,
      srcset,
      sizes,
      width,
      height,
      aspectRatio,
      style,
    } = this.props;

    return (
      <img
        alt={alt}
        className="lazy"
        data-src={src}
        data-srcset={srcset}
        data-sizes={sizes}
        width={width}
        height={height}
        style={style}
        data-aspect-ratio={aspectRatio}
      />
    );
  }
}

export default LazyImage;
