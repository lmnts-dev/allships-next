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
//////////////////////////////////////////////////////////////////////

// Core
import React, { Component } from "react";

// Styles
import { GlobalStyles } from "./styles.scss";

// Utils
import LazyImage from "../../../utils/lazyImage";

// Types
import { LMNTS_ContentCardFields } from "../../../constants/Types";

// Begin Component
//////////////////////////////////////////////////////////////////////

type ContentCardProps = {
  isLink?: boolean;
  data: LMNTS_ContentCardFields;
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
      let { Attachments, Name, Category, Author } = data;

      let isPublishedByUs = Author ? Author == "By Us" : false;

      if (Attachments && Name) {
        return (
          <div className="content-card-inner">
            <LazyImage src={Attachments[0].url} alt={Name} />
            <div className="content-card-title">
              {Name} {">"}
            </div>

            <ul className="content-card-categories">
              {Author ? (
                isPublishedByUs ? (
                  <li className="__is-published-by-us">Allships</li>
                ) : null
              ) : null}

              {Category ? (
                <>
                  {isFeatured ? <li>Featured</li> : null}
                  <li>{Category}</li>
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
        <div className="content-card">
          <Content data={data} />
        </div>
      );
    } else {
      return (
        <a
          href={data.Link}
          className="content-card __isLink"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <Content data={data} />
        </a>
      );
    }
  }
}

export const ContentCardGlobalStyles = () => <GlobalStyles />;
