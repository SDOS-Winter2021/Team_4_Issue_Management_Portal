import { useMediaPredicate } from "react-media-hook";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth-context";
import Header from "../components/Navigation/Header";
import FilterIssues from "../logics/FilterIssues";
import {
  IssueContainer,
  MyPostLabels,
} from "../components/IssueDashboard/IssueDesigns";
import * as FaIcons from "react-icons/fa";
import {
  AuthoredPost,
  LikedPost,
  CommentedOnPost,
  ArrayAND,
} from "../logics/PostCategorization";
import CategorizedIssues from "../components/IssueDashboard/CategorizedIssues";

const iconStyles = {
  paddingRight: "10px",
  color: "#999",
};
const categories = [
  {
    name: "Authored",
    icon: <FaIcons.FaPen style={iconStyles} />,
  },
  {
    name: "Liked",
    icon: <FaIcons.FaThumbsUp style={iconStyles} />,
  },
  {
    name: "Commented",
    icon: <FaIcons.FaComment style={iconStyles} />,
  },
];

function MyIssues() {
  const { tryLocalLogin, allIssuesData, userData } = useContext(AuthContext);
  useEffect(async () => {
    tryLocalLogin();
  }, []);
  const notMobileView = useMediaPredicate("(min-width: 800px)");
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const page = "My Issues";
  const isIssue = true;

  const [filterState, _setFilterState] = useState(false);
  const setFilterState = () => _setFilterState(!filterState);

  const [selectedFilters, _applyFilter] = useState({
    Batch: [],
    Department: [],
    Programs: [],
    Administration: [],
  });
  const applyFilter = (type, filter) => {
    const filList = selectedFilters[type];
    if (filList.includes(filter)) filList.splice(filList.indexOf(filter), 1);
    else filList.push(filter);
  };

  const sidebarToggles = {
    notMobileView: notMobileView,
    showSidebar: showSidebar,
    sidebar: sidebar,
  };

  const [issueCategories, _setIssueCat] = useState([true, false, false]);
  const setIssueCat = (i) => {
    let cat = [false, false, false];
    cat[i] = true;
    _setIssueCat(cat);
  };

  const author = userData.user ? userData.user.email : "";
  const isAdmin = userData.user ? userData.user.role === "admin" : false;
  const showIssues = FilterIssues(selectedFilters, allIssuesData);
  const likedIssues = ArrayAND(showIssues, LikedPost(allIssuesData, author));
  const commentedIssues = ArrayAND(
    showIssues,
    CommentedOnPost(allIssuesData, author)
  );
  const authoredPost = ArrayAND(
    showIssues,
    AuthoredPost(allIssuesData, author)
  );
  const categorizedPosts = [authoredPost, likedIssues, commentedIssues];

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header
        {...sidebarToggles}
        page={page}
        setFilterState={setFilterState}
        selectedFilters={selectedFilters}
        applyFilter={applyFilter}
      />
      <IssueContainer notMobileView={notMobileView} style={{ padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {categories.map((category, index) => {
            return (
              (category.name === "Authored" ? !isAdmin : true) && (
                <MyPostLabels
                  selected={issueCategories[index]}
                  onClick={() => setIssueCat(index)}
                >
                  {category.icon}
                  {category.name}
                </MyPostLabels>
              )
            );
          })}
        </div>
        {categories.map((category, index) => {
          return (
            (category.name === "Authored" ? !isAdmin : true) &&
            issueCategories[index] && (
              <CategorizedIssues
                issues={allIssuesData}
                showIssues={categorizedPosts[index]}
                isIssue={isIssue}
                notMobileView={notMobileView}
              />
            )
          );
        })}
      </IssueContainer>
    </div>
  );
}

export default MyIssues;
