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
  font-weight: 500;
  display: flex;
  position: relative;
  @media screen and (min-width: 200px) and (max-width: 430px) {
    font-size: 18px;
  }
`;

export const TitleContainer = styled.section`
  display: flex;
  position: inherit;
  padding-left: 10px;
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

export const SubmitButton = styled.button`
  margin-left: 5px;
  border: none;
  font-size: 18px;
  padding: 5px 10px;
  background: #78c8fa;
  border-radius: 30%;
  cursor: pointer;
`;

export const MyPostLabels = styled.span`
  background: #eee;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  padding-right: 50px;
  width: 100%;
  text-decoration: none;
  font-size: 16px;
  border-bottom: ${({ selected }) =>
    selected ? "2px solid blue" : "2px solid #eee"};

  &:hover {
    background: #ddd;
    cursor: pointer;
  }
`;

export const MyPostButtons = styled(Link)`
    width: 300px;
    height: 60px;
    background: inherit;
    color: #000;
    position: relative;
    margin-bottom: 25px;
    margin-left: 25px;
    border-radius: 32px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 18px;
    transition: all 0.1s ease-in-out;
    border: 2px solid #1f3b94;

    &:hover {
      opacity: 0.8;
      box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
        6px 6px 10px rgba(0, 0, 0, 0.2);
    
        &:active {
          opacity: 1;
          color: #aaa;
        }

`;

export const IssueCategorized = styled.div`
  max-height: 70vh;
  border: 2px solid #ccc;
  width: 90%;
  border-radius: 20px;
  overflow-y: auto;
  margin: 20px 0px;
  padding: 20px;
  text-align: left;
`;

export const filter_colors = {
  Department: ["#BAC3DD", "#000"],
  Batch: ["#0075ca", "#fff"],
  Administration: ["#D2D179", "#000"],
  Programs: ["#FBCA04", "#000"],
};
