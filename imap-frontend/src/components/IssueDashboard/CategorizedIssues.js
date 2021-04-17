import Issue from "./Issue";
const style = {
  maxHeight: "70vh",
  border: "2px solid #ccc",
  width: "90%",
  borderRadius: "20px",
  overflowY: "auto",
  margin: "20px 0px",
  padding: "20px",
};
function CategorizedIssues({ issues, showIssues, isIssue, notMobileView }) {
  return (
    <div style={style}>
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
    </div>
  );
}

export default CategorizedIssues;
