import React, { Component } from "react";
import "./Header.css";
import logo from "./iiitd.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="head">
          <div className="container-left">
            <img className="logo" src={logo} />
          </div>
          <div className="container-center">
            <p>
              <span className="color2">
                INDRAPRASTHA INSTITUTE of INFORMATION TECHNOLOGY
              </span>{" "}
              <span className="color">DELHI</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
