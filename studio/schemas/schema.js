/**
 *
 * @name LMNTS-6 Sanity.io Content Schema
 * @author Peter Laxalt
 * @description LMNTS-6 Site Content Model
 *
 */

// __________________________________________________________________________________________

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Content Schemas
import continent from "./content/continent";
import country from "./content/country";
import region from "./content/region";
import state from "./content/state";
import city from "./content/city";
import area from "./content/area";
import county from "./content/county";
import service from "./content/service";
import serviceCategory from "./content/service-category";
import phase from "./content/phase";
import stage from "./content/stage";
import experiment from "./content/experiment";
import project from "./content/project";
import page from "./content/page";
import article from "./content/article";
import industry from "./content/industry";
import industryCategory from "./content/industry-category";

// Core Page Schemas
import approachLandingPage from "./pages/approachLandingPage";
import industriesLandingPage from "./pages/industriesLandingPage";
import workLandingPage from "./pages/workLandingPage";
import servicesLandingPage from "./pages/servicesLandingPage";
import stagesLandingPage from "./pages/stagesLandingPage";
import phasesLandingPage from "./pages/phasesLandingPage";
import locationsLandingPage from "./pages/locationsLandingPage";
import clientsLandingPage from "./pages/clientsLandingPage";
import careersLandingPage from "./pages/careersLandingPage";
import contactLandingPage from "./pages/contactLandingPage";

// Setting Schemas
import config from "./settings/config";
import navigation from "./settings/navigation";

// Core Builder Element Schemas
import CenteredText from "./sections/CenteredText";
import ColumnContent from "./sections/ColumnContent";
import FullWidthImage from "./sections/FullWidthImage";
import FullwidthHero from "./sections/FullwidthHero";
import GridRow from "./sections/GridRow";
import Headline from "./sections/Headline";
import ListingsTallFormat from "./sections/ListingsTallFormat";
import MarqueeRow from "./sections/MarqueeRow";
import QuoteHero from "./sections/QuoteHero";
import SectionBreak from "./sections/SectionBreak";
import StackedHero from "./sections/StackedHero";
import StickySection from "./sections/StickySection";
import StatementHero from "./sections/StatementHero";
import FeaturedProjectSlider from "./sections/FeaturedProjectSlider";

// Optional Builder Element Schemas
import { DisplayIndustryCategories } from "./sections/DisplayIndustryCategories";
import { DisplayServiceCategories } from "./sections/DisplayServiceCategories";
import { FeaturedServicesHero } from "./sections/FeaturedServicesHero";
import { FeaturedIndustriesHero } from "./sections/FeaturedIndustriesHero";
import ProjectHorizontalListings from "./sections/ProjectHorizontalListings";
import LinkListNavigation from "./sections/LinkListNavigation";

// __________________________________________________________________________________________

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /**
     *
     * Load Schema Types
     *
     */
    project,
    article,
    service,
    serviceCategory,
    phase,
    stage,
    continent,
    country,
    region,
    state,
    city,
    area,
    county,
    experiment,
    page,
    industry,
    industryCategory,

    // Core Page Builder Sections
    CenteredText,
    ColumnContent,
    FullWidthImage,
    FullwidthHero,
    GridRow,
    Headline,
    ListingsTallFormat,
    MarqueeRow,
    SectionBreak,
    QuoteHero,
    StackedHero,
    StickySection,
    StatementHero,
    FeaturedProjectSlider,

    // Optional Page Builder Sections
    DisplayIndustryCategories,
    DisplayServiceCategories,
    FeaturedServicesHero,
    FeaturedIndustriesHero,
    ProjectHorizontalListings,
    LinkListNavigation,

    // Core Pages
    approachLandingPage,
    industriesLandingPage,
    workLandingPage,
    servicesLandingPage,
    stagesLandingPage,
    phasesLandingPage,
    locationsLandingPage,
    clientsLandingPage,
    careersLandingPage,
    contactLandingPage,

    // Core Settings
    config,
    navigation,
  ]),
});
