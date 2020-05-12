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

// Begin Component
//////////////////////////////////////////////////////////////////////

export class ContentCard extends Component {
  constructor(props) {
    super(props);
  }

  // Prevent Rerender on State Changes
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.data === nextProps.data) {
      return false;
    } else {
      return true;
    }
  }

  // Render
  render() {
    let { isLink, data } = this.props;

    const Content = ({ data }) => {
      let { Attachments, Name, Category } = data;

      if (Attachments && Name) {
        return (
          <div className="content-card-inner">
            <LazyImage src={Attachments[0].url} alt={Name} />
            <div className="content-card-title">{Name} ></div>
            {Category ? (
              <ul className="content-card-categories">
                <li>{Category}</li>
              </ul>
            ) : null}
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
