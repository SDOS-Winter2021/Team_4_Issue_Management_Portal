import { useMediaPredicate } from 'react-media-hook';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Navigation/Header';
import {Profile} from '../components/Navigation/NavigationDesigns';
import * as FaIcons from 'react-icons/fa';
import { IssueContainer, IssueBox } from '../components/IssueDashboard/IssueDesigns'
import Issue from '../components/IssueDashboard/Issue';
import SearchBar from '../components/IssueDashboard/SearchBar';




function Issues({profile, page}){
    const notMobileView = useMediaPredicate("(min-width: 800px)");
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () =>  setSidebar(!sidebar);
    const sidebarToggles = {
      notMobileView: notMobileView, 
      showSidebar: showSidebar,
      sidebar: sidebar,
    }
    const isIssue = (page === 'Issues');

    const [_showProfile, setShowProfile] = useState(false);
    const showProfile = () => setShowProfile(!_showProfile);

    const [issues, setIssues] = useState([]);
    useEffect(()=>{
      axios.get("http://localhost:5000/dashboard/GetAllIssue")
      .then(res => {
        console.log(res.data);
        setIssues(res.data);
      })
      .catch(err => console.log(err));

    }, [])
    
    return (
      <>
        <Header profile={profile} {...sidebarToggles} isIssue={isIssue} page={page}/>
        <IssueContainer notMobileView={notMobileView}>
          <IssueBox style={{border: '0px', cursor:'default', justifyContent: 'space-between'}}>
              <h1>{page}</h1>
              <section style={{display:'flex'}}>
                
                {/* <Profile onClick={showProfile} style={{position:'relative'}}>
                    <FaIcons.FaSort />
                </Profile> */}
                <SearchBar page={page}/>
              </section>
              
          </IssueBox> 
        {issues.map((issue, index) => {
            return <Issue issue={issue} key={index} isIssue={isIssue} profile={profile}/>;
        })}
        </IssueContainer>
      </>
    );
  };
  
  export default Issues;
  