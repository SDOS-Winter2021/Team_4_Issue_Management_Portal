import React, { Component, useContext, useEffect } from "react";
import "./Login.css";

import { Key } from "../Key";
import axios from "axios";
import Footer from "../components/Footer/Footer.js";
import Header from "../components/Header/Header.js";
import GoogleButton from "react-google-button";
import GoogleLogin from "react-google-login";
import { useHistory, Redirect } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

/**
 * Login page.
 * @component
 */
const Login = () => {
  let history = useHistory();
  const {
    getIssuesData,
    getAnnouncementsData,
    loggedIn,
    tryLocalLogin,
    setLoggedIn,
    getFiltersData,
  } = useContext(AuthContext);

  useEffect(async () => {
    let isAuth = await sessionStorage.getItem("loggedIn");
    if (isAuth) {
      history.push("/issues");
    }
    tryLocalLogin();
  }, []);

  const responseSuccessGoogle = (response) => {
    axios({
      method: "POST",
      url: "login/googlelogin",
      data: { tokenId: response.tokenId },
    })
      .then((response) => {
        var run = async () => {
          try {
            if (response.data.message == "Successful") {
              setLoggedIn(true);
              await sessionStorage.setItem("loggedIn", true);
              await sessionStorage.setItem(
                "userData",
                JSON.stringify(response.data)
              );
              const filtersData = await getFiltersData();
              const issueData = await getIssuesData();
              const announcementData = await getAnnouncementsData();
              await sessionStorage.setItem(
                "allFiltersData",
                JSON.stringify(filtersData)
              );
              await sessionStorage.setItem(
                "allIssuesData",
                JSON.stringify(issueData)
              );
              await sessionStorage.setItem(
                "allAnnouncementsData",
                JSON.stringify(announcementData)
              );

              history.push("/issues");
            } else {
              alert(response.data.message);
            }
          } catch (err) {
            alert("Something went wrong!");
            console.log(err);
          }
        };
        run();
      })
      .catch((err) => {
        alert("Something went wrong!");
        console.log(err);
      });
  };
  const responseErrorGoogle = (response) => {
    console.log(response);
    alert("Something went wrong");
  };
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
