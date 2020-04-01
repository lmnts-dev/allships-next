/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 * @description The website homepage.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";

// Components
import { InnerGrid } from "../components/core/InnerGrid";

// Sections
import { StatementHero } from "../sections/StatementHero";

// Begin Component
//////////////////////////////////////////////////////////////////////

export default () => (
  <InnerGrid startBelowNav={true}>
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1>HOME </h1>
    </div>
  </InnerGrid>
);
