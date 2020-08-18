// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";
import { CssUtils } from "../../constants/styles/CssUtils";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name GridRowStyle
 *
 */
export const GridRowStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: calc(${Root.Size} * 2) 0;

  + .section-grid-row {
    /* padding: 0; */
    margin-top: calc(${Root.Size} * -2);
  }

  .section-grid-col {
    &.section-grid-item {
      /* Core */
      padding: calc(${Root.Size} / 4);
      /* transform: translateY(15%);
      opacity: 0;
      will-transform: transform, opacity;
      transition: all ${Theme.Base.Transition.Duration}
        ${Theme.Base.Transition.CssEase}; */

      .section-grid-img-wrapper {
        position: relative;
        background: ${Theme.Color.Primary};
        width: 100%;
        padding-bottom: 33vw;
        overflow: hidden;
        ${CssUtils.ShowLoadingIndicator()}

        img {
          ${CssUtils.ObjectFit()}
          z-index: 15;
        }
      }

      /* Scroll Animation */
      /* &.is-visible {
        transform: translateY(0%);
        opacity: 1;
      } */

      /* Sizing */
      &-25w {
        width: 25%;
      }

      &-33w {
        width: 33.333333333%;
      }

      &-50w {
        width: 50%;
      }

      &-66w {
        width: 66.666666666%;
      }

      &-75w {
        width: 75%;
      }

      &-100w {
        width: 100%;
      }

      &-fillw {
        flex: 1;
      }

      /* Orientation */
      &-orientation-contain {
        .section-grid-img-wrapper {
          background: none;

          img {
            object-fit: contain;
          }
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: calc(${Root.Size} * 2) 0;

    .section-grid-col {
      &.section-grid-item {
        /* Core */
        padding: calc(${Root.Size} / 10);
        /* transform: translateY(15%);
        opacity: 0;
        will-transform: transform, opacity;
        transition: all ${Theme.Base.Transition.Duration}
          ${Theme.Base.Transition.CssEase}; */

        .section-grid-img-wrapper {
          position: relative;
          background: ${Theme.Color.Nightsky};
          width: 100%;
          padding-bottom: 33vw;
          overflow: hidden;

          img {
            position: absolute;
            pointer-events: none;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            object-fit: cover;
            width: 100%;
            height: 100%;
            object-position: center;
            max-width: 100%;
          }
        }

        /* Scroll Animation */
        /* &.is-visible {
          transform: translateY(0%);
          opacity: 1;
        } */

        /* Sizing */
        &-25w {
          /* width: 25%; */
          width:100%;
        }

        &-33w {
          /* width: 33.333333333%; */
          width:100%;
        }

        &-50w {
          /* width: 50%; */
          width:100%;
        }

        &-66w {
          /* width: 66.666666666%; */
          width:100%;
        }

        &-75w {
          /* width: 75%; */
          width:100%;
        }

        &-100w {
          /* width: 100%; */
          width:100%;
        }

        &-fillw {
          flex: 1;
        }

        /* Orientation */
        &-orientation-contain {
          .section-grid-img-wrapper {
            background: none;

            img {
              object-fit: contain;
            }
          }
        }
      }
    }
  }
`;
