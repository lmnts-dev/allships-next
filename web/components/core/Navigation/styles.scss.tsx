// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Animations
import { Blink } from "../../../constants/styles/Animation";

// Begin Styles
// __________________________________________________________________________________________

type Props = {
  shouldFocus?: boolean;
};

let gridIconScale = 0.8;
let navPadding = Root.DialogPaddingSize;
let navFontSize = "1.3rem";

/**
 *
 * @name Navigation.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website Navigation Styles.
 *
 */
export const NavigationStyle = styled.nav<Props>`
  /* width: 100%; */
  top: ${Theme.Base.Grid.SiteFrameWidth};
  right: ${Theme.Base.Grid.SiteFrameWidth};
  left: ${Theme.Base.Grid.SiteFrameWidth};
  position: fixed;
  font-size: ${navFontSize};
  z-index: 500;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  text-transform: uppercase;
  border-bottom: ${Root.BorderSize} solid ${Theme.Color.Primary};
  color: ${Theme.Color.Secondary};

  .nav-inner {
    background: ${Theme.Color.Dialog};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .col {
      height: ${Root.Nav.Size};
      display: flex;
      align-items: center;

      &.home-btn {
        .launcher-btn-wrapper {
          .ico-logotype {
            svg {
              fill: ${Theme.Color.Secondary};
              width: 100px;
              max-width: 100%;
              height: auto;
            }
          }

          &:hover {
            .ico-logotype {
              svg {
                fill: ${Theme.Color.Dialog};
              }
            }
          }
        }

        @media (max-width: ${Theme.Base.Media.Width.Sm}) {
          width: 50%;

          .launcher-btn-wrapper {
            width: 100%;
          }
        }
      }

      /* Launcher Button */
      &.launcher-btn,
      &.home-btn {
        display: flex;

        .launcher-btn-wrapper {
          display: flex;
          height: ${Root.Nav.Size};
          align-items: center;
          padding: 0;
          cursor: pointer;
          color: ${Theme.Color.Secondary};
          border-right: ${Root.BorderSize} solid ${Theme.Color.Primary};

          &:hover {
            text-decoration: none;
          }

          .icon {
            position: relative;
            width: ${Root.Nav.Size};
            height: ${Root.Nav.Size};
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transform: scale(${gridIconScale});

            /* Grid Icon */
            figure {
              margin: 0;
              padding: 0;
              position: relative;
              width: ${Root.BorderSize};
              height: ${Root.BorderSize};
              background: ${Theme.Color.Secondary};
              display: block;
              margin-bottom: ${Root.BorderSize};

              &:last-child {
                margin-bottom: 0px;
              }

              &:before,
              &:after {
                content: "";
                position: absolute;
                top: 0;
                width: ${Root.BorderSize};
                height: ${Root.BorderSize};
                background: ${Theme.Color.Secondary};
              }

              &:before {
                left: calc(${Root.BorderSize} * 2);
              }

              &:after {
                right: calc(${Root.BorderSize} * 2);
              }
            }
          }

          .label {
            padding: 0 ${navPadding};

            /* .__hidden {
              opacity: 0;
            } */

            @media (max-width: ${Theme.Base.Media.Width.Sm}) {
              padding-left: ${navPadding};
            }
          }

          &:hover {
            background-color: ${Theme.Color.Secondary};
            color: ${Theme.Color.Black};

            .icon {
              figure {
                background-color: ${Theme.Color.Black};

                &:before,
                &:after {
                  background-color: ${Theme.Color.Black};
                }
              }
            }
          }
        }
      }

      /* Launcher Input */
      &.launcher-input {
        flex: 1;
        padding: 0 ${navPadding};

        @media (max-width: ${Theme.Base.Media.Width.Sm}) {
          display: none;
        }

        .launcher-input-wrapper {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;

          .label {
            padding-right: ${navPadding};
          }

          .launcher-input-el {
            height: 100%;
            display: flex;
            flex: 1;
            position: relative;

            /* Fake Cursor */
            .fake-cursor {
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              width: ${navPadding};
              height: ${navFontSize};
              background: ${Theme.Color.Secondary};
              animation: ${Blink} 1.5s steps(5, start) infinite;
            }

            input {
              background: none;
              flex: 1;
              padding-left: ${navPadding};
              height: 100%;
              border: none;
              outline: none;
              color: ${Theme.Color.Secondary};
              caret-color: ${Theme.Color.Secondary};
              text-transform: uppercase;

              &:focus,
              &:active {
                padding-left: 0;

                + .fake-cursor {
                  display: none;
                }
              }
            }

            input::placeholder {
              color: ${Theme.Color.Secondary};
              opacity: 1;
            }
          }
        }
      }

      /* Launcher Status */
      &.launcher-status {
        display: flex;
        align-items: center;
        padding: 0 ${navPadding};

        @media (max-width: ${Theme.Base.Media.Width.Sm}) {
          display: none;
        }
      }

      /* Launcher Time */
      &.launcher-time,
      &.launcher-mission,
      &.launcher-cta {
        display: flex;
        align-items: center;
        padding: 0 ${navPadding};
        cursor: pointer;
        border-left: ${Root.BorderSize} solid ${Theme.Color.Primary};

        .launcher-wrapper {
          color: ${Theme.Color.Secondary};
        }

        @media (max-width: ${Theme.Base.Media.Width.Sm}) {
          border-left: unset;
          width: 100%;
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        &:hover {
          background-color: ${Theme.Color.Secondary};
          color: ${Theme.Color.Black};

          .launcher-wrapper {
            color: ${Theme.Color.Dialog};

            text-decoration: none;
          }
        }
      }

      &.launcher-cta {
        @media (max-width: ${Theme.Base.Media.Width.Sm}) {
          display: none;
        }
      }
    }
  }
`;
