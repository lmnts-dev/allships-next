/**
 *
 * @name LMNTS-6 Sanity.io Desk Structure
 * @author Peter Laxalt
 * @description LMNTS-6 Desk Structure Model
 *
 */

// __________________________________________________________________________________________

// Core
import React, { Component } from "react";
import S from "@sanity/desk-tool/structure-builder";
import {
  FaGem,
  FaFlask,
  FaLayerGroup,
  FaLightbulb,
  FaBuilding,
  FaPalette,
  FaShapes,
  FaDiceD6,
  FaCompass,
  FaGlobe,
  FaGlobeAmericas,
  FaFlag,
  FaGlobeAfrica,
  FaRing,
  FaUniversity,
  FaUserTie,
  FaVihara,
  FaVectorSquare,
  FaNewspaper,
  FaHamsa,
} from "react-icons/fa";

// __________________________________________________________________________________________

/**
 * Simple example of web preview
 */
const url = "http://lmnts-6-three.now.sh/api/preview?secret=lordmeeko?slug=/work/";

class WebPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      random: 0,
    };

    this.resetIframe = this.resetIframe.bind(this);
  }

  resetIframe() {
    this.setState({ random: this.state.random + 1 });
  }

  render() {
    const { displayed } = this.props.document;

    return (
      <>
        <button
          onClick={this.resetIframe}
          style={{
            position: "fixed",
            right: 10,
            top: "50%",
            zIndex: 999,
            background: "white",
            borderRadius: 100,
            padding: 20,
          }}
        >
          Refresh
        </button>
        <iframe
          src={url + displayed.slug.current}
          frameBorder={0}
          key={this.state.random}
          style={{ width: "100%", height: "100%" }}
        />
      </>
    );
  }
}

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  if (schemaType === "project") {
    return S.document().views([
      S.view.form(),
      S.view.component(WebPreview).title("Web"),
    ]);
  }
};

/**
 * Our Hidden Doc Types
 */

const hiddenDocTypes = (listItem) =>
  ![
    "config",
    "navigation",
    "hiddenItem", // For example purposes
    "hiddenItem", // For example purposes
    "hiddenItem", // For example purposes
    "hiddenItem", // For example purposes
  ].includes(listItem.getId());

/**
 * Our Desk Structure
 */

export default () =>
  S.list()
    .title("Content")
    .items([
      /**
       * List all of our document types, filter out
       * our hidden document types
       */
      // ...S.documentTypeListItems().filter(hiddenDocTypes),

      // Make a new list item
      S.listItem()
        // Give it a title
        .title("Portfolio")
        .icon(FaPalette)
        .child(
          // Make a list in the second pane called Portfolio
          S.list()
            .title("Portfolio")
            .items([
              // Add list item
              S.listItem()
                .title("Projects")
                .icon(FaGem)
                // This automatically gives it properties from the project type
                .schemaType("project")
                // When you open this list item, list out the documents
                // of the type “project"
                .child(S.documentTypeList("project").title("Projects")),

              // Add list item
              S.listItem()
                .title("Stages")
                .icon(FaShapes)
                // This automatically gives it properties from the stage type
                .schemaType("stage")
                // When you open this list item, list out the documents
                // of the type “stage"
                .child(S.documentTypeList("stage").title("Stages")),

              // Add list item
              S.listItem()
                .title("Phases")
                .icon(FaLayerGroup)
                // This automatically gives it properties from the phase type
                .schemaType("phase")
                // When you open this list item, list out the documents
                // of the type “phase"
                .child(S.documentTypeList("phase").title("Phases")),

              // Add list item
              S.listItem()
                .title("Services")
                .icon(FaLightbulb)
                // This automatically gives it properties from the service type
                .schemaType("service")
                // When you open this list item, list out the documents
                // of the type “service"
                .child(
                  // Make a list in the second pane called Geographies
                  S.list()
                    .title("Services")
                    .items([
                      // Add list item
                      S.listItem()
                        .title("Services")
                        .icon(FaGlobeAfrica)
                        // This automatically gives it properties from the service type
                        .schemaType("service")
                        // When you open this list item, list out the documents
                        // of the type “service"
                        .child(
                          S.documentTypeList("service").title("All Services")
                        ),
                      S.listItem()
                        .title("Categories")
                        .icon(FaGlobeAfrica)
                        // This automatically gives it properties from the service type
                        .schemaType("serviceCategory")
                        // When you open this list item, list out the documents
                        // of the type “service"
                        .child(
                          S.documentTypeList("serviceCategory").title(
                            "Categories"
                          )
                        ),
                    ])
                ),

              // Add list item
              S.listItem()
                .title("Industries")
                .icon(FaUserTie)
                // This automatically gives it properties from the industry type
                .schemaType("industry")
                // When you open this list item, list out the documents
                // of the type “industry"
                .child(
                  // Make a list in the second pane called Geographies
                  S.list()
                    .title("Industries")
                    .items([
                      // Add list item
                      S.listItem()
                        .title("Industries")
                        .icon(FaGlobeAfrica)
                        // This automatically gives it properties from the industry type
                        .schemaType("industry")
                        // When you open this list item, list out the documents
                        // of the type “industry"
                        .child(
                          S.documentTypeList("industry").title("All Industries")
                        ),
                      S.listItem()
                        .title("Categories")
                        .icon(FaGlobeAfrica)
                        // This automatically gives it properties from the industry type
                        .schemaType("industryCategory")
                        // When you open this list item, list out the documents
                        // of the type “industry"
                        .child(
                          S.documentTypeList("industryCategory").title(
                            "Categories"
                          )
                        ),
                    ])
                ),

              // Add list item
              S.listItem()
                .title("Geographies")
                .icon(FaGlobeAmericas)
                .child(
                  // Make a list in the second pane called Geographies
                  S.list()
                    .title("Geographies")
                    .items([
                      // Add list item
                      S.listItem()
                        .title("Continents")
                        .icon(FaGlobeAfrica)
                        // This automatically gives it properties from the continent type
                        .schemaType("continent")
                        // When you open this list item, list out the documents
                        // of the type “continent"
                        .child(
                          S.documentTypeList("continent").title("Continents")
                        ),
                      // Add list item
                      S.listItem()
                        .title("Countries")
                        .icon(FaFlag)
                        // This automatically gives it properties from the country type
                        .schemaType("country")
                        // When you open this list item, list out the documents
                        // of the type “country"
                        .child(
                          S.documentTypeList("country").title("Countries")
                        ),
                      // Add list item
                      S.listItem()
                        .title("Regions")
                        .icon(FaRing)
                        // This automatically gives it properties from the region type
                        .schemaType("region")
                        // When you open this list item, list out the documents
                        // of the type “region"
                        .child(S.documentTypeList("region").title("Regions")),
                      // Add list item
                      S.listItem()
                        .title("States & Provinces")
                        .icon(FaUniversity)
                        // This automatically gives it properties from the state type
                        .schemaType("state")
                        // When you open this list item, list out the documents
                        // of the type “state"
                        .child(
                          S.documentTypeList("state").title(
                            "States & Provinces"
                          )
                        ),
                      // Add list item
                      S.listItem()
                        .title("Cities & Towns")
                        .icon(FaBuilding)
                        // This automatically gives it properties from the city type
                        .schemaType("city")
                        // When you open this list item, list out the documents
                        // of the type “city"
                        .child(
                          S.documentTypeList("city").title("Cities & Towns")
                        ),
                      // Add list item
                      S.listItem()
                        .title("Metropolitan Areas")
                        .icon(FaVectorSquare)
                        // This automatically gives it properties from the area type
                        .schemaType("area")
                        // When you open this list item, list out the documents
                        // of the type “area"
                        .child(
                          S.documentTypeList("area").title("Metropolitan Areas")
                        ),
                      // Add list item
                      S.listItem()
                        .title("Counties & Neighborhoods")
                        .icon(FaVihara)
                        // This automatically gives it properties from the county type
                        .schemaType("county")
                        // When you open this list item, list out the documents
                        // of the type “county"
                        .child(
                          S.documentTypeList("county").title(
                            "Counties & Neighborhoods"
                          )
                        ),
                    ])
                ),

              // Add list item
              S.listItem()
                .title("Experiments")
                // This automatically gives it properties from the experiment type
                .schemaType("experiment")
                .icon(FaFlask)
                // When you open this list item, list out the documents
                // of the type “experiment"
                .child(S.documentTypeList("experiment").title("Experiments")),
            ])
        ),

      // Create List Item
      S.listItem()
        .title("Core Pages")
        .icon(FaHamsa)
        // When you open this list item, list out the documents
        // of the type “page"
        .child(
          S.list()
            .title("Core Pages")
            .items([
              // Add Work Landing Page list item
              S.listItem()
                .title("Work")
                .icon(FaGlobeAfrica)
                // .child(S.documentTypeList("workLandingPage").title("Pages")),
                .child(
                  S.editor()
                    .id("workLandingPage")
                    .schemaType("workLandingPage")
                    .documentId("e97736b5-6871-4c3d-bcce-b527b964d9f5")
                ),
              // Add Approach Landing Page list item
              S.listItem()
                .title("Approach")
                .icon(FaGlobeAfrica)
                .child(
                  S.editor()
                    .id("approachLandingPage")
                    .schemaType("approachLandingPage")
                    .documentId("8edd7551-3644-43ba-a718-5060e4db6d5e")
                ),
              // Add Industries list item
              S.listItem()
                .title("Industries")
                .icon(FaGlobeAfrica)
                .child(
                  S.editor()
                    .id("industriesLandingPage")
                    .schemaType("industriesLandingPage")
                    .documentId("9490a6bf-6db0-4db1-8b36-f4f3e2aeff09")
                ),
              // Add Services list item
              S.listItem()
                .title("Services")
                .icon(FaGlobeAfrica)
                // .child(S.documentTypeList("servicesLandingPage").title("Pages")),
                .child(
                  S.editor()
                    .id("servicesLandingPage")
                    .schemaType("servicesLandingPage")
                    .documentId("6cd262d2-c156-46a9-9bde-4ac75b93764d")
                ),
              // Add Stages list item
              S.listItem()
                .title("Stages")
                .icon(FaGlobeAfrica)
                // .child(S.documentTypeList("stagesLandingPage").title("Pages")),
                .child(
                  S.editor()
                    .id("stagesLandingPage")
                    .schemaType("stagesLandingPage")
                    .documentId("8856c1fe-369d-4752-af90-3ff0a3c30efe")
                ),
              // Add Phases list item
              S.listItem()
                .title("Phases")
                .icon(FaGlobeAfrica)
                // .child(S.documentTypeList("phasesLandingPage").title("Pages")),
                .child(
                  S.editor()
                    .id("phasesLandingPage")
                    .schemaType("phasesLandingPage")
                    .documentId("3e0141f0-f8c6-44ac-84ac-97308084ff43")
                ),
              // Add Locations list item
              S.listItem()
                .title("Locations")
                .icon(FaGlobeAfrica)
                // .child(S.documentTypeList("locationsLandingPage").title("Pages")),
                .child(
                  S.editor()
                    .id("locationsLandingPage")
                    .schemaType("locationsLandingPage")
                    .documentId("051b6725-be89-401d-8252-145dfea85025")
                ),
              // Add Clients list item
              S.listItem()
                .title("Clients")
                .icon(FaGlobeAfrica)
                // .child(S.documentTypeList("clientsLandingPage").title("Pages")),
                .child(
                  S.editor()
                    .id("clientsLandingPage")
                    .schemaType("clientsLandingPage")
                    .documentId("70c3df30-89ee-4ad6-921f-c3a6ad7bc49a")
                ),
              // Add Careers list item
              S.listItem()
                .title("Careers")
                .icon(FaGlobeAfrica)
                // .child(S.documentTypeList("careersLandingPage").title("Pages")),
                .child(
                  S.editor()
                    .id("careersLandingPage")
                    .schemaType("careersLandingPage")
                    .documentId("05b06228-2bd8-4fe0-8c73-19397b3b0b71")
                ),
              // Add Locations list item
              S.listItem()
                .title("Contact")
                .icon(FaGlobeAfrica)
                // .child(S.documentTypeList("contactLandingPage").title("Pages")),
                .child(
                  S.editor()
                    .id("contactLandingPage")
                    .schemaType("contactLandingPage")
                    .documentId("29cb5898-65e4-49e1-bc96-620a3b874c10")
                ),
            ])
        ),

      // Create List Item
      S.listItem()
        .title("Custom Pages")
        .icon(FaDiceD6)
        // This automatically gives it properties from the page type
        .schemaType("page")
        // When you open this list item, list out the documents
        // of the type “page"
        .child(S.documentTypeList("page").title("Pages")),

      // Create List Item
      S.listItem()
        .title("Articles")
        .icon(FaNewspaper)
        // This automatically gives it properties from the article type
        .schemaType("article")
        // When you open this list item, list out the documents
        // of the type “article"
        .child(S.documentTypeList("article").title("Articles")),

      /**
       * Our Singleton list items
       */
      S.listItem()
        .title("Navigation Menus")
        .icon(FaCompass)
        .child(
          S.editor()
            .id("siteNav")
            .schemaType("navigation")
            .documentId("siteNav")
        ),

      S.listItem()
        .title("Config")
        .icon(FaGlobe)
        .child(
          S.editor()
            .id("config")
            .schemaType("config")
            .documentId("globalConfig")
        ),
    ]);

// __________________________________________________________________________________________
