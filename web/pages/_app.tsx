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
      bgColor: Theme.Color.Black,
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

    // CMD: yes
    else if (currentCmd.includes("yes")) {
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
          text: "Let's do this!",
          done: false,
          addClass: "__string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "You can support in any way you can.",
          done: false,
          addClass: "__string-long-form",
        },
        {
          id: Math.random().toString(36).substring(7),
          text:
            "- We are only as strong as our network. Tell your friends. Share allships.co far and wide. ",
          done: false,
          addClass: "__string-clr-secondary __string-long-form",
        },
        {
          id: Math.random().toString(36).substring(7),
          text:
            "- Contribute to our platform. Type command 'submit' or 'help' for information.",
          done: false,
          addClass: "__string-clr-secondary __string-long-form",
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

    // CMD: nope
    else if (currentCmd.includes("nope")) {
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
          text: String.raw`    __|__ |___| |\ `,
          done: false,
          addClass: "__string-clr-secondary",
          id: Math.random().toString(36).substring(7),
        },
        {
          text: String.raw`    |o__| |___| | \ `,
          done: false,
          addClass: "__string-clr-secondary",
          id: Math.random().toString(36).substring(7),
        },
        {
          text: String.raw`    |___| |___| |o \ `,
          done: false,
          addClass: "__string-clr-secondary",
          id: Math.random().toString(36).substring(7),
        },
        {
          text: String.raw`   _|___| |___| |__o\ `,
          done: false,
          addClass: "__string-clr-secondary",
          id: Math.random().toString(36).substring(7),
        },
        {
          text: String.raw`  /...\_____|___|____\_/ `,
          done: false,
          addClass: "__string-clr-secondary",
          id: Math.random().toString(36).substring(7),
        },
        {
          text: String.raw`  \   o * o * * o o  / `,
          done: false,
          addClass: "__string-clr-secondary",
          id: Math.random().toString(36).substring(7),
        },
        {
          text: String.raw`~~~~~~~~~~~~~~~~~~~~~~~~~~ `,
          done: false,
          addClass: "__string-clr-secondary",
          id: Math.random().toString(36).substring(7),
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "Setting sail! Come back soon, we’re better off together.",
          addClass: "__string-clr-secondary __string-long-form",
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

    // CMD: Mission
    else if (currentCmd.includes("mission")) {
      let paragraphOne =
        "Creativity is the fuel that propels us into a higher plane of consciousness. When we unlock our imaginations, we open new portals into worlds that only exist because we make it so. The process of creation is inherently collaborative, and if we work to support and uplift each other, there is no limit to heights we can reach. A rising tide raises all ships, and the aim of this community is to encourage and reward that mode of thinking. It is the duty of an artist to be a bridge between those they learned from and those learning from them, and ALLSHIPS exists to be a living proof of that ideal.";

      let paragraphTwo =
        "For too long, we have let behemoth tech companies dominate our online space and control our conversations. But their goals are not to uplift and encourage the individual- their goals are to keep our attention no matter the cost, so they can sell more advertisements. The system they created rewards conflict, feeds drama, encourages manipulation of information, and sets neighbor against neighbor in the name of limitless profit.  Now is the time to take a stand, to resist the algorithmic narrowing of our perspective, to quash the fabricated conflict, and to stand together in defense of our creative community.";

      let paragraphThree =
        "We stand for quality over quantity, substance over numbers, cohesion over conflict, opinion over algorithms, thoughtful content over snackable, sugary, viral hits. We stand together, not apart.";

      // _____________________________________
      // Our message
      let missionMsg = [
        {
          id: Math.random().toString(36).substring(7),
          text: "~~~~~~~~~~~~~~~~~~~~~~~~~",
          done: false,
        },
        // _____________________________________
        // Desktop ASCII
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`          _      _       _____ _    _ _____ _____   _____ `,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`    /\   | |    | |     / ____| |  | |_   _|  __ \ / ____|`,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`   /  \  | |    | |    | (___ | |__| | | | | |__) | (___  `,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`  / /\ \ | |    | |     \___ \|  __  | | | |  ___/ \___ \ `,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw` / ____ \| |____| |____ ____) | |  | |_| |_| |     ____) |`,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`/_/    \_\______|______|_____/|_|  |_|_____|_|    |_____/ `,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        // _____________________________________
        // Mobile ASCII
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`   ___   __   __   ______ _________  ____`,
          done: false,
          addClass: "__mobile-visible __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`  / _ | / /  / /  / __/ // /  _/ _ \/ __/`,
          done: false,
          addClass: "__mobile-visible __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw` / __ |/ /__/ /___\ \/ _  // // ___/\ \  `,
          done: false,
          addClass: "__mobile-visible __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`/_/ |_/____/____/___/_//_/___/_/  /___/  `,
          done: false,
          addClass: "__mobile-visible __string-clr-secondary",
        },

        // _____________________________________
        // Message
        {
          id: Math.random().toString(36).substring(7),
          text: "",
          done: false,
          addClass: "__string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "A Creative Community",
          done: false,
          addClass: "__string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "",
          done: false,
          addClass: "__string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "(Scroll Down)",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "~~~~~~~~~~~~~~~~~~~~~~~~~",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: paragraphOne,
          done: false,
          addClass: "__string-long-form __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "",
          done: false,
          addClass: "__string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: paragraphTwo,
          done: false,
          addClass: "__string-long-form __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "",
          done: false,
          addClass: "__string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: paragraphThree,
          done: false,
          addClass: "__string-long-form __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "",
          done: false,
          addClass: "__string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "Will you stand with us?",
          done: false,
          addClass: "__string-long-form __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "",
          done: false,
          addClass: "__string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "~~~~~~~~~~~~~~~~~~~~~~~~~",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "Type: [YES] [NOPE] [HELP]",
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
          addClass: "__string-clr-secondary",
        },
      ];

      this.setState({
        items: missionMsg,
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
          addClass: "__string-clr-secondary",
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

    // CMD: Submit
    else if (currentCmd.includes("submit")) {
      let msg = [
        {
          id: Math.random().toString(36).substring(7),
          text: "~~~~~~~~~~~~~~~~~~~~~~~~~",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`                      '. ___`,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`                      __,' __'.                _..----....____`,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`          __...--.''';.   ,.   ;''--..__     .'    ,-._    _.-'`,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`    _..-''-------'   ''   ''   ''     O ''-''._   (,;') _,'`,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`  ,'________________                          \'-._'-','`,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`  '._              '''''''''''------...___   '-.._'-:`,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`      '''--.._      ,.                     ''''--...__\-.`,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`              '.--. '-'                       ____    |  |'`,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`                '. '.                       ,''''''.  ;  ;'`,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`                  '._'.        __________   '.      \'__/'`,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`                    '-:._____/______/___/____'.     \  '`,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`                                |       '._    '.    \ `,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: String.raw`                                '._________'-.   '.   '.___`,
          done: false,
          addClass: "__mobile-hidden __string-clr-secondary",
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "~~~~~~~~~~~~~~~~~~~~~~~~~",
          addClass: "__mobile-hidden __string-clr-secondary",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text:
            "The goal of our platform is to elevate artists, and we would love to hear what you have in mind.",
          done: false,
          addClass: "__string-long-form",
        },
        {
          id: Math.random().toString(36).substring(7),
          text:
            "Send any ideas and submissions to dave@allships.co for consideration.",
          done: false,
          addClass: "__string-long-form __string-clr-secondary",
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

      this.setState({
        items: msg,
      });
    }

    // CMD: contact
    else if (currentCmd.includes("contact")) {
      let msg = [
        {
          id: Math.random().toString(36).substring(7),
          text: "Email us: dave@allships.co",
          addClass: "__string-long-form __string-clr-secondary",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "Instagram: @allships.co",
          addClass: "__string-long-form __string-clr-secondary",
          done: false,
        },
        {
          id: Math.random().toString(36).substring(7),
          text: "Twitter: @allshipsco",
          addClass: "__string-long-form __string-clr-secondary",
          done: false,
        },
      ];

      this.setState({
        items: msg,
      });
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
        bgColor: Theme.Color.Black,
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
