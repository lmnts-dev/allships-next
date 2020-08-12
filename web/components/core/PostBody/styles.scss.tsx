// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";
import { CssUtils } from "../../../constants/styles/CssUtils";

// Constants

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name PostBodyStyle
 * @description Our styles for postings.
 *
 */

export const PostBodyStyle = styled.div`
  /* Settings */
  --articleFont: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  --articleReadingFontSize: 1.2rem;

  --articlePadding: calc(${Root.Size} * 4);
  --articleMaxWidth: calc(${Root.Site.Width} / 2);

  /* Core Styles */
  padding-top: var(--articlePadding);
  padding-bottom: 0;
  margin-bottom: calc(var(--articlePadding) / 2);
  font-family: var(--articleFont);
  margin-left: calc(${Root.Grid.Gutter.Left} * -1);
  margin-right: calc(${Root.Grid.Gutter.Right} * -1);
  width: calc(100% + (${Root.Grid.Gutter.Right} + ${Root.Grid.Gutter.Left}));

  border-bottom: 2px ${Theme.Color.Primary} solid;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --articlePadding: calc(${Root.Size} * 2);

    padding-top: calc(var(--articlePadding) * 1.5);
  }

  /* Reset Fonts */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${Theme.Font.Header};
    text-transform: uppercase;
    line-height: 0.8;
  }

  a {
    color: ${Theme.Color.Secondary};

    &:hover {
      text-decoration: none;
      background: ${Theme.Color.Primary};
    }
  }

  p,
  ul {
    font-family: var(--articleFont);
    max-width: var(--articleMaxWidth);
    margin: 0 auto;
    color: ${Theme.Color.White};
  }

  p {
    font-size: var(--articleReadingFontSize);
    line-height: 1.5;
    color: ${Theme.Color.White};
  }

  /* Core Elements */
  .post-intro-section {
    h1 {
      font-family: ${Theme.Font.Header};
      text-align: center;

      .typed-wrapper {
        display: block;
        min-height: calc(6rem * 2);
      }

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        font-size: 3rem;

        .typed-wrapper {
          min-height: calc(3rem * 2);
        }
      }
    }

    ul {
      list-style-type: none;
      display: flex;
      justify-content: center;
      padding-bottom: ${Root.Size};
      font-family: ${Theme.Font.Header};
      text-transform: uppercase;
      font-size: 1.4rem;
      color: ${Theme.Color.White};

      li {
        margin: 0 calc(${Root.Size} / 4);
      }

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        font-size: 0.9rem;
        padding-bottom: calc(${Root.Size} / 4);
      }
    }
  }

  article {
    padding-left: ${Root.Grid.Gutter.Left};
    padding-right: ${Root.Grid.Gutter.Right};
  }

  /* ___________________________________ */
  /* Outro Section */
  .post-outro-section {
    padding-left: ${Root.Grid.Gutter.Left};
    padding-right: ${Root.Grid.Gutter.Right};
    padding-bottom: ${Root.Size};

    .post-outro-header {
      font-size: 1.5rem;
      width: 100%;
      text-align: center;
      display: block;
      padding-top: ${Root.Size};

      border-top: 2px ${Theme.Color.Primary} solid;
    }

    .post-outro-social,
    .post-outro-header {
      margin: 0 auto;
      font-family: ${Theme.Font.Header} !important;
      text-transform: uppercase;
      display: flex;
      justify-content: center;

      ul {
        display: flex;
        margin: 0;
        padding: 0;

        li {
          margin: calc(${Root.Size} / 4);
          font-size: 4.5rem;

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            font-size: 8vw;
          }
        }

        a {
          font-family: ${Theme.Font.Header} !important;
        }
      }
    }

    .post-outro-header {
      margin-top: ${Root.Size};
    }
  }

  /* _______________________________________________ */
  /* Post Author Section */
  .post-author-section {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    max-width: calc(${Root.Site.Width} * 0.5);
    margin: 0 auto;
    font-family: ${Theme.Font.Header} !important;
    text-transform: uppercase;

    p {
      font-family: ${Theme.Font.Header} !important;
      line-height: 1;
    }

    .post-author-col {
      &.__name {
        .author-name {
          font-size: 1.3rem;
        }

        .author-title {
          margin-bottom: calc(${Root.Size} / 4);
        }

        .author-contact {
          a {
            margin-right: calc(${Root.Size} / 4);
            display: inline-block;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }

      &.__photo {
        .author-photo-wrapper {
          display: flex;
          width: calc(${Root.Size} * 1.5);
          height: calc(${Root.Size} * 1.5);
          position: relative;
          margin-right: calc(${Root.Size} / 4);

          img {
            ${CssUtils.ObjectFit()};
          }
        }
      }
    }

    &.__small-author {
      align-items: center;

      .post-author-col {
        &.__photo {
          .author-photo-wrapper {
            width: calc(${Root.Size});
            height: calc(${Root.Size});
          }
        }

        &.__name {
          .author-title {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;
