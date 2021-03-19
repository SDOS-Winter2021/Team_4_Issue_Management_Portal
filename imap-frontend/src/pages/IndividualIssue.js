import { IssueContainer, IssueTitle, IssueAccessory } from '../components/IssueDashboard/IssueDesigns'
import {LikeComments} from '../components/IssueDashboard/Issue'
import {Labels} from '../components/IssueDashboard/Issue'
import {Profile} from '../components/Navigation/NavigationDesigns'
import {IssueStatusLabel} from '../components/IssueDashboard/IssueDesigns'
import Modal from 'react-modal';
import * as FaIcons from 'react-icons/fa'
import React, { useState } from 'react';


Modal.setAppElement('#root');

function  CommentBox({commenter, comment}){
    return(
    <div style={{display:'flex', width:'100%'}}>
      <IssueAccessory style={{marginTop:'20px',
                              height:'20px',
                              width: '20px',
                              borderRadius:'50%', 
                              backgroundColor:'#aaa'}}>
        <FaIcons.FaUser/>
      </IssueAccessory>
      <IssueContainer style={{border: '0px solid gray', marginBottom: '15px'}}>
          <IssueTitle style={{fontWeight:'bold'}}>{commenter}</IssueTitle>
          <IssueTitle style={{paddingLeft: '15px'}}>{comment}</IssueTitle>
      </IssueContainer>
    </div>
    )
}

function IssueTitleNDesc({issue}){
  return(
    <>
      <div style={{display:'flex'}}>
        <IssueContainer style={{alignItems:'center', padding:'10px'}}>
            <h1 style={{marginRight:'10px', margin:'5px', display:'flex', flexWrap:'wrap'}}>
              {issue.IssueTitle}
              <IssueStatusLabel color={issue.Tags.Resolved? 'green': 'red'}>
                {issue.Tags.Resolved ?
                  <FaIcons.FaCheckCircle/> :
                  <FaIcons.FaExclamationCircle/>
                }
                <p style={{paddingLeft:'8px'}}>
                  {issue.Tags.Resolved ? 'Resolved' : 'Pending'}
                </p>
              </IssueStatusLabel>
            </h1>
            <Labels labels={issue.Filter}/>
        </IssueContainer>

      </div>
      <IssueContainer style={{borderBottom: '2px solid #ccc'}}>
        <p>{issue.Desc}</p>
      </IssueContainer>
    </>

  )
}


function LikesNComments({issue, isIssue, setComment, setLike, like, comment }){
  return (
    <>
      <IssueContainer style={{borderBottom: '2px solid #ccc'}}>
        { isIssue && 
          <div style={{padding:'10px', cursor:'pointer'}} onClick={setLike}>
            <LikeComments 
              icon={<FaIcons.FaThumbsUp style={like? {color:'#323499'}: {color:'gray'}}/>}
              number={issue.Likes.studEmail.length}
            />
          </div>
        }
        <div style={{padding:'10px', cursor:'pointer'}} onClick={setComment}>
          <LikeComments 
            icon={<FaIcons.FaComments style={comment? {color:'#323499'}: {color:'gray'}}/>}
            number={issue.Comments.userEmail.length}
          />
        </div>
      </IssueContainer>
    </>
  )
}


function IndividualIssue({issue, popupIssue, handlePopIssue, isIssue}){
    console.log(issue.Comments)
    const [like, setLike] = useState(false);
    const setLikeFunc = () => setLike(!like);
    const [comment, setComment] = useState(false);
    const setCommFunc = () => setComment(!comment);
    const likeCommentProp = {
      setLike: setLikeFunc,
      setComment: setCommFunc,
    }
    return (
      <>
        {
    console.log(like, comment)

        }
        <Modal isOpen={popupIssue} style={{overlay: {zIndex: 100, width:'100%'}}}>
        <Profile onClick={handlePopIssue}>
          <FaIcons.FaTimes />
        </Profile>
          <IssueTitleNDesc issue={issue}/>
          <LikesNComments issue={issue}
                          isIssue={isIssue}
                          setComment={setCommFunc}
                          setLike={setLikeFunc}
                          like={like}
                          comment={comment}/>
          {comment &&
            <IssueContainer style={{backgroundColor:'#fff', padding:'10px 0px'}}>
              <input
                type="text"
                placeholder='Add a comment'
                style={{width:'70%'}}
              />
            </IssueContainer>
          }
          <IssueContainer>
            {issue.Comments.userEmail.map((commenter, index) => {
                const comment = issue.Comments.comment[index];
                return (<CommentBox commenter={commenter} comment={comment} />);
            })}
          </IssueContainer>

        </Modal>
      </>
    );
  };
  
  export default IndividualIssue;
  