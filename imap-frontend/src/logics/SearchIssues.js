function findNumCommonWords(issueTitle, query) {
  const filteredArray = issueTitle.filter((tword) => {
    return query.filter((qword) => tword.startsWith(qword)).length > 0;
  });
  return filteredArray.length;
}

function SearchIssues(userQuery, issues) {
  let issueWithScore = {};
  userQuery = userQuery.toLowerCase().split(" ");
  for (let i = 0; i < issues.length; i++) {
    var issueTitle = issues[i].Title.toLowerCase().split(" ");
    var numCommonWords = findNumCommonWords(issueTitle, userQuery);
    issueWithScore[issues[i]._id] = numCommonWords;
  }

  var keyValues = [];

  for (var key in issueWithScore) {
    if (issueWithScore[key] > 0) keyValues.push([key, issueWithScore[key]]);
  }
  keyValues.sort(function compare(kv1, kv2) {
    return kv2[1] - kv1[1];
  });

  return keyValues;
}

export default function getTopIssues(userQuery, issues) {
  var topIssues = [];
  var topIssueIDs = SearchIssues(userQuery, issues);
  for (var i = 0; i < topIssueIDs.length; i++) {
    var topIssueID = topIssueIDs[i][0];
    var topIssue = issues.filter((issue) => issue._id === topIssueID);
    topIssues.push(topIssue[0]);
  }
  return topIssues;
}

export function getSearchedIssue(query, issues) {
  var id = "";
  try {
    id = query.split("-")[1];
  } catch (err) {
    return [];
  }
  var issue = [];
  for (var i = 0; i < issues.length; i++) {
    if (issues[i]._id === id) {
      issue.push(issues[i]);
    }
  }
  return issue;
}
