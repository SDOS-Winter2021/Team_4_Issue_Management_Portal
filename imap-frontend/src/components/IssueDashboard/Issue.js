import React, { useState } from 'react';
import { IssueBox, IssueTitle, IssueAccessory, Label, LabelBox, filter_colors } from './IssueDesigns'
import * as FaIcons from 'react-icons/fa';


function LikeComments({icon, number}){
  return (
    <div style={{display: 'flex'}}>
    {icon}
    <p style={{fontSize: '14px', paddingLeft:'9px'}}>{number}</p>
  </div>
  )
};


function IssueAccessories({comments, likes, date, isIssue}){
  return (
    <>
      <IssueAccessory likeComments={true}>
        { isIssue && <LikeComments icon={<FaIcons.FaThumbsUp style={{color:'gray'}}/>} number={likes}/>}
        <LikeComments icon={<FaIcons.FaComments style={{color:'gray'}}/>} number={comments}/>
        <p style={{fontSize: '8px', color:'gray'}}>{date}</p>
      </IssueAccessory>
    </>
  )
};


export function Labels({labels}){
  return (
    <LabelBox>
        {Object.keys(labels).map((key, index) => {
          return(
            <>
              {labels[key].map(tag  => {
                  return <Label color={filter_colors[key]}>{tag}</Label>
              })}
            </>
          )
        })}
   </LabelBox>
  )
};


const Issue = ({issue, isIssue, profile}) => {
  return (
    <>
      <IssueBox 
        to={{
          pathname: '/indIssue',
          // state: {
          //   issue:issue,
          //   profile: profile}
        }}
      >
        {isIssue && <IssueAccessory>
          {issue.Resolved
            ? <FaIcons.FaCheckSquare style={{color:'#6fad80'}}/>
            : <FaIcons.FaSpinner style={{color:'#ab6a6a'}}/>
          }
        </IssueAccessory>}
        <IssueTitle>
          <h3>{issue.Desc}</h3>    
          <Labels labels={issue.Tags}/>
        </IssueTitle>
        <IssueAccessories 
          comments={issue.Comments.studId.length} 
          likes={isIssue ? issue.Likes.length : 0} 
          date={issue.Date} isIssue={isIssue}/>
      </IssueBox>
    </>
  );
};

export default Issue;

