// Core
import React from "react";

// Styles
import { PageHeroStyle } from "./styles.scss";

// Constants
import { Theme } from "../../constants/Theme";

// Components
import LazyImage from "../../utils/lazyImage";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name PageHero
 * @description Basic page hero component.
 * @param currentHero : string : The current visible section.
 *
 */
export const PageHero = ({ currentHero }) => {
  let isHomePage = currentHero == "everything" ? true : false;

  return (
    <PageHeroStyle className="section-page-hero">
      <div className="page-hero-inner">
        {!isHomePage ? (
          <h1 style={{ textTransform: "uppercase" }}>{currentHero}</h1>
        ) : (
          <LazyImage src="/gradient-logo.svg" alt="ALLSHIPS" />
        )}
        {!isHomePage ? null : <p>A CREATIVE COALITION</p>}
      </div>
    </PageHeroStyle>
  );
};
