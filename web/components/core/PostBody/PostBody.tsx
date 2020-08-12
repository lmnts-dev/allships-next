// Imports
// __________________________________________________________________________________________

// Core
import React, { PureComponent } from "react";

// Styles
import { PostBodyStyle } from "./styles.scss";
import { createGlobalStyle } from "styled-components";

// Types
import { LMNTS_Sanity_AvailableListings } from "../../../constants/types";

// Constants
import { Theme } from "../../../constants/Theme";

// Libraries
import Typed from "react-typed";

// Components
// import Link from "next/link";
import { InnerGrid } from "../InnerGrid";
import { SectionLoop } from "../SectionLoop";

// Utils
// import slugify from "../../../utils/slugify";
import { parseDateTime } from "../../../utils/parseDateTime";
import { Settings } from "../../../constants/site/Settings";
import { urlFor } from "../../../utils/urlFor";
import LazyImage from "../../../utils/lazyImage";

// Begin Component
// __________________________________________________________________________________________

type PostBodyProps = {
  post: LMNTS_Sanity_AvailableListings;
  baseRoute: string;
  categoryDynamicRoute: string;
};

type PostBodyState = {};

/**
 *
 * @name PostBody
 * @description Our app's post template.
 *
 */
export class PostBody extends PureComponent<PostBodyProps, PostBodyState> {
  constructor(props: PostBodyProps) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    // let { baseRoute, post, categoryDynamicRoute } = this.props;
    let { post } = this.props;
    let { title, category, content, author } = post;

    // Variable Overrides
    const VariableOverrides = createGlobalStyle`
    body {
      /* --primaryColor: ${Theme.Color.UltraRed};
      --secondaryColor: ${Theme.Color.HackerGold};
      --bgColor: ${Theme.Color.Black};
      --dialogColor: ${Theme.Color.Black};
      --textColor: ${Theme.Color.White}; */
    }
  `;

    return (
      <PostBodyStyle className="post-body">
        <VariableOverrides />
        <article>
          <InnerGrid>
            {/* ___________________________________________ */}
            {/* Post Intro  */}
            <section className="post-intro-section">
              {/* ___________________________________________ */}
              {/* Post Meta  */}
              <ul>
                {category
                  ? category.map((categoryItem: string, idx: number) => {
                      return <li key={idx}>{categoryItem}</li>;
                    })
                  : null}
                <li>{parseDateTime(post._updatedAt)}</li>
              </ul>
              {/* ___________________________________________ */}
              {/* Post Title  */}
              <h1
                key={
                  Math.random().toString(36).substring(2, 15) +
                  Math.random().toString(36).substring(2, 15)
                }
              >
                {title ? (
                  <Typed
                    strings={[title]}
                    typeSpeed={50}
                    backSpeed={40}
                    className={`typed-wrapper`}
                    loop={false}
                    showCursor={true}
                    key={
                      Math.random().toString(36).substring(2, 15) +
                      Math.random().toString(36).substring(2, 15)
                    }
                  />
                ) : null}
              </h1>
              {/* ___________________________________________ */}
              {/* Post Author  */}
              <div className="post-author-section __small-author">
                {/* ___________________________________________ */}
                {/* Post Author Photo */}
                <div className="post-author-col __photo">
                  <span className="author-photo-wrapper">
                    <LazyImage
                      src={`${urlFor(author.author_photo)
                        .width(250)
                        .auto("format")
                        .url()}`}
                      alt={author.name}
                      title={author.name}
                      uniqueKey={
                        Math.random().toString(36).substring(2, 15) +
                        Math.random().toString(36).substring(2, 15)
                      }
                    />
                  </span>
                </div>
                {/* ___________________________________________ */}
                {/* Post Author Name */}
                <div className="post-author-col __name">
                  {/* ___________________________________________ */}
                  {/* Post Author Name Itself */}
                  <div className="author-name">By {author.name}</div>
                  {/* ___________________________________________ */}
                  {/* Post Author Title */}
                  {/* <div className="author-title">{author.job_title}</div> */}
                </div>
              </div>
            </section>
          </InnerGrid>
          {/* ___________________________________________ */}
          {/* Section Loop  */}
          <SectionLoop content={content} />

          {/* ___________________________________________ */}
          {/* Post Outro  */}
          <section className="post-outro-section">
            <InnerGrid>
              {/* ___________________________________________ */}
              {/* Post Author  */}
              <div className="post-author-section">
                {/* ___________________________________________ */}
                {/* Post Author Photo */}
                <div className="post-author-col __photo">
                  <span className="author-photo-wrapper">
                    <LazyImage
                      src={`${urlFor(author.author_photo)
                        .width(250)
                        .auto("format")
                        .url()}`}
                      alt={author.name}
                      title={author.name}
                      uniqueKey={
                        Math.random().toString(36).substring(2, 15) +
                        Math.random().toString(36).substring(2, 15)
                      }
                    />
                  </span>
                </div>
                {/* ___________________________________________ */}
                {/* Post Author Name */}
                <div className="post-author-col __name">
                  {/* ___________________________________________ */}
                  {/* Post Author Name Itself */}
                  <div className="author-name">Written by {author.name}</div>

                  {/* ___________________________________________ */}
                  {/* Post Author Title */}
                  <div className="author-title">{author.job_title}</div>

                  {/* ___________________________________________ */}
                  {/* Post Author Bio */}
                  {author.bio ? <p>{author.bio}</p> : null}

                  {/* ___________________________________________ */}
                  {/* Post Author Contact */}
                  <div className="author-contact">
                    {author.twitter ? (
                      <a
                        target="_blank"
                        rel="nofollow noreferrer"
                        href={author.twitter}
                      >
                        Twitter
                      </a>
                    ) : null}
                    {author.instagram ? (
                      <a
                        target="_blank"
                        rel="nofollow noreferrer"
                        href={author.instagram}
                      >
                        Instagram
                      </a>
                    ) : null}
                    {author.email ? (
                      <a
                        target="_blank"
                        rel="nofollow noreferrer"
                        href={`mailto: ${author.email}`}
                      >
                        Email
                      </a>
                    ) : null}
                    {author.web ? (
                      <a
                        target="_blank"
                        rel="nofollow noreferrer"
                        href={author.web}
                      >
                        Website
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* ___________________________________________ */}
              {/* Share Section */}
              <div className="post-outro-header">Spread the word</div>
              <div className="post-outro-social">
                <ul>
                  <li>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${Settings.siteUrl}/${post._type}/${post.slug.current}`}
                      target="_blank"
                      rel="nofollow noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://reddit.com/submit?url=${Settings.siteUrl}/${post._type}/${post.slug.current}&title=${title}`}
                      target="_blank"
                      rel="nofollow noreferrer"
                    >
                      Reddit
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${Settings.siteUrl}/${post._type}/${post.slug.current}&title=${title}`}
                      target="_blank"
                      rel="nofollow noreferrer"
                    >
                      Tumblr
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://www.facebook.com/sharer.php?u=${Settings.siteUrl}`}
                      target="_blank"
                      rel="nofollow noreferrer"
                    >
                      FB
                    </a>
                  </li>
                </ul>
              </div>
            </InnerGrid>
          </section>
        </article>
      </PostBodyStyle>
    );
  }
}
