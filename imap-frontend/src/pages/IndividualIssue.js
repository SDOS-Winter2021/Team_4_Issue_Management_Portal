import { IssueContainer, IssueTitle, IssueAccessory } from '../components/IssueDashboard/IssueDesigns'
import {LikeComments} from '../components/IssueDashboard/Issue'
import {Labels} from '../components/IssueDashboard/Issue'
import {Profile} from '../components/Navigation/NavigationDesigns'
import Modal from 'react-modal';
import * as FaIcons from 'react-icons/fa'

Modal.setAppElement('#root');

const commentMap = {
  '2': 'dibya18282@iiitd.ac.in',
  '3': 'nandini18002@iiitd.ac.in',
  '21': 'tanya10293@iiitd.ac.in',
  '5': 'pruthwi18092@iiitd.ac.in',
  '6': 'prat18009@iiitd.ac.in',
  '7': 'vibhu18012@iiitd.ac.in',
  '8': 'ranya18292@iiitd.ac.in',
}

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
          <IssueTitle style={{fontWeight:'bold'}}>{commentMap[commenter]}</IssueTitle>
          <IssueTitle style={{paddingLeft: '15px'}}>{comment}</IssueTitle>
      </IssueContainer>
    </div>
    )
}

function IssueTitleNDesc({issue}){
  return(
    <>
      <div style={{display:'flex'}}>
        <IssueContainer>
            {/* <h1>{issue.Title}</h1>     */}
            <h1>Please Extend the break</h1>
            <Labels labels={issue.Filter}/>
        </IssueContainer>

      </div>
      <IssueContainer style={{borderBottom: '2px solid #ccc'}}>
        <p>{issue.Desc}</p>
      </IssueContainer>
    </>

  )
}

function LikesNComments({issue, isIssue}){
  return (
    <>
      <IssueContainer style={{borderBottom: '2px solid #ccc'}}>
        { isIssue && 
          <div style={{padding:'10px'}}>
            <LikeComments 
              icon={<FaIcons.FaThumbsUp style={{color:'gray'}}/>} 
              number={issue.Likes.studID.length}
            />
          </div>
        }
        <div style={{padding:'10px'}}>
          <LikeComments 
            icon={<FaIcons.FaComments style={{color:'gray'}}/>}
            number={issue.Comments.userID.length}
          />
        </div>
      </IssueContainer>
    </>
  )
}
const customStyles = {
  overlay: {zIndex: 100}
};

function IndividualIssue({issue, popupIssue, handlePopIssue, isIssue}){
    console.log(issue.Comments)
    return (
      <>
        <Modal isOpen={popupIssue} style={customStyles}>
        <Profile onClick={handlePopIssue}>
          <FaIcons.FaTimes />
        </Profile>
          <IssueTitleNDesc issue={issue}/>
          <LikesNComments issue={issue} isIssue={isIssue}/>
          <IssueContainer>
            {issue.Comments.userID.map((commenter, index) => {
                const comment = issue.Comments.comment[index];
                return (<CommentBox commenter={commenter} comment={comment} />);
            })}
          </IssueContainer>
        </Modal>
      </>
    );
  };
  
  export default IndividualIssue;
  