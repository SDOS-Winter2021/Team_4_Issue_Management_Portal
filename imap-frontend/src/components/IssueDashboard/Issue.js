import React, { useState } from 'react';
import { IssueBox, IssueTitle, IssueAccessory, Label, LabelBox, filter_colors } from './IssueDesigns'
import * as FaIcons from 'react-icons/fa';


function LikeComments({icon, number}){
  return (
  <div style={{display: 'flex', alignItems: 'center'}}>
    {icon}
    <p style={{fontSize: '12px', paddingLeft:'9px'}}>{number}</p>
  </div>
  )
};


function IssueAccessories({comments, likes, date, isIssue}){
  return (
    <>
      <IssueAccessory likeComments={true}>
        <div style={{display:'flex', justifyContent:'flex-start', flexDirection: 'column'}}>
        { isIssue && <LikeComments icon={<FaIcons.FaThumbsUp style={{color:'gray'}}/>} number={likes}/>}
        <LikeComments icon={<FaIcons.FaComments style={{color:'gray'}}/>} number={comments}/>
        </div>
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
        {isIssue && <IssueAccessory style={{flexDirection: 'row'}}>
          {issue.Tags.Resolved
            ? <FaIcons.FaCheckSquare style={{color:'#6fad80'}}/>
            : <FaIcons.FaSpinner style={{color:'#ab6a6a'}}/>
          }
        </IssueAccessory>}
        <IssueTitle>
          <h3>{issue.Desc}</h3>    
          <Labels labels={issue.Filter}/>
        </IssueTitle>
        <IssueAccessories 
          comments={issue.Comments.userID.length}
          likes={isIssue ? issue.Likes.studID.length : 0}
          date={issue.createdAt.split("T")[0]} isIssue={isIssue}/>
      </IssueBox>
    </>
  );
};

export default Issue;

