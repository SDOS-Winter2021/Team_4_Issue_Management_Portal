export const AddComment = async (
  userComment,
  issue,
  userEmail,
  isIssue,
  updateIssueDb,
  updateAnnouncementDb
) => {
  if (userComment !== "") {
    issue.Comments.comment.push(userComment);
    issue.Comments.userEmail.push(userEmail);
    const type = "Comment";
    const _id = issue._id;
    if (isIssue) {
      await updateIssueDb({ userEmail, type, _id, userComment });
    } else {
      await updateAnnouncementDb({ userEmail, type, _id, userComment });
    }
  }
};
