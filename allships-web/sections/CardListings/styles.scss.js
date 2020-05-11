// CardListings Styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";

// Animations
import { Blink } from "../../constants/styles/Animation";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const CardListingsStyle = styled.div`
  width: 100%;
  max-width: ${Theme.Base.Grid.ReadingWidth};
  margin: 0 auto;

  .card-listings-list {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-left: calc(var(--cardPadding) * -1);
    margin-right: calc(var(--cardPadding) * -1);
    width: calc(100% + (var(--cardPadding) * 2));

    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      margin-left: 0;
      margin-right: 0;
      width: 100%;
    }

    .content-card {
      width: 25%;

      @media (max-width: ${Theme.Base.Media.Width.Sm}) {
        width: 100%;
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

  width: 100%;
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

  .card-listings-filter-bar-inner {
    display: flex;
    justify-content: space-between;

    .card-listings-filter-bar-col {
      ul {
        display: flex;
        width: 100%;

        /** Core Pill Button Sizes */
        li {
          flex-shrink: 0;
        }
      }

      /** Left Column */
      &:first-child {
        flex: 1;

        ul {
          li {
            /** Inherits .btn class */
            background: ${Theme.Color.White};
            margin-right: calc(${Root.Size} / 4);
            box-shadow: inset calc(var(--btnShadowSize) * -1)
              calc(var(--btnShadowSize) * -1) 0px var(--btnShadowSize)
              ${Theme.Color.Primary};

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

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }

      /** Right Column */
      &:last-child {
        flex: unset;

        ul {
          justify-content: flex-end;

          li {
            /** Inherits .btn class */
            border: calc(var(--btnShadowSize) * 2) solid ${Theme.Color.Primary};
            margin-left: calc(${Root.Size} / 4);

            &:hover {
              background: ${Theme.Color.Primary};
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
`;
