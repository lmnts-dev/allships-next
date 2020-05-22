// Core
import React, { Component } from "react";

// Styles
import {
  CursorContainerStyle,
  CursorStyle,
  CursorPoint,
  GloballyHideCursor,
} from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CursorState = {
  mouseX: number;
  mouseY: number;
  xPos: number;
  yPos: number;
  dx: number;
  dy: number;
  mouseSize: number;
  scale: number;
  opacity: number;
  active: boolean;
  hoverClass: string;
};

type CursorProps = any;

/**
 *
 * Cursor.js
 * @author Peter Laxalt
 * @description The website Cursor.
 *
 */
export class Cursor extends Component<CursorProps, CursorState> {
  constructor(props: CursorProps) {
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0,
      xPos: 0,
      yPos: 0,
      dx: 0,
      dy: 0,
      mouseSize: 0,
      scale: 1,
      opacity: 0,
      active: false,
      hoverClass: "idle",
    };
  }

  componentDidMount() {
    this.setState({
      xPos: window.innerWidth / 2,
      yPos: window.innerHeight / 2,
      mouseX: window.innerWidth / 2,
      mouseY: window.innerHeight / 2,
      opacity: 0,
    });

    /**
     *
     * @name Set Cursor Position
     * @param e : Event from "mousemove" event listener.
     * @description This positions the Cursor throughout the page.
     *
     */
    const setCursorPosition = (e: any) => {
      let xPos = this.state.mouseX - this.state.mouseSize / 2;
      let yPos = this.state.mouseY - this.state.mouseSize / 2;

      let dX = this.state.mouseX - this.state.xPos;
      let dY = this.state.mouseY - this.state.yPos;

      this.setState({
        xPos: xPos + dX / 10,
        yPos: yPos + dY / 10,
        mouseX: e.clientX,
        mouseY: e.clientY,
        opacity: 1,
      });
      // console.log("x: " + this.state.mouseX, "y: " + this.state.mouseY);
    };

    /**
     *
     * @name Toggle Cursor Size
     * @param e : Event from "mousedown"/"mouseup" event listener.
     * @description This scales the cursor size up or down depending on the event.
     *
     */
    const toggleCursorSize = () => {
      if (this.state.scale === 1) {
        this.setState({
          scale: 2,
        });
      } else {
        this.setState({
          scale: 1,
        });
      }

      return;
    };

    /**
     *
     * @name Toggle Cursor Class
     * @param e : Event from "mousedown"/"mouseup" event listener.
     * @description This updates the cursors state when clicked.
     *
     */
    const toggleCursorState = () => {
      if (this.state.active === true) {
        this.setState({
          active: false,
          scale: 1,
        });

        toggleCursorSize();
      } else {
        this.setState({
          active: true,
          scale: 2,
        });

        toggleCursorSize();
      }

      return;
    };

    /**
     *
     * @name Handle Mouse Over
     * @param e : Event from "mouseover" event listener.
     * @description This updates the cursors state when clicked.
     *
     */
    const handleMouseOver = (e: any) => {
      // console.log(e);

      // Specific element class changes
      let sectionHeroEl = document.querySelector(".section-statement-hero");
      let bodyEl = document.body;

      // Begin Detection
      if (e.target.offsetParent != null) {
        /* Slider Detection */
        if (e.target.offsetParent.classList.contains("__cursor-slider")) {
          this.setState({
            hoverClass: "slider",
          });
        } else if (
          e.target.tagName == "A" ||
          e.target.nodeName == "A" ||
          e.target.localName == "a" ||
          e.target.classList.contains("card-inner") ||
          e.target.classList.contains("card")
        ) {
          /* If it's a link */

          if (e.target.classList.length > 0) {
            /** Focus Links */
            if (e.target.classList.contains("focus-link")) {
              if (sectionHeroEl) {
                sectionHeroEl.classList.add("focus-link-hovered");
              }

              if (bodyEl) {
                bodyEl.classList.add("scroll-lock");
              }

              this.setState({
                hoverClass: "link focus",
              });
            }
          } else {
            /** Normal Links */
            this.setState({
              hoverClass: "link",
            });
          }
        } else {
          /* Else set to idle & reset classes*/

          this.setState({
            hoverClass: "idle",
          });

          // Resest classes
          if (sectionHeroEl) {
            sectionHeroEl.classList.remove("focus-link-hovered");
          }

          if (bodyEl) {
            bodyEl.classList.remove("scroll-lock");
          }
        }
      }
    };

    document.addEventListener("mousemove", setCursorPosition, false);
    document.addEventListener("mousedown", toggleCursorState, false);
    document.addEventListener("mouseup", toggleCursorState, false);
    document.addEventListener("mouseover", handleMouseOver, false);
  }

  render() {
    return (
      <CursorContainerStyle className={`cursor ${this.state.hoverClass}`}>
        <GloballyHideCursor />
        <CursorStyle
          className={
            this.state.active
              ? `active ${this.state.hoverClass}`
              : `${this.state.hoverClass}`
          }
          style={{
            transform:
              "translate(" + this.state.xPos + "px," + this.state.yPos + "px)",
            width: this.state.mouseSize,
            height: this.state.mouseSize,
            opacity: this.state.opacity,
          }}
        >
          <div className="cursor-border">
            <div className="cursor-slider-controls" />
          </div>
        </CursorStyle>

        <CursorPoint
          style={{
            transform:
              "translate(" + this.state.xPos + "px," + this.state.yPos + "px)",
          }}
          className={this.state.active ? "active" : "idle"}
        >
          <div className={`cursor-point ${this.state.hoverClass}`} />
        </CursorPoint>
      </CursorContainerStyle>
    );
  }
}
