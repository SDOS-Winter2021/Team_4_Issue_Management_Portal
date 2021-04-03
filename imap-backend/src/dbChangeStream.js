module.exports = {

    issueStream: function(issuesChangeStream, io) {

    issuesChangeStream.on("change", (change) => {
        switch (change.operationType) {
          case "insert":
            console.log("change in db: insert");
            const issue_ = {
              _id: change.fullDocument._id,
              Likes: change.fullDocument.Likes,
              Comments:change.fullDocument.Comments,
              userEmail: change.fullDocument.userEmail,
              Desc: change.fullDocument.Desc,
              Title: change.fullDocument.Title,
              Tags: change.fullDocument.Tags,
              Archived: change.fullDocument.Archived,
            };

            io.of("/api/socket").emit("newIssue", issue_);
            break;
        }
    })
    },
}


