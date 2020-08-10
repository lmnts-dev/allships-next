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
    };

    this.maximizeDialog = this.maximizeDialog.bind(this);
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

  render() {
    let {
      handleCommand,
      handleTextChange,
      handleAddItem,
      appState,
    } = this.props;

    return (
      <LauncherDialogStyle>
        {/* <Draggable> */}
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
                {/* <li className="active" onClick={() => handleCommand("launch launcher")}>> Launcher</li> */}
                {/* <li onClick={() => handleCommand("launch frontpage")}>
                  {">"} Frontpage
                </li> */}
                {/* <Link href="/launcher/podcasts">
                  <li>{">"} Podcasts</li>
                </Link>
                <Link href="/launcher/articles">
                  <li>{">"} Articles</li>
                </Link> */}
                <li onClick={() => handleCommand("launch agency")}>
                  {">"} About Us
                </li>
                {/* <li onClick={() => handleCommand("launch editorial")}>> Editorial</li>
                <li onClick={() => handleCommand("launch events")}>> Events</li>
                <li onClick={() => handleCommand("launch resources")}>> Resources</li> */}
                <li onClick={() => handleCommand("help")}>{">"} Help</li>
                <li onClick={() => handleCommand("reset")}>{">"} Reset</li>
              </ul>
            </div>
            <div className="dialog-content launcher-dialog-content">
              <ul className="cmd-list">
                {appState.items.map((item: any, idx: number) => (
                  <li key={idx}>
                    <span className="label">ASR-MOTHERSHIP:~</span>
                    <span>{item.text}</span>
                  </li>
                ))}
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
