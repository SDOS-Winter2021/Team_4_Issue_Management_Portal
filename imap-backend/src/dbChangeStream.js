module.exports = {
  filterStream: function (filtersChangeStream, io) {
    filtersChangeStream.on("change", (change) => {
      switch (change.operationType) {
        case "update":
          console.log("change in db: insert filter");
          const filter = [];
          io.emit("updateFilter", filter);
          break;
      }
    });
  },

  issueStream: function (issuesChangeStream, io) {
    issuesChangeStream.on("change", (change) => {
      switch (change.operationType) {
        case "insert":
          console.log("change in db: insert issue");
          var issue_ = {
            _id: change.fullDocument._id,
            Likes: change.fullDocument.Likes,
            Comments: change.fullDocument.Comments,
            userEmail: change.fullDocument.userEmail,
            Desc: change.fullDocument.Desc,
            Title: change.fullDocument.Title,
            Tags: change.fullDocument.Tags,
            Archived: change.fullDocument.Archived,
          };

          io.emit("newIssue", issue_);
          break;

        case "update":
          console.log("change in db: update issue");
          issue_ = {};
          io.emit("updateIssue", issue_);
          break;

        case "delete":
          console.log("change in db: delete issue");
          issue_ = {};
          io.emit("deleteIssue", issue_);
          break;
      }
    });
  },

  announcementStream: function (announcementsChangeStream, io) {
    announcementsChangeStream.on("change", (change) => {
      switch (change.operationType) {
        case "insert":
          console.log("change in db: insert announcement");
          var announce_ = {
            _id: change.fullDocument._id,
            Likes: change.fullDocument.Likes,
            Comments: change.fullDocument.Comments,
            userEmail: change.fullDocument.userEmail,
            Desc: change.fullDocument.Desc,
            Title: change.fullDocument.Title,
            Tags: change.fullDocument.Tags,
            Archived: change.fullDocument.Archived,
          };

          io.emit("newAnnouncement", announce_);
          break;

        case "update":
          console.log("change in db: update announcement");
          announce_ = {};
          io.emit("updateAnnouncement", announce_);
          break;
        case "delete":
          console.log("change in db: delete issue");
          issue_ = {};
          io.emit("deleteAnnouncement", issue_);
          break;
      }
    });
  },
};
