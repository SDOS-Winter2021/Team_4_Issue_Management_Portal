import "./App.css";
import URLs from "./URLs";
import React, { Component, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Issues from "./pages/Issues";
import Announcements from "./pages/Announcements";
import Support from "./pages/Support";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import axios from "axios";
import { AuthContext } from "./context/auth-context";
import SocketBack from "./logics/socketBackend";

axios.defaults.baseURL = process.env.NODE_ENV === "production"
    ? "/back"
    : "http://localhost:9005/";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("loggedIn") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
function App() {
  const { tryLocalLogin } = useContext(AuthContext);
  useEffect(() => {
    tryLocalLogin();
  }, []);
  SocketBack();
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Login />} />
          <PrivateRoute path="/dashboard">
            {" "}
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/support">
            {" "}
            <Support />
          </PrivateRoute>
          <PrivateRoute path="/issues">
            <Issues />
          </PrivateRoute>
          <PrivateRoute path="/announcements">
            {" "}
            <Announcements />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
