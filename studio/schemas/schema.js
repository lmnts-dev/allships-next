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

// Setting Schemas
import config from "./settings/config";
import navigation from "./settings/navigation";

// Builder Element Schemas
import samplePageSectionOne from "./sections/samplePageSectionOne";
import samplePageSectionTwo from "./sections/samplePageSectionTwo";
import samplePageSectionThree from "./sections/samplePageSectionThree";

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

    // Page Builder Sections
    samplePageSectionOne,
    samplePageSectionTwo,
    samplePageSectionThree,

    // Core Settings
    config,
    navigation
  ])
});
