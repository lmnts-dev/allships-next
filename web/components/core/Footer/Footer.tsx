// Core
import React, { Component, ChangeEvent } from "react";

// Components
import { InnerGrid } from "../InnerGrid";
import LazyImage from "../../../utils/lazyImage";

// Styles
import { FooterStyle } from "./styles.scss";

// Utilities
import { QueryUtils } from "../../../constants/Queries";
import {
  LMNTS_NavigationData,
  LMNTS_NavigationItem,
} from "../../../constants/types";
import Link from "next/link";

// Begin Component
// __________________________________________________________________________________________

type FooterProps = {
  handleCommand: (cmd: string) => void;
  navigation: LMNTS_NavigationData;
};

type FormState = {
  complete: boolean;
  value: string;
};

/**
 *
 * @name NewsletterForm
 * @description Simple form to post to Airtable
 *
 */

class NewsletterForm extends Component<any, FormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      complete: false,
      value: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    QueryUtils.addToEmailList(this.state.value);

    this.setState({ complete: true });
  };

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  render() {
    console.log(this.state);

    return (
      <>
        {!this.state.complete ? (
          //@ts-ignore
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              placeholder="> Enter your email"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        ) : (
          <span>Thanks for subscribing!</span>
        )}
      </>
    );
  }
}

/**
 *
 * Footer.js
 * @author Peter Laxalt
 * @description The website footer.
 *
 */

export const Footer: React.FunctionComponent<FooterProps> = ({
  handleCommand,
  navigation,
}) => {
  return (
    <FooterStyle>
      <InnerGrid>
        <div className="footer-inner">
          {/* Left Column */}
          <div className="footer-col __footer-left-col">
            <div className="footer-brand">
              <div className="footer-brand-image">
                <LazyImage src="/gradient-logo.svg" alt="ALLSHIPS" />
              </div>
              <div className="footer-brand-tagline">A Creative Community</div>
            </div>
            <ul>
              {navigation.footer_link_list.length > 0
                ? navigation.footer_link_list.map(
                    (item: LMNTS_NavigationItem, idx: number) => {
                      return (
                        <li key={idx}>
                          <Link href={item.href}>
                            <a onClick={() => handleCommand("launch none")}>
                              {">"} {item.label}
                            </a>
                          </Link>
                        </li>
                      );
                    }
                  )
                : null}

              <li onClick={() => handleCommand("launch launcher")}>
                {">"} Console
              </li>
              <li
                onClick={() => {
                  handleCommand("launch launcher");
                  handleCommand("submit");
                }}
              >
                {">"} Submit Work
              </li>
              <li
                onClick={() => {
                  handleCommand("launch launcher");
                  handleCommand("contact");
                }}
              >
                {">"} Contact
              </li>
            </ul>
          </div>

          <div className="footer-col __footer-center-col">
            <div className="footer-center-image">
              <LazyImage src="/rise-together.png" alt="ALLSHIPS" />
            </div>
          </div>

          {/* _______________________________________________ */}
          {/* Right Column */}
          <div className="footer-col __footer-right-col">
            {/* Right Column __TOP */}
            <div className="footer-newsletter-form">
              <div className="footer-newsletter-image">
                <LazyImage
                  src="/space-for-everyone.svg"
                  alt="Space for Everyone"
                />
              </div>
              <div className="footer-newsletter-form-wrapper">
                <NewsletterForm />
              </div>
            </div>

            {/* _______________________________________________ */}
            {/* Right Column __Bottom */}
            <div className="footer-social-media-and-copyright">
              <ul className="footer-social-media">
                <li>
                  <a
                    href="https://www.instagram.com/allships.co/"
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    <LazyImage
                      src="/icons/ic_instagram.svg"
                      alt="Find us on Instagram"
                    />
                  </a>
                </li>
              </ul>
              <div className="footer-copyright">
                © {new Date().getFullYear()} AllShips New York City, NY
              </div>
            </div>
          </div>
        </div>
      </InnerGrid>
    </FooterStyle>
  );
};

// End Component
// __________________________________________________________________________________________
