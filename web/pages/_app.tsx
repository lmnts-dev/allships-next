// Core
import React from "react";
import App from "next/app";
import { createGlobalStyle } from "styled-components";

// Components
import { Layout } from "../components/core/Layout";
// import { Cursor } from "../components/core/Cursor";

// Constants
import { Theme } from "../constants/Theme";

// Begin Component
// __________________________________________________________________________________________

type MothershipCmd = {
  id: string;
  text: string;
  done: boolean;
};

type MothershipProps = any;

type MothershipState = {
  visibleDialog: string;
  lastScrollY: number;
  idleTime: number;
  scrollDirection: string;
  focus: boolean;
  inactiveTime: number;
  items: MothershipCmd[];
  text: string;
  command: string;
  prevCommand: string;
  primaryColor: string;
  secondaryColor: string;
  bgColor: string;
  dialogColor: string;
  textColor: string;
};

/**
 *
 * /pages/_app_.js
 * @author Peter Laxalt
 * @description The wrapper around every page. This is the best place to load data and
 * @description store it in our React Context to be accessible anywhere, so we are doing
 * @description one call for all data at a time.
 *
 */
class MyApp extends App<MothershipProps, MothershipState> {
  constructor(props: MothershipProps) {
    super(props);

    this.state = {
      visibleDialog: "none",
      lastScrollY: 0,
      idleTime: 0,
      scrollDirection: "unset",
      focus: false,
      inactiveTime: 0,
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
      primaryColor: Theme.Color.UltraRed,
      secondaryColor: Theme.Color.HackerGold,
      bgColor: Theme.Color.HackerGold,
      dialogColor: Theme.Color.Black,
      textColor: Theme.Color.UltraRed,
    };

    // Bind MOTHERSHIP functions
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleCommand = this.handleCommand.bind(this);
  }

  /**
   *
   * @name handleCommand
   * @param cmd: string
   * @description: Handle our commands coming in from MOTHERSHIP input.
   *
   */

  handleCommand(cmd: string) {
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

      this.setState((prevState: MothershipState) => ({
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

      this.setState((prevState: MothershipState) => ({
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
  handleTextChange(e: any) {
    this.setState({
      text: e.target.value,
    });
  }

  /**
   *
   * @name handleAddItem
   * @param e: Event from input.
   * @description: Handle adding items to our command list
   *
   */
  handleAddItem(e: any) {
    e.preventDefault();

    let newItem: any = {
      id: Date.now(),
      // @ts-ignore
      text: this.state.text,
      done: false,
    };

    this.setState((prevState: MothershipState) => ({
      items: prevState.items.concat(newItem),
      text: "",
      // @ts-ignore
      command: this.state.text,
    }));

    // @ts-ignore
    this.handleCommand(this.state.text);
  }

  render() {
    const { Component, pageProps } = this.props;
    // @ts-ignore
    const { visibleDialog } = this.state;

    // Variable Overrides
    const VariableOverrides = createGlobalStyle`
    body {
      --primaryColor: ${
        // @ts-ignore
        this.state.primaryColor
      };
      --secondaryColor: ${
        // @ts-ignore
        this.state.secondaryColor
      };
      --bgColor: ${
        // @ts-ignore
        this.state.bgColor
      };
      --dialogColor: ${
        // @ts-ignore
        this.state.dialogColor
      };
      --textColor: ${
        // @ts-ignore
        this.state.textColor
      };
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
          shouldFocus={
            // @ts-ignore
            this.state.focus
          }
        >
          <Component {...pageProps}></Component>
        </Layout>
      </>
    );
  }
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `MothershipProps.pageProps`
  const MothershipProps = await App.getInitialProps(appContext);

  return {
    ...MothershipProps,
  };
};

export default MyApp;
