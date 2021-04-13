import LikesNComments from "../components/IssuePopup/LikesNComments";
import ShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Like button", () => {
  const issue = {
    Likes: {
      studEmail: ["dibya18282@iiitd.ac.in", "nandini18056@iiitd.ac.in"],
    },
    Comments: { userEmail: ["dibya18282@iiitd.ac.in"], comment: ["+1"] },
    _id: "6069665ebba41964b28de94b",
    userEmail: "dibya18282@iiitd.ac.in",
    Desc: "library page gives 404",
    Title: "Cannot connect to library webpage",
  };
  const isIssue = true;
  var like = false;
  var commentArea = false;
  const setLike = () => {
    like = !like;
  };
  const setComment = () => {
    commentArea = !commentArea;
  };

  const renderer = new ShallowRenderer();
  renderer.render(
    <LikesNComments
      issue={issue}
      isIssue={isIssue}
      setComment={setComment}
      setLike={setLike}
      like={like}
      comment={commentArea}
    />
  );
  const result = renderer.getRenderOutput();

  it("displayed number of likes", () => {
    const likeDiv = result.props.children.props.children[0];
    const displayedNumLikes = likeDiv.props.children.props.number;
    expect(displayedNumLikes).toEqual(2);
  });

  it("displayed number of comments", () => {
    const commentDiv = result.props.children.props.children[1];
    const displayedCommentsNum = commentDiv.props.children.props.number;
    expect(displayedCommentsNum).toEqual(1);
  });

  it("test button click event", () => {
    const button = shallow(
      <LikesNComments
        issue={issue}
        isIssue={isIssue}
        setComment={setComment}
        setLike={setLike}
        like={like}
        comment={commentArea}
      />
    );
    button.find("div").at(0).simulate("click");
    expect(like).toEqual(true);
    button.find("div").at(1).simulate("click");
    expect(commentArea).toEqual(true);
  });
});
