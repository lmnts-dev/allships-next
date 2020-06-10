// RouteDialog Styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Animations
import { Blink } from "../../../constants/styles/Animation";

// Begin Styles
//////////////////////////////////////////////////////////////////////

let sideBarSize = "250px";

const RouteDialogStyle = styled.div`
  position: fixed;
  z-index: 700;
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

  .launcher-dialog-inner {
    width: 60vw;
    height: 70vh;
    min-width: 400px;
    max-width: 1024px;
    min-height: 500px;
    max-height: 700px;
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
      overflow-y: auto;

      @media (max-width: ${Theme.Base.Media.Width.Sm}) {
        flex-direction: column;
      }

      .launcher-dialog-sidebar {
        border-right: ${Root.BorderSize} solid ${Theme.Color.Primary};
        overflow-y: scroll;
        min-width: ${sideBarSize};
        text-transform: uppercase;

        @media (max-width: ${Theme.Base.Media.Width.Sm}) {
          border-right: unset;
        }

        ul {
          list-style-type: none;
          overflow-y: scroll;

          li {
            border-bottom: ${Root.BorderSize} solid ${Theme.Color.Primary};
            height: ${Root.Nav.Size};
            display: flex;
            align-items: center;
            padding: ${Root.DialogPaddingSize};
            cursor: pointer;

            @media (max-width: ${Theme.Base.Media.Width.Sm}) {
              padding: calc(${Root.DialogPaddingSize} * 2)
                ${Root.DialogPaddingSize};
            }

            &:hover,
            &.active {
              background: ${Theme.Color.Secondary};
              color: ${Theme.Color.Dialog};
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

        .cmd-list {
          text-transform: uppercase;
          width: 100%;

          li {
            width: 100%;
            .label {
              padding-right: ${Root.DialogPaddingSize};
            }
          }

          .launcher-input-wrapper {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;

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

export default RouteDialogStyle;
