// Imports
// __________________________________________________________________________________________

// Core
import React, { ReactNode, PureComponent } from "react";
import RouteDialogStyle from "./styles.scss";
import slugify from "../../../utils/slugify";
import { createGlobalStyle } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

// Begin Component
// __________________________________________________________________________________________

export type RouteDialogProps = {
  title: string;
  children: ReactNode;
  baseRoute: string;
  currentRoute: any; // string
  categoryDynamicRoute: string;
  categoriesAsTabs?: string[];
  isMaximized?: string | string[];
};

type RouteDialogState = {
  dialogVisible: boolean;
  isMaximized: boolean;
};

/**
 *
 * @name RouteDialog.js
 * @author Peter Laxalt
 * @description Our main launcher dialog.
 * @example Default: <RouteDialog visible={true | false} />
 *
 */

export const RouteDialog: React.FunctionComponent<RouteDialogProps> = ({
  title,
  children,
  baseRoute,
  currentRoute, // string
  categoryDynamicRoute,
  categoriesAsTabs,
}) => {
  let router = useRouter();
  let isMaximized = router.query.isMaximized
    ? router.query.isMaximized
    : "NOPE";

  class RouteDialogClass extends PureComponent<
    RouteDialogProps,
    RouteDialogState
  > {
    constructor(props: RouteDialogProps) {
      super(props);

      this.state = {
        dialogVisible: true,
        isMaximized: false,
      };

      this.toggleDialog = this.toggleDialog.bind(this);
      this.maximizeDialog = this.maximizeDialog.bind(this);
    }

    componentDidMount() {
      if (isMaximized == "yerr") {
        this.setState({
          isMaximized: true,
        });
      }
    }

    toggleDialog = () => {
      if (this.state.dialogVisible) {
        this.setState({
          dialogVisible: false,
        });
      } else {
        this.setState({
          dialogVisible: true,
        });
      }
    };

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
        title,
        categoriesAsTabs,
        children,
        categoryDynamicRoute,
        baseRoute,
        currentRoute,
        isMaximized,
      } = this.props;

      // console.log("isMaximized render():", isMaximized);
      // console.log(currentRoute ? currentRoute : "/");

      const LockBodyScroll = createGlobalStyle`
        body {
          overflow: hidden;
        }
      `;

      if (this.state.dialogVisible) {
        return (
          <RouteDialogStyle>
            <LockBodyScroll />
            <div
              className={`dialog __route-dialog launcher-dialog-inner ${
                this.state.isMaximized ? "__maximized" : ""
              }`}
            >
              <div className="dialog-header launcher-dialog-header">
                <div className="col title">{title}</div>
                <div
                  className="col toggle __maximize"
                  onClick={() => this.maximizeDialog()}
                >
                  <figure />
                </div>
                <div className="col toggle" onClick={() => this.toggleDialog()}>
                  X
                </div>
              </div>
              <div className="launcher-dialog-structure">
                {categoriesAsTabs ? (
                  categoriesAsTabs.length > 0 ? (
                    <div className="dialog-tabs">
                      <ul>
                        <li className={`${!currentRoute ? "__active" : ""}`}>
                          <Link
                            href={`${baseRoute}${
                              this.state.isMaximized ? "?isMaximized=yerr" : ""
                            }`}
                          >
                            <a>All {title}</a>
                          </Link>
                        </li>
                        {categoriesAsTabs.map((item: string, idx: number) => {
                          return (
                            <li
                              className={`${
                                currentRoute == slugify(item) ? "__active" : ""
                              }`}
                              data-category={slugify(item)}
                              key={idx}
                            >
                              <Link
                                as={`${baseRoute}/${slugify(item)}${
                                  this.state.isMaximized
                                    ? "?isMaximized=yerr"
                                    : ""
                                }`}
                                href={`${baseRoute}/${categoryDynamicRoute}${
                                  this.state.isMaximized
                                    ? "?isMaximized=yerr"
                                    : ""
                                }`}
                              >
                                <a>{item}</a>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null
                ) : null}
                <div className="dialog-content launcher-dialog-content">
                  {children}
                </div>
              </div>
            </div>
          </RouteDialogStyle>
        );
      } else {
        return null;
      }
    }
  }

  return (
    <RouteDialogClass
      title={title}
      baseRoute={baseRoute}
      currentRoute={currentRoute} // string
      categoryDynamicRoute={categoryDynamicRoute}
      categoriesAsTabs={categoriesAsTabs}
      isMaximized={isMaximized}
    >
      {children}
    </RouteDialogClass>
  );
};
