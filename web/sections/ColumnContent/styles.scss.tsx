// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";

// Begin Styles
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name ColumnContentStyle
 *
 */
export const ColumnContentStyle = styled.section`
  width: 100%;
  margin: 0 auto;

  .inner-grid {
    position: relative;
    padding: 0 ${Root.Size};

    .section-column-content {
      &-top {
        h2 {
          font-family: ${Theme.Font.HeaderAlt};
          font-size: 3rem;
          font-weight: 400;
          max-width: 350px;
          margin-bottom: ${Root.Size};

          /**
          *
          * Styles
          *
          */
          &.style-outline {
            color: transparent;
            -webkit-text-stroke: 0.5px ${Theme.Color.White};
            /* @ts-ignore */
            text-stroke: 0.5px ${Theme.Color.White};
            text-shadow: none;
          }

          /**
          *
          * Sizing
          *
          */
          &.size-xl {
            font-size: 10vw;
          }
        }
      }

      &-bottom {
        display: flex;
        justify-content: space-between;

        .col {
          flex: 1;
          min-width: 25%;
          padding-right: calc(${Root.Size} * 2);

          &:last-child {
            padding-right: 0;
          }

          &-inner {
            font-size: 1.2rem;

            h4,
            p {
              font-family: ${Theme.Font.HeaderAlt};
              font-size: 1.5rem;
            }

            h4 {
              font-weight: 500;

              /**
              *
              * Sizing
              *
              */
              &.size-md {
                font-size: 2rem;
              }
            }

            p {
              font-weight: 300;
              margin-bottom: ${Root.Size};
            }
          }
        }
      }
    }

    .scroll-down {
      position: absolute;
      left: ${Root.Size};
      bottom: calc(${Root.Size} * -2);

      .scroll-down-inner {
        position: relative;
        font-weight: bold;
        padding-bottom: calc(${Root.Size} * 0.5);

        &:before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          border-left: 1px solid ${Theme.Color.White};
          border-bottom: 1px solid ${Theme.Color.White};
          width: calc(${Root.Size} / 2);
          height: calc(${Root.Size} / 2);
          transform-origin: center center;
          transform: translateX(-50%) rotate(-45deg);
        }
      }
    }
  }

  /* Section Kerning */
  + .section-grid-row {
    padding-top: ${Root.Size};

    + .section-break {
      padding-top: 0;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    width: 100%;
    margin: 0 auto;

    .inner-grid {
      position: relative;
      padding: 0;

      .section-column-content {
        &-top {
          .txt-caption {
            white-space: nowrap;
            overflow: visible;
          }

          h2 {
            font-family: ${Theme.Font.HeaderAlt};
            font-size: 2rem;
            font-weight: 400;
            max-width: 80%;
            margin-bottom: ${Root.Size};

            /**
            *
            * Styles
            *
            */
            &.style-outline {
              color: transparent;
              -webkit-text-stroke: 0.5px ${Theme.Color.White};
              /* @ts-ignore */
              text-stroke: 0.5px ${Theme.Color.White};
              text-shadow: none;
            }

            /**
            *
            * Sizing
            *
            */
            &.size-xl {
              font-size: 15vw;
            }
          }
        }

        &-bottom {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;

          .col {
            flex: 1;
            min-width: 100%;
            width: 100%;
            padding-right: 0;

            &:last-child {
              padding-right: 0;
            }

            &-inner {
              font-size: 1.2rem;

              h4,
              p {
                font-family: ${Theme.Font.HeaderAlt};
                font-size: 1rem;
              }

              a {
                font-size: 1rem;
              }

              h4 {
                font-weight: 500;
                font-size: 1.1rem;

                /**
                *
                * Sizing
                *
                */
                &.size-md {
                  font-size: 1.5rem;
                  max-width: 80%;
                }
              }

              p {
                font-weight: 300;
                margin-bottom: ${Root.Size};
              }
            }
          }
        }
      }

      .scroll-down {
        position: absolute;
        left: 0;
        bottom: calc(${Root.Size} * -1);

        .scroll-down-inner {
          position: relative;
          font-weight: bold;
          padding-bottom: calc(${Root.Size} * 0.5);
          font-size: 0.8rem;

          &:before {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            border-left: 1px solid ${Theme.Color.White};
            border-bottom: 1px solid ${Theme.Color.White};
            width: calc(${Root.Size} / 3.5);
            height: calc(${Root.Size} / 3.5);
            transform-origin: center center;
            transform: translateX(-50%) rotate(-45deg);
          }
        }
      }
    }

    /* Section Kerning */
    + .section-grid-row {
      padding-top: ${Root.Size};

      + .section-break {
        padding-top: 0;
      }
    }
  }
`;
