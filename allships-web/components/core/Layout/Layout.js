/**
 *
 * Layout.js
 * @author Peter Laxalt
 * @description The website layout.
 *
 */

// Constants
import { GlobalStyle } from "../../../constants/styles/Global";

// Components
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";
import { SiteHead } from "../SiteHead";
import { Frame } from "../Frame";

// Styles
import { LayoutStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Layout = ({ appState, handleCmd, handleAddCmd, shouldFocus, children }) => {
  return (
    <>
      <GlobalStyle />
      <SiteHead title="Laxalt & McIver" />
      <Navigation
        appState={appState}
        handleCmd={handleCmd}
        handleAddCmd={handleAddCmd}
        shouldFocus={shouldFocus}
      />
      {
        // @ts-ignore
        <Frame shouldFocus={shouldFocus} />
      }
      <LayoutStyle className="main-wrapper">{children}</LayoutStyle>
      <Footer />
    </>
  );
};
