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
import { CardListings } from "../sections/CardListings";

// Begin Component
//////////////////////////////////////////////////////////////////////

let cards = [
  "https://source.unsplash.com/1600x900/?arcade",
  "https://source.unsplash.com/1600x900/?hacker",
  "https://source.unsplash.com/1600x900/?code",
  "https://source.unsplash.com/1600x900/?coding",
  "https://source.unsplash.com/1600x900/?technology",
  "https://source.unsplash.com/1600x900/?pink",
  "https://source.unsplash.com/1600x900/?blue",
  "https://source.unsplash.com/1600x900/?orange",
];

export default () => (
  <InnerGrid startBelowNav={true}>
    <h1>FRONTPAGE</h1>
    <CardListings data={cards} />
  </InnerGrid>
);
