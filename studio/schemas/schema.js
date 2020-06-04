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

// Core Page Schemas

// Setting Schemas
import Config from "./settings/config";

// Core Builder Element Schemas
import CenteredText from "./sections/CenteredText";
import ColumnContent from "./sections/ColumnContent";
import FullWidthImage from "./sections/FullWidthImage";
import GridRow from "./sections/GridRow";
import Headline from "./sections/Headline";
import MarqueeRow from "./sections/MarqueeRow";
import SectionBreak from "./sections/SectionBreak";
import StickySection from "./sections/StickySection";

// __________________________________________________________________________________________

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    /**
     *
     * Core Schema Types
     *
     */
    Page,
    Event,
    Article,
    Podcast,

    /**
     *
     * Core Page Builder Sections
     *
     */
    CenteredText,
    ColumnContent,
    FullWidthImage,
    GridRow,
    Headline,
    MarqueeRow,
    SectionBreak,
    StickySection,

    // Core Pages
    FrontPage,
    AboutPage,

    // Core Settings
    Config,
  ]),
});
