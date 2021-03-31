import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Issues from "./pages/Issues";
import Announcements from "./pages/Announcements";
import Support from "./pages/Support";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";

const profile = {
  name: "Dibya Gautam",
};

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Login />} />
          <Route
            path="/dashboard"
            exact
            render={(props) => <Dashboard profile={profile} />}
          />
          <Route
            path="/support"
            exact
            render={(props) => <Support profile={profile} />}
          />
          <Route
            path="/issues"
            exact
            render={(props) => <Issues profile={profile} />}
          />
          <Route
            path="/announcements"
            exact
            render={(props) => <Announcements profile={profile} />}
          />
        </Switch>
      </Router>
    </>
  );
}

App.defaultProps = {
  profile: profile,
};

export default App;
