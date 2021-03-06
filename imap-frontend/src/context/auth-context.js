import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const logout = async ({ history }) => {
  await sessionStorage.clear();
  history.push("/");
};

const updateRole = async (props) => {
  try {
    const res = await axios.post("login/updateRole", props);
  } catch (err) {
    console.log(err);
  }
};

const addIssueDb = async (props) => {
  try {
    const res = await axios.post("dashboard/addIssue", props);
  } catch (err) {
    console.log(err);
  }
};

const addAnnouncementDb = async (props) => {
  try {
    const res = await axios.post("announcement/addAnnouncements", props);
  } catch (err) {
    console.log(err);
  }
};

const updateIssueDb = async (props) => {
  if (props.type == "Like") {
    try {
      const res = await axios.post(`dashboard/LikedIssue/${props._id}`, props);
    } catch (err) {
      console.log(err);
    }
  } else if (props.type == "Comment") {
    try {
      const res = await axios.post(
        `dashboard/CommentedIssue/${props._id}`,
        props
      );
    } catch (err) {
      console.log(err);
    }
  } else if (props.type == "Status") {
    try {
      const res = await axios.post(`dashboard/ResolveIssue/${props.id}`, props);
    } catch (err) {
      console.log(err);
    }
  }
  else if(props.type == "Visibility"){
    try {
      const res = await axios.post(
        `dashboard/VisibilityIssue/${props.id}`,
        props
      );
    } catch (err) {
      console.log(err);
    }

  }
};

const updateAnnouncementDb = async (props) => {
  if (props.type == "Comment") {
    try {
      const res = await axios.post(
        `announcement/CommentedAnnouncement/${props._id}`,
        props
      );
    } catch (err) {
      console.log(err);
    }
  }
};

const deleteIssueDb = async (props) => {
  try {
    const res = await axios.post(`dashboard/deleteIssue/${props.id}`, props);
  } catch (err) {
    console.log(err);
  }
};

const deleteAnnouncementDb = async (props) => {
  try {
    const res = await axios.post(
      `announcement/deleteAnnouncement/${props.id}`,
      props
    );
  } catch (err) {
    console.log(err);
  }
};

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

const getFiltersData = async () => {
  try {
    const res = await axios.get("/filter/GetFilters");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const addFilter = async (props) => {
  try {
    const res = await axios.post("/filter/AddFilters", props);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const delFilter = async (props) => {
  try {
    const res = await axios.post("/filter/DeleteFilters", props);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);
  const [allFiltersData, setAllFiltersData] = useState({});
  const [allIssuesData, setAllIssuesData] = useState([]);
  const [allAnnouncementsData, setAllAnnouncementsData] = useState([]);

  const tryLocalLogin = async () => {
    try {
      const loggedIn = await sessionStorage.getItem("loggedIn");
      const userData = await JSON.parse(
        sessionStorage.getItem("userData") || "{}"
      );
      const allIssues = await JSON.parse(
        sessionStorage.getItem("allIssuesData") || "[]"
      );
      const allAnnouncements = await JSON.parse(
        sessionStorage.getItem("allAnnouncementsData") || "[]"
      );
      const allFilters = await JSON.parse(
        sessionStorage.getItem("allFiltersData") || "{}"
      );
      setLoggedIn(loggedIn);
      setUserData(userData);
      setAllIssuesData(allIssues);
      setAllAnnouncementsData(allAnnouncements);
      setAllFiltersData(allFilters);
    } catch (err) {
      console.log(err);
    }
  };
  const authContextValue = {
    logout,
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
    allFiltersData,
    getFiltersData,
    addFilter,
    delFilter,
    tryLocalLogin,
    addIssueDb,
    addAnnouncementDb,
    updateIssueDb,
    updateAnnouncementDb,
    deleteIssueDb,
    deleteAnnouncementDb,
    updateRole,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
