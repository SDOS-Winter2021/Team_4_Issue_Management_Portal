function getSelectedFilters(category, filters) {
  return filters[category];
}

function matchFilters(issueF, selectedF) {
  if (selectedF.length === 0) return true;
  return selectedF.every((e) => issueF.includes(e));
}

export default function FilterIssues(filters, issues) {
  issues = issues === undefined ? [] : issues;
  var showIssues = [];
  for (var i = 0; i < issues.length; i++) {
    var issueFilters = issues[i].Filter;
    var showIssue = true;
    for (let fName in issueFilters) {
      let selectedFilters = getSelectedFilters(fName, filters);
      if (!matchFilters(issueFilters[fName], selectedFilters))
        showIssue = false;
    }
    showIssues.push(showIssue);
  }
  return showIssues;
}
