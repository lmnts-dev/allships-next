// CardListings Styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";


// Begin Styles
//////////////////////////////////////////////////////////////////////

export const CardListingsStyle = styled.div`
  width: 100%;
  margin: 0 auto;

  .card-listings-list {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-left: calc(var(--cardPadding) * -1);
    margin-right: calc(var(--cardPadding) * -1);
    padding-bottom: calc(${Root.Size} * 4);
    width: calc(100% + (var(--cardPadding) * 2));

    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      margin-left: 0;
      margin-right: 0;
      width: 100%;
    }

    .content-card {
      width: 25%;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        width: 50%;
      }

      @media (max-width: ${Theme.Base.Media.Width.Sm}) {
        width: 100%;
      }
    }
  }

  .section-featured-items {
    margin-left: calc(var(--cardPadding) * -1);
    margin-right: calc(var(--cardPadding) * -1);
    width: calc(100% + (var(--cardPadding) * 2));
    position: relative;

    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      margin-left: 0;
      margin-right: 0;
      width: 100%;
    }

    .content-card {
      width: 100%;

      .content-card-inner {
        .content-card-title {
          max-width: 60%;
        }
      }
    }

    .featured-items-navigation {
      --featuredNavSize: ${Root.Size};

      position: absolute;
      right: calc(var(--cardPadding) + ${Root.BorderSize});
      bottom: calc(var(--cardPadding) + ${Root.BorderSize});
      z-index: 50;
      display: flex;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.7rem;
        height: var(--featuredNavSize);
        width: var(--featuredNavSize);
        background: ${Theme.Color.Primary};
        color: ${Theme.Color.Background};
        margin-right: ${Root.BorderSize};
        margin-bottom: ${Root.BorderSize};
        border: calc(${Root.BorderSize} * 0.5) solid ${Theme.Color.Primary};
        cursor: pointer;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        &:hover {
          box-shadow: inset calc(${Root.BorderSize} * -0.5)
            calc(${Root.BorderSize} * -0.5) 0px 0px ${Theme.Color.Background};
        }

        &:active {
          box-shadow: inset calc(${Root.BorderSize} * 0.5)
            calc(${Root.BorderSize} * 0.5) 0px 0px ${Theme.Color.Dialog};
          color: ${Theme.Color.Dialog};
        }
      }
    }
  }
`;

export const FilterBarStyle = styled.div`
  --offsetSize: var(--cardPadding);
  --stickyTopSize: calc(
    ${Theme.Base.Grid.SiteFrameWidth} + ${Root.Nav.Size} + ${Root.BorderSize}
  );
  --btnShadowSize: 2px;
  --toggleSpacing: calc(${Root.Size} / 4);

  margin-left: calc(var(--cardPadding) * -1);
  margin-right: calc(var(--cardPadding) * -1);
  width: calc(100% + (var(--cardPadding) * 2));
  padding-left: var(--cardPadding);
  padding-right: var(--cardPadding);
  padding-top: ${Root.BorderSize};
  padding-bottom: ${Root.BorderSize};
  background: ${Theme.Color.Background};
  position: sticky;
  top: var(--stickyTopSize);
  z-index: 300;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }

  .card-listings-filter-bar-inner {
    display: flex;
    justify-content: space-between;

    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      justify-content: flex-end;
      flex-direction: row;
      padding-left: calc(
        ${Root.Grid.Gutter.Left} + ${Theme.Base.Grid.SiteFrameWidth} -
          (${Root.BorderSize} / 2)
      );
      padding-right: calc(
        ${Root.Grid.Gutter.Right} + ${Theme.Base.Grid.SiteFrameWidth} -
          (${Root.BorderSize} / 2)
      );
    }

    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      padding-left: var(--cardPadding);
      padding-right: var(--cardPadding);
    }

    .card-listings-filter-bar-col {
      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        flex-shrink: 0;
      }

      ul {
        display: flex;
        width: 100%;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          width: auto;
          flex-wrap: nowrap;
          flex-shrink: 0;
        }

        /** Core Pill Button Sizes */
        li {
          flex-shrink: 0;

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            font-size: 1.2rem;
            padding-left: ${Root.BorderSize};
            padding-right: ${Root.BorderSize};
          }
        }
      }

      /** Left Column */
      &:first-child {
        flex: 1;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          flex-shrink: 0;
          padding-right: calc(
            ${Root.Grid.Gutter.Right} - (${Root.BorderSize} / 2)
          );
        }

        ul {
          li {
            /** Inherits .btn class */
            background: ${Theme.Color.White};
            margin-right: var(--toggleSpacing);
            box-shadow: inset calc(var(--btnShadowSize) * -1)
              calc(var(--btnShadowSize) * -1) 0px var(--btnShadowSize)
              ${Theme.Color.Primary};

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              padding-right: calc(${Root.Size} / 4);
            }

            &:hover {
              box-shadow: inset calc(var(--btnShadowSize) * 0)
                calc(var(--btnShadowSize) * 0) 0px var(--btnShadowSize)
                ${Theme.Color.Primary};
            }

            &:active,
            &.active {
              background: ${Theme.Color.Primary};
              color: ${Theme.Color.Dialog};
              box-shadow: inset calc(var(--btnShadowSize) * 1)
                calc(var(--btnShadowSize) * 1) 0px var(--btnShadowSize)
                ${Theme.Color.Dialog};
            }

            &.active {
              &:active {
                background: ${Theme.Color.Dialog};
                color: ${Theme.Color.Background};
                box-shadow: inset calc(var(--btnShadowSize) * 1)
                  calc(var(--btnShadowSize) * 1) 0px var(--btnShadowSize)
                  ${Theme.Color.Primary};
              }
            }

            &:last-child {
              margin-right: 0;

              @media (max-width: ${Theme.Base.Media.Width.Md}) {
                margin-right: var(--toggleSpacing);
              }
            }
          }
        }
      }

      /** Right Column */
      &:last-child {
        flex: unset;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          flex-shrink: 0;
        }

        ul {
          justify-content: flex-end;

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            justify-content: space-between;
          }

          li {
            /** Inherits .btn class */
            border: calc(var(--btnShadowSize) * 2) solid ${Theme.Color.Primary};
            margin-left: var(--toggleSpacing);

            &:hover {
              background: ${Theme.Color.Primary};
              color: ${Theme.Color.Background};
            }

            &:active,
            &.active {
              background: ${Theme.Color.Dialog};
              color: ${Theme.Color.Background};
            }

            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
    }
  }

  .card-listings-filter-bar-categories-mobile {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 100vw;

    li {
      box-shadow: none !important;
      border-bottom: ${Root.BorderSize} solid ${Theme.Color.Primary};
      height: ${Root.Size};
      margin: 0 !important;
      background-color: ${Theme.Color.Dialog} !important;

      &.active {
        background-color: ${Theme.Color.Background} !important;

        &:active {
          color: ${Theme.Color.Primary} !important;
        }
      }

      &:active {
        color: ${Theme.Color.Background} !important;
      }

      &:last-child {
        height: calc(${Root.Size} * 1.5);
        padding-bottom: calc(${Root.Size} * 0.5);
      }

      &.__categories-headline {
        border-top: ${Root.BorderSize} solid ${Theme.Color.Primary};
        background: ${Theme.Color.Dialog} !important;
        color: ${Theme.Color.Background};
        display: flex;
        justify-content: space-between;
        padding: 0 0 0 calc(${Root.DialogPaddingSize} * 2) !important;

        &:active {
          color: ${Theme.Color.Background} !important;
        }

        span {
          height: 100%;
          display: flex;
          align-items: center;

          &:last-child {
            padding-left: calc(${Root.DialogPaddingSize}) !important;
            padding-right: calc(${Root.DialogPaddingSize} * 2);
            border-left: ${Root.BorderSize} solid ${Theme.Color.Primary};

            &:hover {
              background: ${Theme.Color.Background};
              color: ${Theme.Color.Dialog};
            }
          }
        }
      }
    }
  }
`;
