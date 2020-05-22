// Core
import React, { ChangeEvent, FormEvent, MouseEvent } from "react";

// Styles
import { NavigationStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

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
 * @description The website navigation.
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

  return (
    <>
      <NavigationStyle shouldFocus={shouldFocus}>
        <div className="nav-inner">
          {/* Column: Launcher Button */}
          <div className="col launcher-btn">
            <span className="launcher-btn-wrapper">
              <span className="icon">
                <figure />
                <figure />
                <figure />
              </span>
              <span
                className="label"
                onClick={() => handleCommand("launch launcher")}
              >
                Open Launcher
              </span>
            </span>
          </div>

          {/* Column: Launcher Input */}
          <div className="col launcher-input">
            <span className="launcher-input-wrapper">
              {appState.visibleDialog == "launcher" ? (
                <span className="label">FROM THE INSIDE OUT</span>
              ) : (
                <>
                  <span className="label">ASR-MOTHERSHIP:~</span>
                  <form
                    className="launcher-input-el"
                    onSubmit={handleAddItem}
                  >
                    <input
                      type="text"
                      placeholder="ENTER COMMAND"
                      onChange={handleTextChange}
                      value={appState.text}
                    />
                    <span className="fake-cursor" />
                    <button
                      style={{ display: "none" }}
                      onClick={handleAddItem}
                    >
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
              <span className="label">{">"} SYSTEM STATUS v1.02x OK</span>
            </span>
          </div>

          {/* Column: Time */}
          <div className="col launcher-time">
            <span className="launcher-time-wrapper">
              <span className="label">13:23:12:2414</span>
            </span>
          </div>
        </div>
      </NavigationStyle>
    </>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
