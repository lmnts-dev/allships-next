// Imports
// __________________________________________________________________________________________

// Core
import React, { PureComponent } from "react";

// Styles
import { CardListingsStyle, FilterBarStyle } from "./styles.scss";

// Components
import { ContentCard, ContentCardGlobalStyles } from "../../lib/ContentCard";
import { SiteHead } from "../SiteHead";
import { PageHero } from "../../../sections/PageHero";
import { LMNTS_GenericListing } from "../../../constants/types";

// Begin Component
// __________________________________________________________________________________________

type CardListingsProps = {
  availableCategories: string[];
  featuredContent: LMNTS_GenericListing[];
  content: LMNTS_GenericListing[];
  isFrontPage?: boolean;
  showFilterBar: boolean;
  showPageHero: boolean;
  showFeaturedListing: boolean;
  authorFilterOverride?: "By Us" | "By Others";
};

type CardListingsState = {
  content: LMNTS_GenericListing[];
  availableCategories: string[];
  currentCategory: string;
  currentAuthor: string;
  featuredItems: LMNTS_GenericListing[];
  featuredItemIdx: number;
  mobileCategoryBarVisible: boolean;
};

type FeaturedItemsProps = {
  featuredItems: LMNTS_GenericListing[];
  featuredItemIdx: number;
};

/**
 *
 * @name CardListings
 * @description Our app's card listings to display our items.
 * @param availableCategories : array : The categories of the supplied records.
 * @param featuredContent : object ? : Featured Airtable records. Defaults to hidden.
 * @param content : object : All Airtable records.
 * @param showFilterBar : boolean ? : Show or hide filter bar. Defaults to hidden.
 * @param showPageHero : boolean ? : Show or hide the page hero. Defaults to hidden.
 *
 */
export class CardListings extends PureComponent<
  CardListingsProps,
  CardListingsState
> {
  constructor(props: CardListingsProps) {
    super(props);

    this.state = {
      content: [],
      availableCategories: [],
      currentCategory: "everything",
      currentAuthor: "everything",
      featuredItems: [],
      featuredItemIdx: 0,
      mobileCategoryBarVisible: false,
    };

    // Bind our functions
    this.handleCategoryToggle = this.handleCategoryToggle.bind(this);
    this.handleAuthorToggle = this.handleAuthorToggle.bind(this);
    this.handleFeaturedIdxUpdate = this.handleFeaturedIdxUpdate.bind(this);
    this.toggleMobileCategoryBar = this.toggleMobileCategoryBar.bind(this);
  }

  componentDidMount() {
    let { content, availableCategories, featuredContent } = this.props;

    if (content) {
      this.setState({
        content: content,
        availableCategories: availableCategories,
        currentCategory: "everything",
        currentAuthor: this.props.authorFilterOverride
          ? this.props.authorFilterOverride
          : "",
        featuredItems: featuredContent,
        mobileCategoryBarVisible: false,
      });
    } else {
      this.setState({
        content: [],
        availableCategories: [],
        currentCategory: "everything",
        currentAuthor: this.props.authorFilterOverride
          ? this.props.authorFilterOverride
          : "",
        featuredItems: [],
        mobileCategoryBarVisible: false,
      });
    }
  }

  /**
   *
   * @name toggleMobileCategoryBar
   * @description Show / hide mobile category bar.
   *
   */

  toggleMobileCategoryBar() {
    let { mobileCategoryBarVisible } = this.state;

    if (mobileCategoryBarVisible) {
      this.setState({
        mobileCategoryBarVisible: false,
      });
    } else {
      this.setState({
        mobileCategoryBarVisible: true,
      });
    }
  }

  /**
   *
   * @name handleCategoryToggle
   * @description Filters our `state.content` based on the selected `category`.
   * @param category : string : Supplied category from `availableCategories`. Defaults to `everything` if invalid.
   *
   */

  handleCategoryToggle(category: string) {
    let { availableCategories } = this.state;
    let { content, featuredContent } = this.props;

    if (window && this.props.isFrontPage) {
      window.scrollTo(0, 0);
    }

    if (availableCategories.includes(category) && category != "everything") {
      // ___________________________________
      // If this category is already selected, unselect it.
      if (this.state.currentCategory == category) {
        this.setState({
          content: content,
          featuredItems: featuredContent,
          featuredItemIdx: 0,
          currentCategory: "everything",
        });
      }
      // ___________________________________
      // If this category is not selected, select it.
      else {
        // let filteredContent: LMNTS_GenericListing[] = content.filter(
        //   (item: LMNTS_GenericListing) =>
        //     item.categories ? item.categories.includes(category) : false
        // );

        let filteredFeaturedContent: LMNTS_GenericListing[] = featuredContent.filter(
          (item: LMNTS_GenericListing) =>
            item.categories ? item.categories.includes(category) : false
        );

        this.setState({
          // content: filteredContent,
          featuredItems: filteredFeaturedContent,
          featuredItemIdx: 0,
          currentCategory: category,
        });
      }
    }
    // ___________________________________
    // If none of the above, select everything.
    else {
      this.setState({
        content: content,
        featuredItems: featuredContent,
        featuredItemIdx: 0,
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

  handleAuthorToggle(author: string) {
    let { currentAuthor } = this.state;

    if (window && this.props.isFrontPage) {
      window.scrollTo(0, 0);
    }

    if (currentAuthor != author) {
      this.setState({
        currentAuthor: author !== "By Others" ? "By Us" : "By Others",
      });
    } else {
      this.setState({
        currentAuthor: "",
      });
    }
  }

  /**
   *
   * @name handleFeaturedIdxUpdate
   * @description Our featured items from the given props.
   * @params incrementing : boolean : If true, add to featuredItemIdx. If false, subtract from featuredItemIdx.
   * @params totalIdx : number : Total number of items to loop through.
   *
   */
  handleFeaturedIdxUpdate(incrementing: boolean, totalIdx: number) {
    let { featuredItemIdx } = this.state;
    totalIdx = totalIdx - 1;

    if (totalIdx != 0) {
      if (incrementing) {
        if (featuredItemIdx < totalIdx) {
          this.setState({
            featuredItemIdx: featuredItemIdx + 1,
          });
        } else {
          this.setState({
            featuredItemIdx: 0,
          });
        }
      } else {
        if (featuredItemIdx === 0) {
          this.setState({
            featuredItemIdx: totalIdx,
          });
        } else {
          this.setState({
            featuredItemIdx: featuredItemIdx - 1,
          });
        }
      }
    } else {
      this.setState({
        featuredItemIdx: totalIdx,
      });
    }
  }

  render() {
    /**
     *
     * Variables
     *
     */
    let { showFilterBar, showPageHero } = this.props;
    let {
      content,
      availableCategories,
      currentCategory,
      currentAuthor,
      featuredItems,
      mobileCategoryBarVisible,
    } = this.state;

    // Put our logic to check for featured items here.
    let showFeaturedItems = this.props.showFeaturedListing
      ? featuredItems.length > 0
        ? true
        : false
      : false;

    /**
     *
     * @name FilterBarDesktop
     * @description Bar to show available filters.
     *
     */
    const FilterBarDesktop = () => {
      console.log(this.state);

      return (
        <FilterBarStyle className="filter-bar __visible-desktop">
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
                  {availableCategories.map((category: string, idx: number) => {
                    if (
                      content &&
                      content.filter(
                        (item: LMNTS_GenericListing) =>
                          item &&
                          item.categories &&
                          item.categories.includes(category) &&
                          item.author == currentAuthor
                      ).length > 0
                    ) {
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
                    } else {
                      return null;
                    }
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
     * @name FilterBarMobile
     * @description Bar to show available filters.
     *
     */
    const FilterBarMobile = () => {
      // _________________________________________________________
      // Get the current available categories of the content
      let availableCategoriesWithDuplicates = content
        ? content
            .filter(
              (item: LMNTS_GenericListing) =>
                item.author &&
                item &&
                item.author.includes(currentAuthor) &&
                (currentCategory == "everything"
                  ? true
                  : item.categories &&
                    item.categories.includes(currentCategory))
            )
            .map((item: LMNTS_GenericListing) => {
              if (item.categories) {
                return item.categories.map((category: string) => {
                  return category;
                })[0];
              } else {
                return null;
              }
            })
        : [];

      // _________________________________________________________
      // Remove duplicates and get the count
      let availableCategoriesWithoutDuplicates =
        availableCategoriesWithDuplicates.length > 0
          ? Array.from(new Set(availableCategoriesWithDuplicates))
          : [];

      let availableCategoriesCount =
        availableCategoriesWithoutDuplicates.length + 1; // Add one for "everything"

      let filterBarText = !mobileCategoryBarVisible
        ? `${availableCategoriesCount} Categories ▼`
        : "Close";

      return (
        <FilterBarStyle className="filter-bar __visible-mobile __visible-tablet">
          <div className="card-listings-filter-bar-inner">
            <div className="card-listings-filter-bar-col">
              <ul className="card-listings-filter-bar-categories">
                <li
                  className={`btn`}
                  onClick={() => this.toggleMobileCategoryBar()}
                >
                  {currentCategory == "everything"
                    ? filterBarText
                    : currentCategory + " ▼"}
                </li>
              </ul>
              {availableCategories && mobileCategoryBarVisible ? (
                <ul className="card-listings-filter-bar-categories-mobile __visible-mobile __visible-tablet">
                  <li className={`__categories-headline btn`}>
                    <span>Select a Category...</span>
                    <span
                      className="__categories-close"
                      onClick={() => this.toggleMobileCategoryBar()}
                    >
                      X
                    </span>
                  </li>
                  <li
                    className={`${
                      currentCategory == "everything" ? "active" : "inactive"
                    } btn`}
                    onClick={() => this.handleCategoryToggle("everything")}
                  >
                    Everything
                  </li>
                  {availableCategories.map((category, idx) => {
                    if (
                      content &&
                      content.filter(
                        (item: LMNTS_GenericListing) =>
                          item &&
                          item.categories &&
                          item.categories.includes(category) &&
                          item.author == currentAuthor
                      ).length > 0
                    ) {
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
                    } else {
                      return null;
                    }
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
     * @name FeaturedItems
     *
     */
    const FeaturedItems: React.FunctionComponent<FeaturedItemsProps> = ({
      featuredItems,
      featuredItemIdx,
    }) => {
      return (
        <div className="section-featured-items">
          {featuredItems.length > 1 ? (
            <div className="featured-items-navigation">
              <span
                onClick={() =>
                  this.handleFeaturedIdxUpdate(false, featuredItems.length)
                }
                className="featured-items-previous"
              >{`<`}</span>
              <span
                onClick={() =>
                  this.handleFeaturedIdxUpdate(true, featuredItems.length)
                }
                className="featured-items-next"
              >
                {">"}
              </span>
            </div>
          ) : null}

          {featuredItems[featuredItemIdx] ? (
            <ContentCard
              data={featuredItems[featuredItemIdx]}
              isLink={featuredItems[featuredItemIdx].link ? true : false}
              isSanityContent={featuredItems[featuredItemIdx].isSanityContent}
              isFeatured
            />
          ) : null}
        </div>
      );
    };

    /**
     *
     * @name CardListings
     * @returns Our Card Listings, FilterBar, and FeaturedItems.
     *
     */

    // Capitalize our current category.
    let capitalCategory =
      this.state.currentCategory.charAt(0).toUpperCase() +
      this.state.currentCategory.slice(1);

    return (
      <CardListingsStyle className="section-card-listings">
        {!showPageHero ? null : (
          <SiteHead
            title={`ALLSHIPS | ${
              this.state.currentCategory == "everything"
                ? " A Creative Community"
                : capitalCategory
            }`}
          />
        )}
        <ContentCardGlobalStyles />
        {!showPageHero ? null : (
          <PageHero currentHero={this.state.currentCategory} />
        )}
        {!showFilterBar ? null : <FilterBarDesktop />}
        {!showFilterBar ? null : <FilterBarMobile />}
        {!showFeaturedItems ? null : (
          <FeaturedItems
            featuredItems={featuredItems.filter((item: LMNTS_GenericListing) =>
              item.author ? item.author.includes(currentAuthor) : item
            )}
            featuredItemIdx={this.state.featuredItemIdx}
          />
        )}
        <div className="card-listings-list">
          {content
            .filter(
              (item: LMNTS_GenericListing) =>
                item.author &&
                item &&
                item.author.includes(currentAuthor) &&
                (currentCategory == "everything"
                  ? true
                  : item.categories &&
                    item.categories.includes(currentCategory))
            )
            .map((item: LMNTS_GenericListing, idx: number) => {
              if (showFeaturedItems) {
                if (item.title && item.thumbnail_image) {
                  return (
                    <ContentCard
                      data={item}
                      isLink={item.link ? true : false}
                      isSanityContent={item.isSanityContent}
                      key={idx}
                    />
                  );
                } else {
                  console.log("🛑 Record missing required information:", item);
                  return null;
                }
              } else {
                if (item.title && item.thumbnail_image) {
                  return (
                    <ContentCard
                      data={item}
                      isLink={item.link ? true : false}
                      isSanityContent={item.isSanityContent}
                      key={idx}
                    />
                  );
                } else {
                  console.log("🛑 Record missing required information:", item);
                  return null;
                }
              }
            })}
        </div>
      </CardListingsStyle>
    );
  }
}
