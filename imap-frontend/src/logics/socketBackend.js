import io from "socket.io-client";
import URLs from "../URLs";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth-context";

function SocketBack() {
  const { getIssuesData, tryLocalLogin, getAnnouncementsData } = useContext(
    AuthContext
  );

  useEffect(() => {
    const socket = io(`${URLs.socketURL}/socket`, {
      transports: ["websocket", "polling", "flashsocket"],
    });

    socket.on("newIssue", async (issue_) => {
      try {
        const issueData = await getIssuesData();
        await localStorage.setItem("allIssuesData", JSON.stringify(issueData));
        tryLocalLogin();
      } catch (err) {
        console.log(err);
      }
    });

    socket.on("updateIssue", async (issue_) => {
      try {
        const issueData = await getIssuesData();
        await localStorage.setItem("allIssuesData", JSON.stringify(issueData));
        tryLocalLogin();
      } catch (err) {
        console.log(err);
      }
    });

    socket.on("newAnnouncement", async (issue_) => {
      try {
        const announcementData = await getAnnouncementsData();
        await localStorage.setItem(
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
        await localStorage.setItem(
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
