// LauncherDialog Styles

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

let sideBarSize = "200px";

const LauncherDialogStyle = styled.div`
  position: fixed;
  z-index: 800;
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  .__maximize {
    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      display: none !important;
    }
  }

  .launcher-dialog-inner {
    width: 83vw;
    height: 60vh;
    min-width: 500px;
    max-width: 1024px;
    min-height: 400px;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      width: 100vw;
      height: 100vh;
      max-width: unset;
      min-width: unset;
      max-height: unset;
      min-height: unset;
    }

    .launcher-dialog-header {
      width: 100%;
    }

    .launcher-dialog-structure {
      display: flex;
      flex: 1;
      width: 100%;
      max-height: calc(100% - (${Root.Nav.Size} + (${Root.BorderSize} * 1)));

      @media (max-width: ${Theme.Base.Media.Width.Sm}) {
        flex-direction: column;
      }

      .launcher-dialog-sidebar {
        border-right: ${Root.BorderSize} solid ${Theme.Color.Primary};
        max-height: calc(100vh - (${Root.Nav.Size} + (${Root.BorderSize} * 3)));
        overflow-y: auto;
        min-width: ${sideBarSize};
        text-transform: uppercase;
        resize: horizontal;

        @media (max-width: ${Theme.Base.Media.Width.Sm}) {
          border-right: unset;
        }

        ul {
          list-style-type: none;
          overflow-y: auto;
          width: 100%;

          li {
            border-bottom: ${Root.BorderSize} solid ${Theme.Color.Primary};
            cursor: pointer;
            width: 100%;
            display: flex;

            &:not(.__is-link) {
              height: ${Root.Nav.Size};
              align-items: center;
              padding: ${Root.DialogPaddingSize};

              @media (max-width: ${Theme.Base.Media.Width.Sm}) {
              padding: calc(${Root.DialogPaddingSize} * 2)
                ${Root.DialogPaddingSize};
            }
            }

            &.__alt {
              color: ${Theme.Color.Secondary};

              a {
                color: ${Theme.Color.Secondary};
              }
            }

            a {
              color: ${Theme.Color.Primary};
              height: ${Root.Nav.Size};
              display: flex;
              align-items: center;
              width: 100%;
              padding: ${Root.DialogPaddingSize};

              @media (max-width: ${Theme.Base.Media.Width.Sm}) {
              padding: calc(${Root.DialogPaddingSize} * 2)
                ${Root.DialogPaddingSize};
            }
            }

            &:hover,
            &.active {
              background: ${Theme.Color.Secondary};
              color: ${Theme.Color.Dialog};

              a {
                color: ${Theme.Color.Dialog};
                text-decoration: none;
              }
            }

            @media (max-width: ${Theme.Base.Media.Width.Sm}) {
              &:hover {
                background: ${Theme.Color.Primary};
              }
            }
          }
        }
      }

      .launcher-dialog-content {
        flex: 1;
        max-height: calc(100vh - (${Root.Nav.Size} + (${Root.BorderSize} * 3)));
        overflow-y: auto;
        overflow-x: hidden;
        padding-bottom: ${Root.Size};

        .cmd-list {
          text-transform: uppercase;
          width: 100%;

          li {
            width: 100%;

            @media (max-width: ${Theme.Base.Media.Width.Sm}) {
              font-size: 4.3vw;
            }


            .string {
              max-width: 100%;
            }

            &.__mobile-hidden,
            .__mobile-hidden {
              display: inline-block;

              @media (max-width: ${Theme.Base.Media.Width.Sm}) {
                display: none;
              }
            }

            &.__mobile-visible,
            .__mobile-visible {
              display: none;

              @media (max-width: ${Theme.Base.Media.Width.Sm}) {
                display: block;
              }
            }

            &.__string-long-form {
              .string {
                white-space: break-spaces;
              }
            }

            &.__string-clr-secondary {
              .string {
                color: ${Theme.Color.Secondary};
              }
            }

            span {
              white-space: pre;

              /* pre {
                display: inline-block;
                margin: 0;
                padding: 0;
                font-family: ${Theme.Font.Header};
                outline: 0;
                border: 0;
                border-radius: 0;
                line-height: 1;
                font-size: 1.3rem;
              } */
            }

            .label {
              padding-right: ${Root.DialogPaddingSize};
              flex-shrink: 0;
            }
          }

          .launcher-input-wrapper {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;

            margin-top: ${Root.DialogPaddingSize};
            padding-bottom: ${Root.DialogPaddingSize};
            padding-top: calc(${Root.DialogPaddingSize} / 2);

            position: sticky;
            bottom: calc((${Root.Nav.Size} + ${Root.DialogPaddingSize}) * -1);
            background: ${Theme.Color.Dialog};
            border-top: 1px solid ${Theme.Color.Primary};

            .label {
              color: ${Theme.Color.Secondary};
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
                width: ${Root.DialogPaddingSize};
                height: 1.3rem;
                background: ${Theme.Color.Secondary};
                animation: ${Blink} 1.5s steps(5, start) infinite;
              }

              input {
                background: none;
                flex: 1;
                padding-left: ${Root.DialogPaddingSize};
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
      }
    }
  }
`;

export default LauncherDialogStyle;
