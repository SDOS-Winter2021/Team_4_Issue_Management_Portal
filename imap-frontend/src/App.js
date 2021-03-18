import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Issues from './pages/Issues';
import Support from './pages/Support';
import Dashboard from './pages/Dashboard';
import IndividualIssue from './pages/IndividualIssue';
import Login from './pages/Login';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000/";

const profile = {
  'name': 'Dibya Gautam',
};


function App() {

  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact render={(props) => <Login />} />
        <Route path='/dashboard' exact render={(props) => <Dashboard profile={profile}/>} />
        <Route path='/support' exact render={(props) => <Support profile={profile} page={'Support'}/>} />
         <Route path='/issues' exact render={(props) => <Issues profile={profile} page={'Issues'}/>} />
         <Route path='/announcements' exact render={(props) => <Issues profile={profile} page={'Announcements'}/>} />
         <Route path='/indIssue' exact component={IndividualIssue}/>
      </Switch>
    </Router>
    </>
  );
}

App.defaultProps = {
  profile: profile,
};

export default App;
