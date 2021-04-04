import "./App.css";
import React, { Component, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Issues from "./pages/Issues";
import Announcements from "./pages/Announcements";
import Support from "./pages/Support";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import axios from "axios";
import SocketBack from "./logics/socketBackend";

axios.defaults.baseURL = "http://localhost:5000/";

function App() {
  SocketBack();
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Login />} />
          <Route path="/dashboard" exact render={(props) => <Dashboard />} />
          <Route path="/support" exact render={(props) => <Support />} />
          <Route path="/issues" exact render={(props) => <Issues />} />
          <Route
            path="/announcements"
            exact
            render={(props) => <Announcements />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
