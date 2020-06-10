// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { ReactNode, PureComponent } from "react";
import RouteDialogStyle from "./styles.scss";
import slugify from "../../../utils/slugify";
import { createGlobalStyle } from "styled-components";
import Link from "next/link";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type RouteDialogProps = {
  title: string;
  children: ReactNode;
  baseRoute: string;
  currentRoute: any; // string
  categoryDynamicRoute: string;
  categoriesAsTabs?: string[];
};

type RouteDialogState = {
  dialogVisible: boolean;
};

/**
 *
 * @name RouteDialog.js
 * @author Peter Laxalt
 * @description Our main launcher dialog.
 * @example Default: <RouteDialog visible={true | false} />
 *
 */
export class RouteDialog extends PureComponent<
  RouteDialogProps,
  RouteDialogState
> {
  constructor(props: RouteDialogProps) {
    super(props);

    this.state = {
      dialogVisible: true,
    };

    this.toggleDialog = this.toggleDialog.bind(this);
  }

  toggleDialog = () => {
    if (this.state.dialogVisible) {
      this.setState({
        dialogVisible: false,
      });
    } else {
      this.setState({
        dialogVisible: false,
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
    } = this.props;

    console.log(currentRoute ? currentRoute : "/");

    const LockBodyScroll = createGlobalStyle`
      body {
        overflow: hidden;
      }
    `;

    if (this.state.dialogVisible) {
      return (
        <RouteDialogStyle>
          <LockBodyScroll />
          <div className="dialog __route-dialog launcher-dialog-inner">
            <div className="dialog-header launcher-dialog-header">
              <div className="col title">{title}</div>
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
                        <Link href={`${baseRoute}`}>
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
                              as={`${baseRoute}/${slugify(item)}`}
                              href={`${baseRoute}/${categoryDynamicRoute}`}
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
