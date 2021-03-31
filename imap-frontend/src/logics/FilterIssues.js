function getSelectedFilters(category, filters) {
  let selectedFilters = [];
  let allFilters = [];
  for (var i = 0; i < filters.length; i++) {
    let cat = filters[i].title;
    if (cat === category) {
      let catDetails = filters[i].filterDetails;
      for (var j = 0; j < catDetails.length; j++) {
        if (catDetails[j].isChecked) {
          selectedFilters.push(catDetails[j].title);
        }
        allFilters.push(catDetails[j].title);
      }
    }
  }
  return selectedFilters;
}

function matchFilters(issueF, selectedF) {
  return selectedF.length === 0 || selectedF.every((e) => issueF.includes(e));
}

export default function FilterIssues(filters, issues) {
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
