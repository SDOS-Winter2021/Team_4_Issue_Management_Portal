import styled from "styled-components";
import { Link } from "react-router-dom";

/** Styling the container that holds all the components
 * for an issue.
 * Takes in a prop called `notMobileView` to decide the
 * size and position based on screen resolution.
 */
export const IssueContainer = styled.section`
  background: #fff;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-left: ${({ notMobileView }) => (notMobileView ? "250px" : "0")};
  transition: 300ms;
  width: ${({ notMobileView }) =>
    notMobileView ? "calc(100% - 250px)" : "100%"};
  justify-content: flex-start;
  align-items: flex-start;
`;

export const IssueHead = styled.header`
  background: #fff;
  display: flex;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  height: 80px;
  align-items: center;
`;

export const TitleSearchContainer = styled.section`
  width: 100%;
  font-size: 24px;
  display: flex;
  position: relative;
`;

export const TitleContainer = styled.section`
  display: flex;
  position: inherit;
  padding-left: 30px;
  padding-top: 3px;

  width: 50%;
`;
export const SearchContainer = styled.section`
  display: flex;
  position: inherit;
  justify-content: right;
  width: 50%;
`;

export const IssueBox = styled(Link)`
  display: flex;
  width: 95%;
  min-height: 80px;
  justify-content: flex-start;
  text-decoration: none;
  color: #121212;
  margin: 5px 5px 5px 20px;
  margin-bottom: 0px;
  border-bottom: 5px solid #eee;

  &:hover {
    border-left: 4px solid #ccc;
    background: #f5f5f5;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const IssueTitle = styled.section`
  width: 100%;
  padding: 5px;
  align-items: top;
  margin: 5px;
`;

export const IssueAccessory = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: ${({ likeComments }) => (likeComments ? "80px" : "30px")};
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`;

export const LabelBox = styled.section`
  width: 100%;
  padding: 0px;
  align-items: top;
  margin-right: 5px;
`;

export const Label = styled.div`
  background: ${({ bgcolor }) => bgcolor};
  color: ${({ color }) => color};
  min-width: 20px;
  display: inline-block;
  padding: 6px;
  align-items: center;
  font-size: 10px;
  border-radius: 12px;
  margin: 5px;
`;

export const IssueStatusLabel = styled.div`
  background: ${({ color }) => color};
  display: flex;
  align-items: center;
  font-size: 8px;
  border-radius: 12px;
  margin: 5px;
  height: 15px;
  padding: 2px 8px;
  color: #fff;
`;

export const filter_colors = {
  Dept: ["#BAC3DD", "#fff"],
  Batch: ["#0075ca", "#fff"],
  ConcernedDept: ["#D2D179", "#000"],
  ProgType: ["#FBCA04", "#000"],
};
