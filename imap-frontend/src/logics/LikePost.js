export const SetLike = async (
  isIssue,
  has_liked,
  like,
  issue,
  likes_list,
  userEmail,
  updateIssueDb
) => {
  if (!isIssue) return;
  // if (has_liked) return;
  const _id = issue._id;
  
  if (!like) {
    // likes_list.push(userEmail);
    const type = "Like";
    await updateIssueDb({ userEmail, type, _id });
  } else {
    // likes_list.pop(userEmail);
    const type = "Unlike";
    await updateIssueDb({ userEmail, type, _id });
  }
};
