function getSelectedFilters(category, filters) {
  return filters[category];
}

function matchFilters(issueF, selectedF) {
  return selectedF.every((e) => issueF.includes(e)); // || selectedF.length === 0 ;
}

export default function FilterIssues(filters, issues) {
  issues = issues === undefined ? [] : issues;
  var showIssues = [];
  for (var i = 0; i < issues.length; i++) {
    var issueFilters = issues[i].Filter;
    var showIssue = true;
    for (let fName in issueFilters) {
      let selectedFilters = getSelectedFilters(fName, filters);
      if (
        !(
          issueFilters[fName].length === 0 ||
          matchFilters(issueFilters[fName], selectedFilters)
        )
      ) {
        showIssue = false;
      }
    }
    showIssues.push(showIssue);
  }
  return showIssues;
}
