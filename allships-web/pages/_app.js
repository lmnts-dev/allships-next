// Core
import React from "react";
import App from "next/app";
import { createGlobalStyle } from "styled-components";

// Components
import { Layout } from "../components/core/Layout";

// Constants
import { Theme } from "../constants/Theme";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * /pages/_app_.js
 * @author Peter Laxalt
 * @description The wrapper around every page. This is the best place to load data and
 * @description store it in our React Context to be accessible anywhere, so we are doing
 * @description one call for all data at a time.
 *
 */
class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      /**
       *
       * @name Dialog
       *
       */
      // visibleDialog: "launcher",
      visibleDialog: "none",

      /**
       *
       * @name Scroll States
       *
       */
      lastScrollY: 0,
      idleTime: 0,
      scrollDirection: "unset",
      focus: false,
      inactiveTime: 0,

      /**
       *
       * @name MOTHERSHIP: COMMAND STATES
       *
       */
      items: [
        {
          id: "1",
          text: "INITIALIZING",
          done: false,
        },
        {
          id: "2",
          text: "DOWNLOADING [XXXXXXXXX] 100%",
          done: false,
        },
        {
          id: "3",
          text: "CURRENT COMMANDS:",
          done: false,
        },
        {
          id: "4",
          text:
            "- SET_COLOR <primary | secondary | bg | text | dialog> <COLOR_NAME>",
          done: false,
        },
        {
          id: "23525",
          text: "- LAUNCH <FRONTPAGE>",
          done: false,
        },
        {
          id: "5",
          text: "- HELP",
          done: false,
        },
        {
          id: "6",
          text: "- RESET",
          done: false,
        },
      ],
      text: "",
      command: "",
      prevCommand: "",

      /**
       *
       * @name MOTHERSHIP: COLOR STATES
       *
       */
      primaryColor: Theme.Color.UltraRed,
      secondaryColor: Theme.Color.HackerGold,
      bgColor: Theme.Color.HackerGold,
      dialogColor: Theme.Color.Black,
      textColor: Theme.Color.UltraRed,
    };

    // Bind functions.
    this.handleScroll = this.handleScroll.bind(this);
    this.checkScrollDirection = this.checkScrollDirection.bind(this);
    this.checkForFocus = this.checkForFocus.bind(this);

    // Bind MOTHERSHIP functions
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleCommand = this.handleCommand.bind(this);
  }

  /**
   *
   * Once mounted
   *
   */

  componentDidMount() {
    // Begin listening for scroll time once mounted.
    // Run the handScroll function once we are on the clientside.
    // window.addEventListener("scroll", this.handleScroll, { passive: true });
    // Check if we should focus the nav & frame or not.
    // this.checkForFocus();
  }

  /**
   *
   * @name handleCommand
   * @param cmd: string
   * @description: Handle our commands coming in from MOTHERSHIP input.
   *
   */

  handleCommand(cmd) {
    let currentCmd = cmd.toLowerCase();

    /**
     *
     * @name set_color
     * @param property: bg | primary | secondary | dialog | text
     * @param color: string
     * @example > set_color bg red
     * @description: Change app colors.
     *
     */
    if (currentCmd.includes("set_color")) {
      // console.log("VALID");

      let property = currentCmd.split(" ")[1];
      let color = currentCmd.split(" ")[2];

      if (property == "bg") {
        this.setState({
          bgColor: color,
        });
      } else if (property == "primary") {
        this.setState({
          primaryColor: color,
        });
      } else if (property == "secondary") {
        this.setState({
          secondaryColor: color,
        });
      } else if (property == "dialog") {
        this.setState({
          dialogColor: color,
        });
      } else if (property == "text") {
        this.setState({
          textColor: color,
        });
      }
    } else if (currentCmd.includes("launch")) {
      /**
       *
       * @name launch
       * @param property: sample
       * @example > launch sample
       * @description: Launch apps.
       *
       */
      // console.log("VALID");

      let property = currentCmd.split(" ")[1];

      this.setState({
        visibleDialog: property,
      });
    }

    // CMD: Invert
    else if (currentCmd.includes("invert")) {
      // console.log("VALID");

      let color = currentCmd.split("invert ")[1];

      this.setState({
        invert: color,
      });
    }

    // CMD: Help
    else if (currentCmd.includes("help")) {
      let helpMsg = [
        {
          id: Math.random().toString(36).substring(7),
          text: "",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "~~~~~~~~~~~~~~~~~~~~~~~~~",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "NEED HELP?",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "CURRENT COMMANDS:",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text:
            "- SET_COLOR <primary | secondary | bg | text | dialog> <COLOR_NAME>",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "- LAUNCH <FRONTPAGE>",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "- HELP",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "- RESET",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "~~~~~~~~~~~~~~~~~~~~~~~~~",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "",
          done: false,
        },
      ];

      this.setState((prevState) => ({
        items: prevState.items.concat(helpMsg),
      }));
    }

    // CMD: Reset
    else if (currentCmd.includes("reset")) {
      this.setState({
        items: [
          {
            id: Math.random().toString(36).substring(7),
            text: "CONSOLE CLEARED",
            done: false,
          },
        ],
        primaryColor: Theme.Color.UltraRed,
        secondaryColor: Theme.Color.HackerGold,
        bgColor: Theme.Color.HackerGold,
        dialogColor: Theme.Color.Black,
        textColor: Theme.Color.UltraRed,
      });
    }

    // CMD: Not Found
    else {
      let errorMessage = [
        {
          id: Math.random().toString(36).substring(7),
          text: "COMMAND '" + cmd + "' NOT FOUND",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "TYPE 'HELP' FOR LIST OF COMMANDS",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "",
          done: false,
        },
      ];

      this.setState((prevState) => ({
        items: prevState.items.concat(errorMessage),
      }));
    }

    // Clear & reset input
    this.setState({
      command: "",
      prevCommand: cmd,
    });
  }

  /**
   *
   * @name handleTextChange
   * @param e: Event from input.
   * @description: Handle text changing in our input.
   *
   */
  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  /**
   *
   * @name handleAddItem
   * @param e: Event from input.
   * @description: Handle adding items to our command list
   *
   */
  handleAddItem(e) {
    e.preventDefault();

    var newItem = {
      id: Date.now(),
      text: this.state.text,
      done: false,
    };

    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: "",
      command: this.state.text,
    }));

    this.handleCommand(this.state.text);
  }

  /**
   *
   * @name handleScroll
   * @param e: Data from our scroll event listener.
   * @description: Monitor our scroll activity and pass it to
   * our Layout Component for easy access.
   *
   */
  handleScroll() {
    // console.log(e);

    // Check scroll direction.
    this.checkScrollDirection();

    // Assign our new value.
    this.setState({
      lastScrollY: window.scrollY,
    });

    // Check if we should focus the nav & frame or not.
    this.checkForFocus();
  }

  /**
   *
   * @name checkScrollDirectiion
   * @description: This is our function to log last scroll direction.
   *
   */
  checkScrollDirection() {
    if (this.state.lastScrollY > window.scrollY) {
      this.setState({
        scrollDirection: "up",
      });
    } else {
      this.setState({
        scrollDirection: "down",
      });
    }
  }

  /**
   *
   * @name checkForFocus
   * @description: This is our function to let the site know to show or hide
   * the Navigation or the Frame
   *
   */
  checkForFocus() {
    // First check if we are not at the top of the page.
    if (window.scrollY > 10) {
      if (this.state.scrollDirection === "down") {
        this.setState({
          focus: false,
        });
      } else {
        this.setState({
          focus: true,
        });
      }
    } else {
      this.setState({
        focus: true,
      });
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    const { visibleDialog } = this.state;

    // Variable Overrides
    const VariableOverrides = createGlobalStyle`
    body {
      --primaryColor: ${this.state.primaryColor};
      --secondaryColor: ${this.state.secondaryColor};
      --bgColor: ${this.state.bgColor};
      --dialogColor: ${this.state.dialogColor};
      --textColor: ${this.state.textColor};
    }
  `;

    const LockBodyScroll = createGlobalStyle`
    body {
      overflow: ${visibleDialog == "launcher" ? "hidden" : "visible"};
    }
  `;

    // Render our App
    return (
      <>
        <VariableOverrides />
        <LockBodyScroll />
        <Layout
          handleTextChange={this.handleTextChange}
          handleAddItem={this.handleAddItem}
          handleCommand={this.handleCommand}
          appState={this.state}
          shouldFocus={this.state.focus}
        >
          <Component {...pageProps}></Component>
        </Layout>
      </>
    );
  }
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
  };
};

export default MyApp;
