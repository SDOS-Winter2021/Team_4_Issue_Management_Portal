import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  margin-top:10px;
  margin-left: ${({ notMobileView }) => (notMobileView ? '250px' : '0')};
  transition: 300ms;
  width: ${({ notMobileView }) => (notMobileView ? 'calc(100% - 250px)' : '100%')}; 
  padding: 10px;
  justify-content: flex-start;
  align-items: flex-start;
`;



export const IssueHead = styled.header`
  background: #fff;
  display: flex;
  width: 100%;
  margin-top:10px;
  padding: 10px;
  height: 80px;
  align-items: center;
`;

export const IssueBox = styled(Link)`
  background: #fff;
  display: flex;
  width: 95%;
  min-height: 80px;
  justify-content: flex-start;
  text-decoration: none;
  color: #121212;
  margin: 5px;
  margin-bottom: 0px;
  border-bottom: 5px solid #eee;

  &:hover {
      border-left: 4px solid #632ce4;
      cursor: pointer;
    }
`;

export const IssueTitle = styled.section`
  background: #fff;
  width: 100%; 
  padding: 5px;
  align-items: top;
  margin: 5px;
`;

export const IssueAccessory = styled.section`
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: ${({ likeComments }) => (likeComments ? '80px' : '30px')};
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`;

export const LabelBox = styled.section`
  background: #fff;
  width: 100%; 
  padding: 0px;
  align-items: top;
  margin-right: 5px;
`;

export const Label = styled.div`
  background: ${({color}) => (color)};  
  min-width: 20px;
  display: inline-block;
  padding: 6px;
  align-items: center;
  font-size: 10px;
  border-radius: 12px;
  margin: 5px;
`;

export const filter_colors = {
  Department: '#6fad80',
  Batch: '#5d829e',
  ConcernedDept: '#ab6a6a',
  Programme: '#ccc97a',
  };



