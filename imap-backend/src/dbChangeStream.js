module.exports = {
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

          io.of("/api/socket").emit("newIssue", issue_);
          break;

        case "update":
          console.log("change in db: update issue");
          issue_ = {};
          io.of("/api/socket").emit("updateIssue", issue_);
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

          io.of("/api/socket").emit("newAnnouncement", announce_);
          break;

        case "update":
          console.log("change in db: update announcement");
          announce_ = {};
          io.of("/api/socket").emit("updateAnnouncement", announce_);
          break;
      }
    });
  },
};
