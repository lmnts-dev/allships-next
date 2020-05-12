/**
 *
 * Footer.js
 * @author Peter Laxalt
 * @description The website footer.
 *
 */

// Core
import React from "react";

// Components
import { InnerGrid } from "../InnerGrid";
import LazyImage from "../../../utils/lazyImage";

// Styles
import { FooterStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

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
                <input type="text" placeholder="> Enter your email address" />
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
              <div class="footer-copyright">
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
