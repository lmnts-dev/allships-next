/**
 *
 * @name Sanity.io Content Schema
 * @author Peter Laxalt
 * @description Site Content Model
 *
 */

// __________________________________________________________________________________________

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Content Schemas
import { Event } from "./content/Event";
import { Page } from "./content/Page";
import { Article } from "./content/Article";
import { Podcast } from "./content/Podcast";
import { Author } from "./content/Author";

// Core Page Schemas
import { FrontPage } from "./pages/Frontpage";
import { AboutPage } from "./pages/AboutPage";

// Setting Schemas
import { Config } from "./settings/Config";

// Core Builder Element Schemas
import { CenteredText } from "./sections/CenteredText";
import { ColumnContent } from "./sections/ColumnContent";
import { FullWidthImage } from "./sections/FullWidthImage";
import { GridRow } from "./sections/GridRow";
import { HeadlineRow } from "./sections/HeadlineRow";
import { MarqueeRow } from "./sections/MarqueeRow";
import { SectionBreak } from "./sections/SectionBreak";
import { StickySection } from "./sections/StickySection";
import { ArticleText } from "./sections/ArticleText";
import { Navigation } from "./settings/Navigation";

// __________________________________________________________________________________________

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    /**
     *
     * Schema Types
     *
     */
    Page,
    Event,
    Article,
    Podcast,
    Author,

    /**
     *
     * Page Builder Sections
     *
     */

    // -- Default Sections
    ArticleText,
    CenteredText,
    ColumnContent,
    FullWidthImage,
    GridRow,
    HeadlineRow,
    MarqueeRow,
    SectionBreak,
    StickySection,

    /**
     *
     * Pages
     *
     */
    FrontPage,
    AboutPage,

    /**
     *
     * Settings
     *
     */
    Config,
    Navigation
  ]),
});
