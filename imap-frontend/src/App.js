import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Issues from './pages/Issues';
// import Support from './pages/Support';
import Dashboard from './pages/Dashboard';
// import IndividualIssue from './pages/IndividualIssue';
// import  {DummyIssues} from './DummyData/IssuesDummy'
// import {DummyAnnouncements} from './DummyData/AnnouncementsDummy'



const profile = {
  'name': 'Dibya Gautam',
};


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact render={(props) => <Dashboard profile={profile} />} />
        {/*  <Route path='/issues' exact render={(props) => <Issues profile={profile} issues={DummyIssues} page={'Issues'}/>} />
         <Route path='/announcements' exact render={(props) => <Issues profile={profile} issues={DummyAnnouncements} page={'Announcements'}/>} />
         <Route path='/support' exact component={Support} />
         <Route path='/indIssue' exact component={IndividualIssue}/> */}
      </Switch>
    </Router>
    </>
  );
}

App.defaultProps = {
  profile: profile,
};

export default App;
