import io from "socket.io-client";
import URLs from "../URLs";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth-context";

function SocketBack() {
  const {
    getIssuesData,
    tryLocalLogin,
    getAnnouncementsData,
    getFiltersData,
  } = useContext(AuthContext);

  useEffect(() => {
    var socket;
    if (process.env.NODE_ENV === "production") {
      socket = io({
        transports: ["websocket", "polling", "flashsocket"],
      });
    } else {
      socket = io(`${URLs.socketURL}`, {
        transports: ["websocket", "polling", "flashsocket"],
      });
    }

    socket.on("updateFilter", async (props) => {
      try {
        const filterData = await getFiltersData();
        await sessionStorage.setItem(
          "allFiltersData",
          JSON.stringify(filterData)
        );
        tryLocalLogin();
      } catch (err) {
        console.log(err);
      }
    });

    socket.on("newIssue", async (issue_) => {
      try {
        const issueData = await getIssuesData();
        await sessionStorage.setItem("allIssuesData", JSON.stringify(issueData));
        tryLocalLogin();
      } catch (err) {
        console.log(err);
      }
    });

    socket.on("deleteIssue", async (issue_) => {
      try {
        const issueData = await getIssuesData();
        await sessionStorage.setItem("allIssuesData", JSON.stringify(issueData));
        tryLocalLogin();
      } catch (err) {
        console.log(err);
      }
    });

    socket.on("updateIssue", async (issue_) => {
      try {
        const issueData = await getIssuesData();
        await sessionStorage.setItem("allIssuesData", JSON.stringify(issueData));
        tryLocalLogin();
      } catch (err) {
        console.log(err);
      }
    });

    socket.on("newAnnouncement", async (issue_) => {
      try {
        const announcementData = await getAnnouncementsData();
        await sessionStorage.setItem(
          "allAnnouncementsData",
          JSON.stringify(announcementData)
        );
        tryLocalLogin();
      } catch (err) {
        console.log(err);
      }
    });
    socket.on("updateAnnouncement", async (issue_) => {
      try {
        const announcementData = await getAnnouncementsData();
        await sessionStorage.setItem(
          "allAnnouncementsData",
          JSON.stringify(announcementData)
        );
        tryLocalLogin();
      } catch (err) {
        console.log(err);
      }
    });
    socket.on("deleteAnnouncement", async (issue_) => {
      try {
        const announcementData = await getAnnouncementsData();
        await sessionStorage.setItem(
          "allAnnouncementsData",
          JSON.stringify(announcementData)
        );
        tryLocalLogin();
      } catch (err) {
        console.log(err);
      }
    });
  }, []);
}

export default SocketBack;
