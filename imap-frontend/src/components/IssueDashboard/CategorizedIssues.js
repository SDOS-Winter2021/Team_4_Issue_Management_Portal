import Issue from "./Issue";
import { IssueCategorized } from "./IssueDesigns";

function CategorizedIssues({
  issues,
  showIssues,
  isIssue,
  notMobileView,
  style,
}) {
  return (
    <IssueCategorized style={style}>
      {issues.map((issue, index) => {
        if (showIssues[index]) {
          return (
            <Issue
              issue={issue}
              key={index}
              isIssue={isIssue}
              notMobileView={notMobileView}
            />
          );
        }
      })}
    </IssueCategorized>
  );
}

export default CategorizedIssues;
