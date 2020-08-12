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
    let { title, category, content, excerpt } = post;

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
              <ul>
                {category
                  ? category.map((categoryItem: string, idx: number) => {
                      return <li key={idx}>{categoryItem}</li>;
                    })
                  : null}
                <li>{parseDateTime(post._updatedAt)}</li>
              </ul>

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
              <p>{excerpt}</p>
            </section>
          </InnerGrid>
          {/* ___________________________________________ */}
          {/* Section Loop  */}
          <SectionLoop content={content} />

          {/* ___________________________________________ */}
          {/* Post Outro  */}
          <section className="post-outro-section">
            <InnerGrid>
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
