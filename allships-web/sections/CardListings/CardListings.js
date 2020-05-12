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

/**
 *
 * @name FeaturedItems
 * @description Our featured items from the given props.
 * @params currentAuthor
 * @params featuredContent
 *
 */

export class FeaturedItems extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentIdx: 0,
      totalIdx: 0,
    };
  }

  componentDidMount() {
    let { featuredContent } = this.props;

    // Check for the total length of the `items` provided.
    if (featuredContent) {
      if (featuredContent.length) {
        this.setState({
          totalIdx: featuredContent.length,
        });
      } else {
        this.setState({
          totalIdx: 0,
        });
      }
    } else {
      this.setState({
        totalIdx: 0,
      });
    }
  }

  render() {
    let { currentAuthor, featuredContent } = this.props;
    let { currentIdx, totalIdx } = this.state;

    console.log("totalIdx", totalIdx);

    return (
      <div className="section-featured-items">
        <ContentCard
          data={featuredContent[currentIdx].fields}
          isLink={featuredContent[currentIdx].fields.Link ? true : false}
        />
      </div>
    );
  }
}

/**
 *
 * @name CardListings
 * @description Our app's card listings to display our items.
 * @param availableCategories : array : The categories of the supplied records.
 * @param featuredContent : object ? : Featured Airtable records. Defaults to hidden.
 * @param content : object : All Airtable records.
 * @param showFilterBar : boolean ? : Show or hide filter bar. Defaults to hidden.
 *
 */
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
    /**
     *
     * Variables
     *
     */
    let { showFilterBar } = this.props;
    let {
      content,
      availableCategories,
      currentCategory,
      currentAuthor,
    } = this.state;
    let featuredContent = content.filter(
      (item) => item.fields.Featured == true
    );

    // Put our logic to check for featured items here.
    let showFeaturedItems = featuredContent.length > 0 ? true : false;

    /**
     *
     * @name FilterBar
     * @description Bar to show available filters.
     *
     */
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

    /**
     *
     * @name CardListings
     * @returns Our Card Listings, FilterBar, and FeaturedItems.
     *
     */
    return (
      <CardListingsStyle className="section-card-listings">
        <ContentCardGlobalStyles />
        {!showFilterBar ? null : <FilterBar />}
        {!showFeaturedItems ? null : (
          <FeaturedItems
            featuredContent={featuredContent}
            currentAuthor={currentAuthor}
          />
        )}
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
