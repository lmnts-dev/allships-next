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
      <div
        style={{
          paddingTop: !isHomePage ? 40 : 150,
          paddingBottom: 0,
          fontSize: "9rem",
          lineHeight: 0.8,
          marginBottom: 5,
          marginTop: 0,
          color: Theme.Color.Dialog,
          textAlign: "center",
        }}
      >
        {!isHomePage ? (
          <h1 style={{ textTransform: "uppercase" }}>{currentHero}</h1>
        ) : (
          <LazyImage
            src="/gradient-logo.svg"
            style={{ width: "60vw" }}
            alt="ALLSHIPS"
          />
        )}
      </div>
      {!isHomePage ? null : (
        <p
          style={{
            marginBottom: 60,
            paddingBottom: 0,
            fontSize: "2.5rem",
            textAlign: "center",
          }}
        >
          A CREATIVE COALITION
        </p>
      )}
    </PageHeroStyle>
  );
};
