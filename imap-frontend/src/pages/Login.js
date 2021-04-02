import React, { Component, useContext } from "react";
import "./Login.css";
import { Key } from "../Key";
import axios from "axios";
import Footer from "../components/Footer/Footer.js";
import Header from "../components/Header/Header.js";
import GoogleButton from "react-google-button";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const Login = () => {
  let history = useHistory();
  const { getIssuesData, getAnnouncementsData } = useContext(AuthContext);
  const responseSuccessGoogle = (response) => {
    axios({
      method: "POST",
      url: "login/googlelogin",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      var run = async () => {
        try {
          await localStorage.setItem("loggedIn", true);
          await localStorage.setItem("userData", JSON.stringify(response.data));
          const issueData = await getIssuesData();
          const announcementData = await getAnnouncementsData();
          await localStorage.setItem(
            "allIssuesData",
            JSON.stringify(issueData)
          );
          console.log(issueData, "aaaaaa");
          await localStorage.setItem(
            "allAnnouncementsData",
            JSON.stringify(announcementData)
          );
          history.push("/issues");
        } catch (err) {
          console.log(err);
        }
      };
      run();
    });
  };
  const responseErrorGoogle = (response) => {};
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrap">
        <div className="container-fluid">
          <div className="row main-content">
            <div className="company__info">
              <h1 className="company_title">Issue Management Portal</h1>
              <h1 className="company_title">Welcome Back!</h1>
            </div>
            <div className="login_form">
              <div className="container-fluid">
                <div className="invisibletext">
                  <p>Issue Management Portal</p>
                  <p>Welcome Back!</p>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <GoogleLogin
                    render={(renderProps) => (
                      <GoogleButton onClick={renderProps.onClick} />
                    )}
                    clientId={Key.GoogleClientID}
                    buttonText="Login with google"
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseErrorGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
