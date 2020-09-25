// Core
import React, { ChangeEvent, FormEvent, MouseEvent } from "react";

// Styles
import { NavigationStyle } from "./styles.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "../../lib/Icon";
import { GlobalStyle } from "../../../constants/styles/Global";

// Begin Component
// __________________________________________________________________________________________

type Props = {
  shouldFocus: boolean;
  appState: any;
  handleTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAddItem: (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => void;
  handleCommand: (cmd: string) => void;
};

/**
 *
 * @name components/Navigation/Navigation.tsx
 * @author Peter Laxalt
 * @description The website navigation
 * @param shouldFocus = boolean ? = Passed from our scroll listeners.
 * @param appState = boolean = this.state from _app.js
 * @param handleTextChange = void = this.handleTextChange from _app.js
 * @param handleAddItem = void = this.handleAddItem from _app.js
 * @param handleCommand = void = this.handleCommand from _app.js
 *
 */
export const Navigation: React.FunctionComponent<Props> = ({
  shouldFocus,
  appState,
  handleTextChange,
  handleAddItem,
  handleCommand,
}) => {
  // console.log(appState);

  let router = useRouter();

  console.log(router);

  return (
    <>
      <GlobalStyle />
      <NavigationStyle shouldFocus={shouldFocus}>
        <div className="nav-inner">
          {/* Column: Launcher Button */}
          <div className="col home-btn">
            <Link href="/">
              <a className="launcher-btn-wrapper">
                <span className="label">
                  <span
                    className={`${
                      router.pathname == "/" ? `__hidden` : `__visible`
                    }`}
                  >
                    {router.pathname == "/" ? "* " : "< "}
                  </span>
                  <Icon name="logotype" />
                </span>
              </a>
            </Link>
          </div>

          {/* Column: Launcher Input */}
          <div className="col launcher-input">
            <span className="launcher-input-wrapper">
              {appState.visibleDialog == "launcher" ? (
                <span className="label">FROM THE INSIDE OUT</span>
              ) : (
                <>
                  <span className="label">ASR-MOTHERSHIP:~</span>
                  <form className="launcher-input-el" onSubmit={handleAddItem}>
                    <input
                      type="text"
                      placeholder="ENTER COMMAND"
                      onChange={handleTextChange}
                      value={appState.text}
                    />
                    <span className="fake-cursor" />
                    <button style={{ display: "none" }} onClick={handleAddItem}>
                      Add
                    </button>
                  </form>
                </>
              )}
            </span>
          </div>

          {/* Column: Launcher Status */}
          <div className="col launcher-status">
            <span className="launcher-status-wrapper">
              <span className="label">SYSTEM STATUS v1.02x OK</span>
            </span>
          </div>

          {/* Column: Time */}
          <div
            className="col launcher-mission"
            onClick={() => {
              handleCommand("launch launcher");
              handleCommand("mission");
            }}
          >
            <span
              className="launcher-mission-wrapper"
              onClick={() => {
                handleCommand("launch launcher");
                handleCommand("mission");
              }}
            >
              OUR MISSION {">"}
            </span>
          </div>
        </div>
      </NavigationStyle>
    </>
  );
};

// End Component
// __________________________________________________________________________________________
