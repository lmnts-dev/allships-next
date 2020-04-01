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
  FaNewspaper
} from "react-icons/fa";

// __________________________________________________________________________________________

/**
 * Simple example of web preview
 */
const url = "https://web.peterlaxalt.now.sh/work/";

// const WebPreview = ({ document }) => {
//   const { displayed } = document;

//   return (
//     <>
//       <button style={{ position: "fixed", right: 10, bottom: 90, zIndex: 999, background: "white", borderRadius: 100, padding: 20 }}>
//         Refresh
//       </button>
//       <iframe
//         src={url + displayed.slug.current}
//         frameBorder={0}
//         style={{ width: "100%", height: "100%" }}
//       />
//     </>
//   );
// };

class WebPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      random: 0
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
            padding: 20
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
      S.view.component(WebPreview).title("Web")
    ]);
  }
};

/**
 * Our Hidden Doc Types
 */

const hiddenDocTypes = listItem =>
  ![
    "config",
    "navigation",
    "hiddenItem", // For example purposes
    "hiddenItem", // For example purposes
    "hiddenItem", // For example purposes
    "hiddenItem" // For example purposes
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
                        )
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
                .child(S.documentTypeList("industry").title("Industries")),

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
                        )
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
                .child(S.documentTypeList("experiment").title("Experiments"))
            ])
        ),

      // Create List Item
      S.listItem()
        .title("Pages")
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
        .title("Navigation")
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
        )
    ]);

// __________________________________________________________________________________________
