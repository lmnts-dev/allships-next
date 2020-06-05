// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from "react";

// Styles
import { PostBodyStyle } from "./styles.scss";

// Components
import { SiteHead } from "../../components/core/SiteHead";

// Begin Component
//////////////////////////////////////////////////////////////////////

type PostBodyProps = {};

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
    return (
      <PostBodyStyle className="post-body">
        <SiteHead title={`ALLSHIPS | Post Name`} />
        <article>
          <h1>POST BODY</h1>
        </article>
      </PostBodyStyle>
    );
  }
}
