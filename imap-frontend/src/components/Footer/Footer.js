import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <div className="container">
          <p className="college">
            {" "}
            <b>Instructions </b> : <br />
            *Use IIIT-D Account to Login to the Issue Management Portal. <br />
            *If you cannot access your account kindly contact Admin BTech.
          </p>
        </div>
      </div>
    );
  }
}
