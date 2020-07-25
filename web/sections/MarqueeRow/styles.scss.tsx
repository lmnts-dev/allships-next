/**
 *
 * MarqueeRow.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website MarqueeRow Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const MarqueeRowStyle = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;
  pointer-events: none;

  .section-marquee-container {
    flex-shrink: 0;
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    overflow: hidden;
    width: calc(100% + (${Root.Grid.Gutter.Left} + ${Root.Grid.Gutter.Right}));
    margin-left: calc(${Root.Grid.Gutter.Left} * -1);
    margin-right: calc(${Root.Grid.Gutter.Right} * -1);

    ul {
      display: flex;
      flex-wrap: nowrap;
      white-space: nowrap;
      font-size: 8.5vw;
      font-family: ${Theme.Font.Header};
      flex-shrink: 0;
      position: relative;
      padding: ${Root.Size} 0;
      animation: marquee 30s linear infinite;
      max-width: unset !important;

      li {
        width: auto;
        flex-shrink: 0;
        white-space: nowrap;
        margin-right: calc(${Root.Size});
        font-weight: 400;
        color: ${Theme.Color.Primary};
        display: flex;
        align-items: center;

        figure {
          margin: 0;
          padding: 0;
          position: relative;

          &:before {
            content: "/";
            margin-left: ${Root.Size};
          }
        }
      }
    }
  }

  /* Section Style */
  &.section-marquee-style-tall {
    .section-marquee-container {
      ul {
        font-size: 10.5vw;
        font-family: ${Theme.Font.HeaderAlt};
        padding-top: 0;

        li {
          figure {
            margin: 0;
            padding: 0;
            position: relative;

            &:before {
              content: "•";
              font-size: 3rem;
              position: relative;
              top: -30px;
              margin-left: calc(${Root.Size} * 1.5);
            }
          }
        }
      }
    }
  }

  /* Section Kerning */
  + .section-break {
    padding-top: 0;
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .section-marquee-container {
      ul {
        font-size: 14vw;
        padding: calc(${Root.Size}) 0;
        animation: marquee 30s linear infinite;

        li {
          margin-right: calc(${Root.Size} / 2);

          figure {
            &:before {
              margin-left: calc(${Root.Size} / 2);
            }
          }
        }
      }
    }

    /* Section Style */
    &.section-marquee-style-tall {
      .section-marquee-container {
        ul {
          font-size: 12.5vw;

          li {
            figure {
              margin: 0;
              padding: 0;
              position: relative;

              &:before {
                content: "•";
                font-size: 4vw;
                position: relative;
                top: -2vw;
                margin-left: calc(${Root.Size} / 2);
              }
            }
          }
        }
      }
    }

    /* Section Kerning */
    + .section-break {
      padding-top: 0;
    }
  }
`;
