export function AuthoredPost(posts, author) {
  posts = posts === undefined ? [] : posts;
  var wasAuthored = [];
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].userEmail === author) wasAuthored.push(true);
    else wasAuthored.push(false);
  }
  return wasAuthored;
}

export function LikedPost(posts, author) {
  posts = posts === undefined ? [] : posts;
  var wasLiked = [];
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].Likes.studEmail.includes(author)) wasLiked.push(true);
    else wasLiked.push(false);
  }
  return wasLiked;
}

export function CommentedOnPost(posts, author) {
  posts = posts === undefined ? [] : posts;
  var commented = [];
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].Comments.userEmail.includes(author)) commented.push(true);
    else commented.push(false);
  }
  return commented;
}

export function ArrayAND(arr1, arr2) {
  var ans = [];
  for (var i = 0; i < arr1.length; i++) {
    ans.push(arr1[i] && arr2[i]);
  }
  return ans;
}
