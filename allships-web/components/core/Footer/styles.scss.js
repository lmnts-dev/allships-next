/**
 *
 * Navigation.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website Navigation Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const FooterStyle = styled.footer`
  background: ${Theme.Color.Dialog};
  border-top: ${Root.BorderSize} solid ${Theme.Color.Primary};
  padding: calc(${Root.Size} * 2) 0;
  position: relative;
  z-index: 200;

  .footer-inner {
    display: flex;
    flex-wrap: nowrap;
    text-transform: uppercase;
    font-size: 1.8rem;

    img {
      max-width: 100%;
    }

    .footer-col {
      width: calc(100% / 3);

      &.__footer-left-col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding-right: ${Root.Size};

        .footer-brand {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          .footer-brand-image {
            width: 100%;

            img {
              width: 100%;
            }
          }

          .footer-brand-tagline {
            color: ${Theme.Color.Background};
            font-size: 2.8rem;
            margin-bottom: calc(${Root.Size});
          }
        }

        ul {
          li {
            margin-bottom: calc(${Root.Size} / 2);
            cursor: pointer;
          }
        }
      }

      &.__footer-center-col {
        padding: 0 ${Root.Size};
      }

      &.__footer-right-col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding-left: ${Root.Size};

        .footer-newsletter-form {
          width: 100%;

          .footer-newsletter-image {
            margin-bottom: calc(${Root.Size} / 2);
            img {
              width: 100%;
            }
          }

          .footer-newsletter-form-wrapper {
            input {
              outline: 0;
              border: ${Root.BorderSize} solid ${Theme.Color.Primary};
              width: 100%;
              background: none;
              padding: calc(${Root.Size} / 4);
              text-transform: uppercase;
              color: ${Theme.Color.Primary};

              &:focus,
              &:active {
                outline: 0;
                border: ${Root.BorderSize} solid ${Theme.Color.Background};
                color: ${Theme.Color.Background};

                &::placeholder {
                  color: ${Theme.Color.Background};
                }
              }
            }

            input::placeholder {
              color: ${Theme.Color.Primary};
              opacity: 1;
            }

            &:focus-within {
              position: relative;

              &:after {
                content: "PRESS ENTER TO SUBMIT";
                color: ${Theme.Color.Background};
                padding-top: 10px;
                font-size: 1.4rem;
              }
            }
          }
        }

        .footer-copyright {
          font-size: 1.5rem;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      }
    }
  }
`;
