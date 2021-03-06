// Constants
// import { GlobalStyle } from "../../../constants/styles/Global";

// Components
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";
import { Frame } from "../Frame";
import { LauncherDialog } from "../../lib/LauncherDialog";

// Styles
import { LayoutStyle } from "./styles.scss";
import React, { ChangeEvent, FormEvent, MouseEvent } from "react";
import { GrainCover } from "../../lib/GrainCover";
import { LMNTS_NavigationData } from "../../../constants/types";

// Begin Component
// __________________________________________________________________________________________

type Props = {
  appState: any;
  handleTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAddItem: (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => void;
  handleCommand: (cmd: string) => void;
  shouldFocus: boolean;
  children: any;
  navigation: LMNTS_NavigationData;
};

/**
 *
 * Layout.js
 * @author Peter Laxalt
 * @description The website layout.
 * @param appState = object = this.state from _app.js
 * @param handleCommand = object = this.handleCommand from _app.js
 * @param handleTextChange = object = this.handleTextChange from _app.js
 * @param handleAddItem = object = this.handleAddItem from _app.js
 * @param shouldFocus = boolean = Scroll listeners from _app.js
 * @param children = void = Children to be wrapped
 */
export const Layout: React.FunctionComponent<Props> = ({
  appState,
  handleCommand,
  handleTextChange,
  handleAddItem,
  shouldFocus,
  children,
  navigation,
}) => {
  return (
    <>
      <GrainCover />
      {appState.visibleDialog == "launcher" ? (
        <LauncherDialog
          handleCommand={handleCommand}
          handleTextChange={handleTextChange}
          handleAddItem={handleAddItem}
          appState={appState}
          navigation={navigation}
        />
      ) : (
        false
      )}
      <Navigation
        appState={appState}
        handleTextChange={handleTextChange}
        handleAddItem={handleAddItem}
        shouldFocus={shouldFocus}
        handleCommand={handleCommand}
        navigation={navigation}
      />
      <Frame />
      <LayoutStyle className="main-wrapper">{children}</LayoutStyle>
      <Footer navigation={navigation} handleCommand={handleCommand} />
    </>
  );
};
