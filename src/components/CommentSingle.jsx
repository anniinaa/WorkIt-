import db from "./firebase";
import moment from "moment";

const CommentSingle = ({comment, time, id, author}) => {

    const deleteComment = () => {
        db.collection("Comments").doc(id).delete();
      };
    

    return ( 
        <div className="single-comment">
            <div className="chat-content">
            <p>{comment}</p>
            <h6>{author}</h6>
            <small>{moment(time?.toDate()).calendar()}</small>
            </div>
            <div className="chat-delete">
            <button
            onClick={deleteComment}
            >x</button>
            </div>
        </div>
     );
}
 
export default CommentSingle;