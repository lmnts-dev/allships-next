// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";
import { CssUtils } from "../../constants/styles/CssUtils";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name StickySectionStyle
 *
 */
export const StickySectionStyle = styled.section`
  display: flex;
  justify-content: space-between;
  padding: calc(${Root.Size} * 2) 0;

  .section-sticky-col {
    width: 50%;

    &.content {
      max-width: 550px;

      .section-sticky-col-inner {
        position: sticky;
        top: calc(${Root.Nav.Size} + ${Theme.Base.Grid.SiteFrameWidth});
        padding-top: calc(${Root.Size});

        h3 {
          /* @ts-ignore */
          /* will-transform: transform, opacity; */
          opacity: 1;
          /* transform: translateX(0%); */
          /* opacity: 0; */
          /* transform: translateX(-10%); */
          /* transition: all ${Theme.Base.Transition.Duration} */
            /* ${Theme.Base.Transition.CssEase}; */
          margin: 0;
          padding: 0;

          + h3 {
            opacity: 0.45;
            /* transition-delay: ${Theme.Base.Transition.Duration}; */
          }

          /* &.is-visible {
            opacity: 1;
            transform: translateX(0%);

            + h3 {
              opacity: 0.45;
            }
          } */
        }

        p {
          /* @ts-ignore */
          /* will-transform: transform, opacity;
          opacity: 0;
          transform: translateY(10%);
          transition: all ${Theme.Base.Transition.Duration}
            ${Theme.Base.Transition.CssEase};
          transition-delay: ${Theme.Base.Transition.Duration}; */
          opacity: 1;
          /* transform: translateY(0%); */
          margin-top: calc(${Root.Size} / 2);

          /* &.is-visible {
            opacity: 1;
            transform: translateY(0%);
          } */
        }
      }
    }

    &.img {
      .section-sticky-img-wrapper {
        position: relative;
        width: 100%;
        padding-bottom: attr(data-aspect-ratio);
        overflow: hidden;
        margin-bottom: calc(${Root.Size} / 2);
        ${CssUtils.ShowLoadingIndicator()}

        img {
          ${CssUtils.ObjectFit()}
          z-index: 15;
        }
      }
    }
  }

  &.section-sticky-left {
    flex-direction: row-reverse;

    .section-sticky-col {
      &.content {
        padding: 0 ${Root.Size};
      }
    }
  }

  &.section-sticky-right {
    flex-direction: row;

    .section-sticky-col {
      &.content {
        padding: 0 ${Root.Size};
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: calc(${Root.Size}) 0;

    .section-sticky-col {
      width: 100%;

      &.content {
        max-width: 100%;
        margin-bottom: ${Root.Size};

        .section-sticky-col-inner {
          position: relative;
          top: 0;

          h3 {
            font-size: 2rem;
          }

          p {
            font-size: 1rem;
          }
        }
      }
    }

    &.section-sticky-left {
      flex-direction: row-reverse;

      .section-sticky-col {
        &.content {
          padding: 0 ${Root.Size};
        }
      }
    }

    &.section-sticky-right {
      flex-direction: row;

      .section-sticky-col {
        &.content {
          padding: 0 0 0 ${Root.Grid.Indent.X};
        }
      }
    }
  }
`;
