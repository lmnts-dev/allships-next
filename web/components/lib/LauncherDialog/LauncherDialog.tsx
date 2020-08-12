// Imports
// __________________________________________________________________________________________

// Core
import React, {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  PureComponent,
} from "react";
import LauncherDialogStyle from "./styles.scss";
import { createGlobalStyle } from "styled-components";

// Begin Component
// __________________________________________________________________________________________

type LauncherDialogProps = {
  handleCommand: (cmd: string) => void;
  handleTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAddItem: (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => void;
  appState: any;
};

type LauncherDialogState = {
  isMaximized: boolean;
  showMenu: boolean;
};

/**
 *
 * @name LauncherDialog.js
 * @author Peter Laxalt
 * @description Our main launcher dialog.
 * @example Default: <LauncherDialog visible={true | false} />
 *
 */
export class LauncherDialog extends PureComponent<
  LauncherDialogProps,
  LauncherDialogState
> {
  constructor(props: LauncherDialogProps) {
    super(props);

    this.state = {
      isMaximized: false,
      showMenu: false,
    };

    this.maximizeDialog = this.maximizeDialog.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  maximizeDialog = () => {
    if (this.state.isMaximized) {
      this.setState({
        isMaximized: false,
      });
    } else {
      this.setState({
        isMaximized: true,
      });
    }
  };

  toggleMenu = () => {
    if (this.state.showMenu) {
      this.setState({
        showMenu: false,
      });
    } else {
      this.setState({
        showMenu: true,
      });
    }
  };

  render() {
    let {
      handleCommand,
      handleTextChange,
      handleAddItem,
      appState,
    } = this.props;

    const BodyScrollLock = createGlobalStyle`
      body, html {
        overflow: hidden !important;
      }
    `;

    return (
      <LauncherDialogStyle>
        {/* ___________________________________________ */}
        {/* Lock Body Scroll */}
        <BodyScrollLock />

        {/* ___________________________________________ */}
        {/* Dialog Itself */}
        <div
          className={`dialog launcher-dialog-inner ${
            this.state.isMaximized ? "__maximized" : ""
          }`}
        >
          <div className="dialog-header launcher-dialog-header">
            <div className="col title">ASR-NXS LAUNCHER v1.01</div>
            <div
              className="col toggle __maximize"
              onClick={() => this.maximizeDialog()}
            >
              <figure />
            </div>
            <div
              className="col toggle"
              onClick={() => handleCommand("launch none")}
            >
              X
            </div>
          </div>
          <div className="launcher-dialog-structure">
            <div className="launcher-dialog-sidebar">
              <ul className="launcher-commands">
                <li
                  className={`__mobile-visible ${
                    this.state.showMenu ? `active` : ``
                  }`}
                  onClick={() => this.toggleMenu()}
                >
                  {this.state.showMenu
                    ? `${"-"} Hide Menu Commands`
                    : `${">"} Show Menu Commands`}
                </li>
                <li
                  className={`__alt ${
                    this.state.showMenu
                      ? `__mobile-menu-visible`
                      : `__mobile-menu-hidden`
                  }`}
                  onClick={() => handleCommand("mission")}
                >
                  {">"} Our Mission
                </li>
                <li
                  className={`__alt __is-link ${
                    this.state.showMenu
                      ? `__mobile-menu-visible`
                      : `__mobile-menu-hidden`
                  }`}
                >
                  <a href="mailto: dave@allships.co" target="_blank">
                    {">"} Submit Work
                  </a>
                </li>
                <li
                  className={`__alt __is-link ${
                    this.state.showMenu
                      ? `__mobile-menu-visible`
                      : `__mobile-menu-hidden`
                  }`}
                >
                  <a href="mailto: dave@allships.co" target="_blank">
                    {">"} Get in touch
                  </a>
                </li>
                <li
                  className={`__alt __is-link ${
                    this.state.showMenu
                      ? `__mobile-menu-visible`
                      : `__mobile-menu-hidden`
                  }`}
                >
                  <a
                    href="https://www.instagram.com/allships.co/"
                    target="_blank"
                  >
                    {">"} Follow Us
                  </a>
                </li>
                <li
                  className={`${
                    this.state.showMenu
                      ? `__mobile-menu-visible`
                      : `__mobile-menu-hidden`
                  }`}
                  onClick={() => handleCommand("help")}
                >
                  {">"} Help
                </li>
                <li
                  className={`${
                    this.state.showMenu
                      ? `__mobile-menu-visible`
                      : `__mobile-menu-hidden`
                  }`}
                  onClick={() => handleCommand("reset")}
                >
                  {">"} Reset
                </li>
              </ul>
            </div>
            <div className="dialog-content launcher-dialog-content">
              <ul className="cmd-list">
                {appState.items.map((item: any, idx: number) => {
                  if (item.text.length > 0) {
                    return (
                      <li key={idx} className={item.addClass || undefined}>
                        <span className="label">
                          <span>ASR</span>
                          <span className="__mobile-hidden">-MOTHERSHIP</span>
                          <span>:~</span>
                        </span>
                        <span className="string">{item.text}</span>
                      </li>
                    );
                  } else {
                    return (
                      <li key={idx} className="__line-break">
                        <br />
                      </li>
                    );
                  }
                })}
                <li className="launcher-input-wrapper">
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
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* </Draggable> */}
      </LauncherDialogStyle>
    );
  }
}
