import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const getIssuesData = async () => {
  try {
    const res = await axios.get("dashboard/GetAllIssue");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getAnnouncementsData = async () => {
  try {
    const res = await axios.get("/announcement/GetAllAnnouncements");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);
  const [allIssuesData, setAllIssuesData] = useState([]);
  const [allAnnouncementsData, setAllAnnouncementsData] = useState([]);

  const tryLocalLogin = async () => {
    try {
      const loggedIn = await localStorage.getItem("loggedIn");
      const userData = await localStorage.getItem("userData");
      const allIssues = await JSON.parse(
        localStorage.getItem("allIssuesData") || "[]"
      );
      const allAnnouncements = await JSON.parse(
        localStorage.getItem("allAnnouncementsData") || "[]"
      );
      setLoggedIn(loggedIn);
      setUserData(userData);
      setAllIssuesData(allIssues);
      setAllAnnouncementsData(allAnnouncements);
    } catch (err) {
      console.log(err);
    }
  };
  const authContextValue = {
    loggedIn,
    setLoggedIn,
    userData,
    setUserData,
    allIssuesData,
    setAllIssuesData,
    getIssuesData,
    allAnnouncementsData,
    setAllAnnouncementsData,
    getAnnouncementsData,
    tryLocalLogin,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
