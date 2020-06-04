/**
 *
 * @name LMNTS-6 Sanity.io Desk Structure
 * @author Peter Laxalt
 * @description LMNTS-6 Desk Structure Model
 *
 */

// __________________________________________________________________________________________

// Core
// import React, { Component } from "react";
import S from "@sanity/desk-tool/structure-builder";

// Icons
import {
  FaGlobe,
  FaPodcast,
  FaCalendar,
  FaBook,
  FaCampground,
  FaUsers,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Registries
import { ArticleRegistry } from "../schemas/content/Article";
import { EventRegistry } from "../schemas/content/Event";
import { PodcastRegistry } from "../schemas/content/Podcast";
import { PageRegistry } from "../schemas/content/Page";
import { ConfigRegistry } from "../schemas/settings/Config";
import { AuthorRegistry } from "../schemas/content/Author";

// __________________________________________________________________________________________

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

      // Articles
      S.listItem()
        // Give it a title
        .title("Articles")
        .icon(FaBook)
        .schemaType(ArticleRegistry.name)
        // When you open this list item, list out the documents
        // of the type “project"
        .child(S.documentTypeList(ArticleRegistry.name).title("Articles")),

      // Events
      S.listItem()
        // Give it a title
        .title("Events")
        .icon(FaCalendar)
        .schemaType(EventRegistry.name)
        // When you open this list item, list out the documents
        // of the type “project"
        .child(S.documentTypeList(EventRegistry.name).title("Events")),

      // Create List Item
      S.listItem()
        .title("Podcasts")
        .icon(FaPodcast)
        // This automatically gives it properties from the page type
        .schemaType(PodcastRegistry.name)
        // When you open this list item, list out the documents
        // of the type “page"
        .child(S.documentTypeList(PodcastRegistry.name).title("Podcasts")),

      // Pages
      S.listItem()
        .title("Pages")
        .icon(FaCampground)
        // This automatically gives it properties from the page type
        .schemaType(PageRegistry.name)
        // When you open this list item, list out the documents
        // of the type “page"
        .child(S.documentTypeList(PageRegistry.name).title("Pages")),

      // Authors
      S.listItem()
        .title("Authors")
        .icon(FaUsers)
        // This automatically gives it properties from the page type
        .schemaType(AuthorRegistry.name)
        // When you open this list item, list out the documents
        // of the type “page"
        .child(S.documentTypeList(AuthorRegistry.name).title("Authors")),

      // Settings
      S.listItem()
        .title("Settings")
        .icon(FaGlobe)
        .child(
          S.editor()
            .id(ConfigRegistry.name)
            .schemaType(ConfigRegistry.name)
            .documentId("globalConfig")
        ),

      // Open Airtable
      S.listItem()
        .title("Open Airtable")
        .icon(FaExternalLinkAlt)
        .child(() =>
          window.open(
            "https://airtable.com/tblYVYIn8Qvez885Q/viwWlwGYVN7C5kRGB"
          )
        ),
    ]);

// __________________________________________________________________________________________

// LEGACY CODE

/**
 * Simple example of web preview
 */
// const url = "http://lmnts-6-three.now.sh/api/preview?secret=lordmeeko?slug=/work/";

// class WebPreview extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       random: 0,
//     };

//     this.resetIframe = this.resetIframe.bind(this);
//   }

//   resetIframe() {
//     this.setState({ random: this.state.random + 1 });
//   }

//   render() {
//     const { displayed } = this.props.document;

//     return (
//       <>
//         <button
//           onClick={this.resetIframe}
//           style={{
//             position: "fixed",
//             right: 10,
//             top: "50%",
//             zIndex: 999,
//             background: "white",
//             borderRadius: 100,
//             padding: 20,
//           }}
//         >
//           Refresh
//         </button>
//         <iframe
//           src={url + displayed.slug.current}
//           frameBorder={0}
//           key={this.state.random}
//           style={{ width: "100%", height: "100%" }}
//         />
//       </>
//     );
//   }
// }

// export const getDefaultDocumentNode = ({ schemaType }) => {
//   // Conditionally return a different configuration based on the schema type
//   if (schemaType === "project") {
//     return S.document().views([
//       S.view.form(),
//       S.view.component(WebPreview).title("Web"),
//     ]);
//   }
// };

/**
 * Our Hidden Doc Types
 */

// const hiddenDocTypes = (listItem) =>
//   ![
//     "config",
//     "navigation",
//     "hiddenItem", // For example purposes
//   ].includes(listItem.getId());
