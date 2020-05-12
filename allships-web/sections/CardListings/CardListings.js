/**
 *
 * CardListings.js
 * @author Peter Laxalt
 * @description Our main card listings.
 * @example Default: <CardListings visible={true | false} />
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from "react";

// Styles
import { CardListingsStyle, FilterBarStyle } from "./styles.scss";

// Components
import {
  ContentCard,
  ContentCardGlobalStyles,
} from "../../components/lib/ContentCard";

// Begin Component
//////////////////////////////////////////////////////////////////////

export class CardListings extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      availableCategories: [],
      currentCategory: "everything",
      currentAuthor: "everything",
    };

    // Bind our functions
    this.handleCategoryToggle = this.handleCategoryToggle.bind(this);
    this.handleAuthorToggle = this.handleAuthorToggle.bind(this);
  }

  /**
   *
   * @name componentDidMount
   * @description Part of React lifecycle. We're just setting our `content` state to our supplied
   * props safely upon mounting rather than including it in our constructor.
   *
   */
  componentDidMount() {
    let { content, availableCategories } = this.props;

    if (content) {
      this.setState({
        content: content,
        availableCategories: availableCategories,
        currentCategory: "everything",
        currentAuthor: "",
      });
    } else {
      this.setState({
        content: [],
        availableCategories: [],
        currentCategory: "everything",
        currentAuthor: "",
      });
    }
  }

  /**
   *
   * @name handleCategoryToggle
   * @description Filters our `state.content` based on the selected `category`.
   * @param category : string? : Supplied category from `availableCategories`. Defaults to `everything` if invalid.
   *
   */

  handleCategoryToggle(category) {
    let { availableCategories } = this.state;
    let { content } = this.props;

    console.log("HANDLE CATEGORY FIRED");
    console.log(this.state);

    if (availableCategories.includes(category) && category != "everything") {
      // If this category is already selected, unselect it.
      if (this.state.currentCategory == category) {
        this.setState({
          content: content,
          currentCategory: "everything",
        });
      }
      // If this category is not selected, select it.
      else {
        let filteredContent = content.filter(
          (item) => item.fields.Category == category
        );

        this.setState({
          content: filteredContent,
          currentCategory: category,
        });
      }
    }
    // If none of the above, select everything.
    else {
      this.setState({
        content: content,
        currentCategory: "everything",
      });
    }
  }

  /**
   *
   * @name handleAuthorToggle
   * @description Filters our `state.content` based on the selected `author`.
   * @param author : string? : Supplied category from `availableCategories`. Defaults to `everything` if invalid.
   *
   */

  handleAuthorToggle(author) {
    let { currentAuthor } = this.state;

    console.log("HANDLE AUTHOR FIRED");
    console.log(this.state);

    if (currentAuthor != author) {
      this.setState({
        currentAuthor: author,
      });
    } else {
      this.setState({
        currentAuthor: "",
      });
    }
  }

  render() {
    let { showFilterBar, featuredContent } = this.props;

    let {
      content,
      availableCategories,
      currentCategory,
      currentAuthor,
    } = this.state;

    const FilterBar = () => {
      return (
        <FilterBarStyle>
          <div className="card-listings-filter-bar-inner">
            <div className="card-listings-filter-bar-col">
              {availableCategories ? (
                <ul className="card-listings-filter-bar-categories">
                  <li
                    className={`${
                      currentCategory == "everything" ? "active" : "inactive"
                    } btn`}
                    onClick={() => this.handleCategoryToggle("everything")}
                  >
                    Everything
                  </li>
                  {availableCategories.map((category, idx) => {
                    return (
                      <li
                        className={`${
                          currentCategory == category ? "active" : "inactive"
                        } btn`}
                        key={idx}
                        onClick={() => this.handleCategoryToggle(category)}
                      >
                        {category}
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
            <div className="card-listings-filter-bar-col">
              <ul className="card-listings-filter-bar-categories">
                <li
                  className={`${
                    currentAuthor == "By Us" ? "active" : "inactive"
                  } btn`}
                  onClick={() => this.handleAuthorToggle("By Us")}
                >
                  By Us
                </li>
                <li
                  className={`${
                    currentAuthor == "By Others" ? "active" : "inactive"
                  } btn`}
                  onClick={() => this.handleAuthorToggle("By Others")}
                >
                  By Others
                </li>
              </ul>
            </div>
          </div>
        </FilterBarStyle>
      );
    };

    return (
      <CardListingsStyle className="section-card-listings">
        <ContentCardGlobalStyles />
        {!showFilterBar ? null : <FilterBar />}
        <div className="card-listings-list">
          {content
            .filter((item) => item.fields.Author.includes(currentAuthor))
            .map((item, idx) => {
              let { fields } = item;

              if (item.fields.Name && item.fields.Attachments) {
                return (
                  <ContentCard
                    data={fields}
                    isLink={fields.Link ? true : false}
                    key={idx}
                  />
                );
              } else {
                console.log("🛑 Record missing required information:", item);
                return null;
              }
            })}
        </div>
      </CardListingsStyle>
    );
  }
}

// export const CardListings = ({
//   content,
//   showFilterBar,
//   availableCategories,
//   featuredContent,
// }) => {
//   const FilterBar = () => {
//     return (
//       <FilterBarStyle>
//         <div className="card-listings-filter-bar-inner">
//           <div className="card-listings-filter-bar-col">
//             {availableCategories ? (
//               <ul className="card-listings-filter-bar-categories">
//                 <li className="btn active">
//                   Everything
//                 </li>
//                 {availableCategories.map((category, idx) => {
//                   return (
//                     <li className="btn" key={idx}>
//                       {category}
//                     </li>
//                   );
//                 })}
//               </ul>
//             ) : null}
//           </div>
//           <div className="card-listings-filter-bar-col">
//             <ul className="card-listings-filter-bar-categories">
//               <li className="btn">By Us</li>
//               <li className="btn">By Others</li>
//             </ul>
//           </div>
//         </div>
//       </FilterBarStyle>
//     );
//   };

//   return (
//     <CardListingsStyle className="section-card-listings">
//       <ContentCardGlobalStyles />
//       {!showFilterBar ? null : <FilterBar />}
//       <div className="card-listings-list">
//         {content.map((item, idx) => {
//           let { fields } = item;

//           if (item.fields.Name && item.fields.Attachments) {
//             return (
//               <ContentCard
//                 data={fields}
//                 isLink={fields.Link ? true : false}
//                 key={idx}
//               />
//             );
//           } else {
//             console.log("🛑 Record missing required information:", item);
//             return null;
//           }
//         })}
//       </div>
//     </CardListingsStyle>
//   );
// };
