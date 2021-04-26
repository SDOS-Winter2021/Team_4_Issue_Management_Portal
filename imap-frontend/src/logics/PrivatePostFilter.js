export default function PrivateFilter(issues, userEmail, isAdmin) {
  var showPost = [];
  for (var i = 0; i < issues.length; i++) {
    if (isAdmin || issues[i].Tags.Public) showPost.push(true);
    else {
      if (issues[i].userEmail === userEmail) showPost.push(true);
      else showPost.push(false);
    }
  }
  return showPost;
}
