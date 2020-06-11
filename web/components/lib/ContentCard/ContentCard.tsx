/**
 *
 * ContentCard.js
 * @author Peter Laxalt
 * @description Our content card component.
 * @example <ContentCard
 *           data={fields}
 *           isLink={fields.Link === "" ? false : true}
 *           key={idx}
 *         />
 *
 */

// Imports
// __________________________________________________________________________________________

// Core
import React, { Component } from "react";

// Styles
import { GlobalStyles } from "./styles.scss";

// Utils
import LazyImage from "../../../utils/lazyImage";

// Types
import { LMNTS_GenericListing } from "../../../constants/types";

// Begin Component
// __________________________________________________________________________________________

type ContentCardProps = {
  isLink?: boolean;
  data: LMNTS_GenericListing;
  isFeatured?: boolean;
};

export class ContentCard extends Component<ContentCardProps, any> {
  constructor(props: ContentCardProps) {
    super(props);
  }

  // Prevent Rerender on State Changes
  shouldComponentUpdate(nextProps: ContentCardProps) {
    if (this.props.data === nextProps.data) {
      return false;
    } else {
      return true;
    }
  }

  // Render
  render() {
    let { isLink, data, isFeatured } = this.props;

    const Content: React.FunctionComponent<ContentCardProps> = ({ data }) => {
      let { thumbnail_image, title, categories, author } = data;

      let isPublishedByUs = author ? author !== "By Others" : false;

      if (thumbnail_image && title) {
        return (
          <div className="content-card-inner">
            {thumbnail_image ? (
              <LazyImage src={thumbnail_image} alt={title} />
            ) : null}
            <div className="content-card-title">
              {title} {">"}
            </div>

            <ul className="category-list __content-card-categories">
              {author ? (
                isPublishedByUs ? (
                  <li className="__is-published-by-us">Allships</li>
                ) : null
              ) : null}

              {categories ? (
                <>
                  {isFeatured ? <li>Featured</li> : null}
                  {categories.length > 0
                    ? categories.map((category: string, idx: number) => {
                        return <li key={idx}>{category}</li>;
                      })
                    : null}
                </>
              ) : null}
            </ul>
          </div>
        );
      } else {
        return null;
      }
    };

    if (!isLink) {
      return (
        <div className="content-card howdy">
          <Content data={data} />
        </div>
      );
    } else {
      if (data.link) {
        return (
          <a
            href={data.link}
            className="content-card __isLink hello"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Content data={data} />
          </a>
        );
      } else {
        return (
          <div className="content-card goodbye">
            <Content data={data} />
          </div>
        );
      }
    }
  }
}

export const ContentCardGlobalStyles = () => <GlobalStyles />;
