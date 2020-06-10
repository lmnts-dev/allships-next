// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from "react";

// Styles
import { PostBodyStyle } from "./styles.scss";

// Types
import { LMNTS_Sanity_AvailableListings } from "../../constants/types";

// Constants
import { Theme } from "../../constants/Theme";

// Components
import { SiteHead } from "../../components/core/SiteHead";
import { createGlobalStyle } from "styled-components";
import Link from "next/link";
import { InnerGrid } from "../../components/core/InnerGrid";

// Begin Component
//////////////////////////////////////////////////////////////////////

type PostBodyProps = {
  post: LMNTS_Sanity_AvailableListings;
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
    // @ts-ignore
    let { title, author, category, tags, content, excerpt } = this.props.post;

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
        <SiteHead title={`ALLSHIPS | Post Name`} />
        <article>
          <InnerGrid>
            <section className="post-intro-section">
              <ul className="category-list __post-intro-categories">
                {category
                  ? category.map((categoryItem: string, idx: number) => {
                      return (
                        <li key={idx}>
                          <Link href="/">
                            <a>{categoryItem}</a>
                          </Link>
                        </li>
                      );
                    })
                  : null}
              </ul>
              <h1>{title}</h1>
              <p>{excerpt}</p>
            </section>
          </InnerGrid>
        </article>
      </PostBodyStyle>
    );
  }
}
