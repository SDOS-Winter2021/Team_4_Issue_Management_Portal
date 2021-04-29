import { stringSimilarity } from "string-similarity-js";

export function GetTopSimilar(issues, title, desc, k) {
  var iss = title.concat(" ".concat(desc));
  var sim_issue = [];
  for (var i = 0; i < issues.length; i++) {
    var str = issues[i].Title.concat(" ".concat(issues[i].Desc));
    var score = stringSimilarity(str, iss);

    if (score > 0.3) sim_issue.push([score, issues[i]]);
  }

  sim_issue.sort(function compare(kv1, kv2) {
    return kv2[0] - kv1[0];
  });

  var only_issues = [];
  for (var i = 0; i < sim_issue.length; i++) {
    only_issues.push(sim_issue[i][1]);
  }
  return only_issues.slice(0, k);
}
