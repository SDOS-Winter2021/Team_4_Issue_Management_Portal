import { useMediaPredicate } from "react-media-hook";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth-context";
import Header from "../components/Navigation/Header";
import { filterNames } from "../components/Navigation/SidebarData";
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
    name: "Commented",
    icon: <FaIcons.FaComment style={iconStyles} />,
  },
];

function MyAnnouncements() {
  const { tryLocalLogin, allAnnouncementsData } = useContext(AuthContext);
  useEffect(async () => {
    tryLocalLogin();
  }, []);
  const notMobileView = useMediaPredicate("(min-width: 800px)");
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const page = "My Announcements";
  const isIssue = false;

  const [filterState, _setFilterState] = useState(false);
  const setFilterState = () => _setFilterState(!filterState);

  const sidebarToggles = {
    notMobileView: notMobileView,
    showSidebar: showSidebar,
    sidebar: sidebar,
  };

  const [anounceCategories, _setAnnounceCat] = useState([true, false]);
  const setAnnounceCat = (i) => {
    let cat = [false, false];
    cat[i] = true;
    _setAnnounceCat(cat);
  };

  const author = "dibya18282@iiitd.ac.in";
  const showAnnounce = FilterIssues(filterNames, allAnnouncementsData);
  const commentedAnnounce = ArrayAND(
    showAnnounce,
    CommentedOnPost(allAnnouncementsData, author)
  );
  const authoredPost = ArrayAND(
    showAnnounce,
    AuthoredPost(allAnnouncementsData, author)
  );
  const categorizedPosts = [authoredPost, commentedAnnounce];

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header
        {...sidebarToggles}
        page={page}
        filterNames={filterNames}
        setFilterState={setFilterState}
      />
      <IssueContainer notMobileView={notMobileView} style={{ padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {categories.map((category, index) => {
            return (
              <MyPostLabels
                selected={anounceCategories[index]}
                onClick={() => setAnnounceCat(index)}
              >
                {category.icon}
                {category.name}
              </MyPostLabels>
            );
          })}
        </div>
        {categories.map((_, index) => {
          return (
            anounceCategories[index] && (
              <CategorizedIssues
                issues={allAnnouncementsData}
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

export default MyAnnouncements;
