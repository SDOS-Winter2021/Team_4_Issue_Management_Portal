import { useMediaPredicate } from 'react-media-hook';
import React, { useState, useEffect } from 'react';
import Header from '../components/Navigation/Header';
import { IssueContainer, IssueTitle } from '../components/IssueDashboard/IssueDesigns'
import {Labels} from '../components/IssueDashboard/Issue'
import {useLocation} from "react-router-dom";

const issue = {
        IssueID: 123,
        StudentID: 1234,
        Date: '20 Feb, 2020',
        Title: "ERP doesn't have some courses. I couldn't find courses like SDOS, Machine Learning and computer Vision. \
                I am from 2018 batch CSE department. Others are facing the same issue. Please update the ERP",
        Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        Likes:[122,2312,123,12,123],
        Comments:{studId: ['nandini@iiitd.ac.in', 'nanda@iiitd.ac.in'],
                    comment: ['+1','Facing the same issue']},
        Tags:{
            Batch:[2018, 2019],
            Department:['CSE', 'CSD'],
            ConcernedDept:['Academics'],
            Programme:[],
        },
        Archived: false,
        Resolved: false,
}

function  CommentBox({commenter, comment}){
    return(
    <IssueTitle style={{padding:'0', border: '2px solid gray'}}>
        <IssueTitle style={{backgroundColor:'lightblue', margin:'0', borderBottom: '2px solid gray'}}>{commenter}</IssueTitle>
        <IssueTitle style={{backgroundColor:'lightgray', margin:'0', padding:'10px'}}>{comment}</IssueTitle>
    </IssueTitle>
    )
}

function IndividualIssue(profile){
    const notMobileView = useMediaPredicate("(min-width: 800px)");
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () =>  setSidebar(!sidebar);
    const sidebarToggles = {
      notMobileView: notMobileView, 
      showSidebar: showSidebar,
      sidebar: sidebar,
    }
    return (
      <>
        <Header profile={profile} {...sidebarToggles} page={'indIssue'}/>
        <IssueContainer notMobileView={notMobileView}>
            <h3>{issue.Title}</h3>    
            <Labels labels={issue.Tags}/>
            <p>{issue.Desc}</p>
            {issue.Comments.studId.map((commenter, index) => {
                const comment = issue.Comments.comment[index];
                return (<CommentBox commenter={commenter} comment={comment} />);
            })}
            {/* <CommentBox comment={''}/> */}
        </IssueContainer>
      </>
    );
  };
  
  export default IndividualIssue;
  