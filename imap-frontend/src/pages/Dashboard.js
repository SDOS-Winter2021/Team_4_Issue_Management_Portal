import { useMediaPredicate } from 'react-media-hook';
import React, { useState } from 'react';
import Header from '../components/Navigation/Header';

const Dashboard = (props) => {
    const notMobileView = useMediaPredicate("(min-width: 800px)");
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () =>  setSidebar(!sidebar);
    const sidebarToggles = {
        notMobileView: notMobileView, 
        showSidebar: showSidebar,
        sidebar: sidebar,
    }
    
    return (
      <>
        <Header {...props} {...sidebarToggles}/>
      </>
    );
  };
  
  export default Dashboard;
  