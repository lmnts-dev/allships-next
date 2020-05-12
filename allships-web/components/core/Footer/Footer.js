/**
 *
 * Footer.js
 * @author Peter Laxalt
 * @description The website footer.
 *
 */

// Core
import React, { Component } from "react";

// Components
import { InnerGrid } from "../InnerGrid";
import LazyImage from "../../../utils/lazyImage";

// Data
import { addToEmailList } from "../../../clients";

// Styles
import { FooterStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

class NewsletterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: false,
      value: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    addToEmailList(this.state.value);

    this.setState({ complete: true });
  };

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <>
        {!this.state.complete ? (
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              placeholder="> Enter your email address"
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

export const Footer = () => {
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
              <div className="footer-brand-tagline">A Creative Coalition</div>
            </div>
            <ul>
              <li>> Launcher</li>
              <li>> Help</li>
              <li>> Contact</li>
            </ul>
          </div>

          <div className="footer-col __footer-center-col">
            <div className="footer-center-image">
              <LazyImage src="/rise-together.png" alt="ALLSHIPS" />
            </div>
          </div>

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

            {/* Right Column __Bottom */}
            <div className="footer-social-media-and-copyright">
              <ul className="footer-social-media">
                <li>
                  <LazyImage
                    src="/icons/ic_instagram.svg"
                    alt="Find us on Instagram"
                  />
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
//////////////////////////////////////////////////////////////////////
