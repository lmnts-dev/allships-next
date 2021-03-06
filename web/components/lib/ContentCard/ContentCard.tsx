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
import slugify from "../../../utils/slugify";
import Link from "next/link";

// Begin Component
// __________________________________________________________________________________________

type ContentCardProps = {
  isLink?: boolean;
  isSanityContent?: boolean | null;
  data: LMNTS_GenericListing;
  isFeatured?: boolean;
  isExternal?: boolean;
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

    const Content: React.FunctionComponent<ContentCardProps> = ({
      data,
      isExternal,
    }) => {
      let {
        thumbnail_image,
        wide_thumbnail_image,
        title,
        categories,
        author,
      } = data;

      let isPublishedByUs = author ? author !== "By Others" : false;

      if (thumbnail_image && title) {
        return (
          <div className="content-card-inner">
            {wide_thumbnail_image ? (
              <LazyImage
                src={wide_thumbnail_image}
                alt={title}
                addClass="desktop-wide-image"
              />
            ) : null}

            {thumbnail_image ? (
              <LazyImage
                src={thumbnail_image}
                alt={title}
                addClass="default-image"
              />
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
                  {isFeatured ? (
                    <li className="__category-pill">Featured</li>
                  ) : null}
                  {isExternal ? (
                    <li className="__category-pill">External</li>
                  ) : null}
                  {categories.length > 0
                    ? categories.map((category: string, idx: number) => {
                        return (
                          <li className="__category-pill" key={idx}>
                            {category}
                          </li>
                        );
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
      if (!data.isPublishedByUs) {
        return (
          <div className="content-card __isNotLink __isNotPublishedByUs">
            <Content data={data} />
          </div>
        );
      } else {
        if (!data.isSanityContent) {
          return (
            <Link
              href={`/${slugify(data.type)}/[slug]`}
              as={`/${slugify(data.type)}/${slugify(
                data.title ? data.title : "null"
              )}`}
            >
              <a className="content-card __isLink __isLinkPublishedByUs __isNotSanityContent">
                <Content data={data} />
              </a>
            </Link>
          );
        } else {
          return (
            <Link
              href={`/${slugify(data.type)}/[slug]`}
              as={`/${slugify(data.type)}/${data.slug}`}
            >
              <a className="content-card __isLink __isLinkPublishedByUs __isSanityContent">
                <Content data={data} />
              </a>
            </Link>
          );
        }
      }
    } else {
      if (data.link) {
        return (
          <a
            href={data.link}
            className="content-card __isLink __isExternalLink"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Content data={data} isExternal />
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
