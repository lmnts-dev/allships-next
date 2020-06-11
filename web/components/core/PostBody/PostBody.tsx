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

// Components
import { SiteHead } from "../SiteHead";
import Link from "next/link";
import { InnerGrid } from "../InnerGrid";
import { SectionLoop } from "../SectionLoop";

// Utils
import slugify from "../../../utils/slugify";

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
    let { baseRoute, post, categoryDynamicRoute } = this.props;
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
        <SiteHead title={`ALLSHIPS | Post Name`} />
        <article>
          <InnerGrid>
            <section className="post-intro-section">
              <ul className="category-list __post-intro-categories">
                {category
                  ? category.map((categoryItem: string, idx: number) => {
                      return (
                        <li key={idx}>
                          <Link
                            as={`${baseRoute}/${slugify(categoryItem)}`}
                            href={`${baseRoute}/${categoryDynamicRoute}`}
                          >
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
          <SectionLoop content={content} />
        </article>
      </PostBodyStyle>
    );
  }
}
