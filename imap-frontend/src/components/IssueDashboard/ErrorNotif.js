import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

export default class ErrorNotif extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success("Success message", "Title here");
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("Use IIITD Email");
          });
          break;
      }
    };
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-info"
          style={{
            backgroundColor: "teal",
            position: "fixed",
            bottom: 120,
            right: 20,
            height: "10%",
            width: "10%",
          }}
          onClick={this.createNotification("info")}
        >
          Info
        </button>
        <button
          className="btn btn-success"
          style={{
            backgroundColor: "teal",
            position: "fixed",
            bottom: 420,
            right: 20,
            height: "10%",
            width: "10%",
          }}
          onClick={this.createNotification("success")}
        >
          Success
        </button>
        <button
          className="btn btn-warning"
          style={{
            backgroundColor: "teal",
            position: "fixed",
            bottom: 320,
            right: 20,
            height: "10%",
            width: "10%",
          }}
          onClick={this.createNotification("warning")}
        >
          Warning
        </button>
        <button
          className="btn btn-danger"
          style={{
            backgroundColor: "teal",
            height: "10%",
            width: "10%",
            position: "fixed",
            bottom: 220,
            right: 20,
          }}
          onClick={this.createNotification("error")}
        >
          Error
        </button>

        <NotificationContainer />
      </div>
    );
  }
}
