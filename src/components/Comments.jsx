import { useEffect, useState } from "react";
import db from "./firebase";
import firebase from "firebase";
import CommentSingle from "./CommentSingle";
import { useStateValue } from "./StateProvider";

function Comments() {

  const [commentList, setCommentList] = useState([])
  const [commentInput, setComment] = useState("")
  const [author, setAuthor] = useState("")
  const [{ user }, dispatch] = useStateValue();


  useEffect(() => {
   getComments();
     }, [])

  const addComment = (e) =>{
    e.preventDefault();
    
    db.collection("Comments").add({
      Comment: commentInput,
      Author: user.displayName,
      Time: firebase.firestore.FieldValue.serverTimestamp()
    })

    setComment("")
  }
 
    const getComments = () => {
      db.collection("Comments").onSnapshot(function (querySnapshot){
        setCommentList(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            Comment: doc.data().Comment,
            Author: doc.data().Author,
            Time: doc.data().Time
          }))
        )
    })
  }


  return (
    <div className="full-chat">
      <h4>Chat</h4>
    <div className="comment-field">
      <form>
      <input
        value={commentInput}
        onChange={(e) => setComment(e.target.value)}
        type="text" placeholder="Comment..."/>
      <button
        style={{display: "none"}}
        onClick={addComment}
        type="submit"
        variant="contained">add</button>
      </form>
      <ul className="scroll">
        {commentList.map(comment =>(
            <CommentSingle
            comment = {comment.Comment}
            author = {comment.Author}
            id ={comment.id}
            time={comment.Time}
            /> 
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Comments;
