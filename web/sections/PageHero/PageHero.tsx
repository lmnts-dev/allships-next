// Core
import React from "react";

// Styles
import { PageHeroStyle } from "./styles.scss";

// Components
import LazyImage from "../../utils/lazyImage";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_Section_PageHero = {
  currentHero: string;
};

/**
 *
 * @name PageHero
 * @description Basic page hero component.
 * @param currentHero : string : The current visible section.
 *
 */
export const PageHero: React.FunctionComponent<LMNTS_Section_PageHero> = ({
  currentHero,
}) => {
  let isHomePage = currentHero == "everything" ? true : false;

  return (
    <PageHeroStyle className="section-page-hero">
      <div className="page-hero-inner">
        {!isHomePage ? (
          <h1 style={{ textTransform: "uppercase" }}>{currentHero}</h1>
        ) : (
          <LazyImage src="/gradient-logo.svg" alt="ALLSHIPS" />
        )}
        {!isHomePage ? null : <p>A CREATIVE COMMUNITY</p>}
      </div>
    </PageHeroStyle>
  );
};
