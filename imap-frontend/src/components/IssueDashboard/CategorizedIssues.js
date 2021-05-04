import Issue from "./Issue";
import { IssueCategorized } from "./IssueDesigns";
import PropTypes from "prop-types";

/**
 * Categorized posts for My Issue and My Annpouncement pages.
 * @component
 */
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

CategorizedIssues.propTypes = {
  /**
   * list of issues object
   */
  issues: PropTypes.array.isRequired,

  /**
   * list of boolneans to decide which issue to hide
   */
  showIssues: PropTypes.array.isRequired,

  /**
   * Bolean that is set to true for issue and false for announcment,
   */
  isIssue: PropTypes.bool.isRequired,

  /**
   * Boolean that state whether the current screen dimension
   * is a mobile phone resolution. It is set to `false` if it has
   * a smaller dimension than a given threshold.
   */
  notMobileView: PropTypes.bool.isRequired,

  /**
   * style object
   */
  style: PropTypes.object.isRequired,
};

export default CategorizedIssues;
