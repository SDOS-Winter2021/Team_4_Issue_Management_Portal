import Issue from "../../src/components/IssueDashboard/Issue";
import ShallowRenderer from "react-test-renderer/shallow";
import { FaCheckSquare, FaSpinner } from "react-icons/fa";

describe("Issue component for Issues", () => {
  const issue = {
    Likes: { studEmail: ["dibya18282@iiitd.ac.in"] },
    Comments: { userEmail: ["dibya18282@iiitd.ac.in"], comment: ["+1"] },
    Filter: {
      Batch: ["2020"],
      Department: ["CSAM"],
      Programs: ["PhD"],
      Administration: ["Financial"],
    },
    Tags: { Public: true, Resolved: false },
    _id: "6069665ebba41964b28de94b",
    userEmail: "dibya18282@iiitd.ac.in",
    Desc: "library page gives 404",
    Title: "Cannot connect to library webpage",
    Archived: false,
    createdAt: "2021-04-04T07:10:22.746Z",
    updatedAt: "2021-04-04T07:16:17.662Z",
    __v: 0,
  };
  const isIssue = true;
  const notMobileView = true;
  const renderer = new ShallowRenderer();
  renderer.render(
    <Issue issue={issue} isIssue={isIssue} notMobileView={notMobileView} />
  );
  const result = renderer.getRenderOutput();

  it("issue popup initialized to false", () => {
    expect(result.props.children[1]).toEqual(false);
  });

  it("first child of issue component for unresolved Issue is a Spinner", () => {
    expect(result.props.children[0].props.children[0].props.children).toEqual(
      <FaSpinner style={{ color: "#ab6a6a" }} />
    );
  });

  it("first child of issue component for resolved Issue is a Checked Square", () => {
    issue.Tags.Resolved = true;
    renderer.render(
      <Issue issue={issue} isIssue={isIssue} notMobileView={notMobileView} />
    );
    const result = renderer.getRenderOutput();
    expect(result.props.children[0].props.children[0].props.children).toEqual(
      <FaCheckSquare style={{ color: "#6fad80" }} />
    );
  });
});

describe("Issue component for Announcements", () => {
  const announcements = {
    Comments: { userEmail: ["dibya18282@iiitd.ac.in"], comment: ["+1"] },
    Filter: { Batch: ["2020"], Department: ["CSAM"], Programs: ["PhD"] },
    _id: "6069665ebba41964b28de94b",
    userEmail: "dibya18282@iiitd.ac.in",
    Desc: "library page not giving 404",
    Title: "Library page is up",
    createdAt: "2021-04-04T07:10:22.746Z",
    updatedAt: "2021-04-04T07:16:17.662Z",
    __v: 0,
  };
  const isIssue = false;
  const notMobileView = true;
  const renderer = new ShallowRenderer();
  renderer.render(
    <Issue
      issue={announcements}
      isIssue={isIssue}
      notMobileView={notMobileView}
    />
  );
  const result = renderer.getRenderOutput();

  it("first child of issue component for Announcement is false", () => {
    expect(result.props.children[0].props.children[0]).toEqual(false);
  });
});
