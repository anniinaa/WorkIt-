import React from "react";
import db from "./firebase";
import { Avatar } from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import moment from "moment";


function NoteList({subject, time, inprogress, content, id, note, index, avatar}) {


  const deleteNote = () => {
    db.collection("Notes").doc(id).delete();
  };

  const toggleInProgress = () =>{
    db.collection("Notes").doc(id).update({
      inprogress: !inprogress
    })

  }

  return (
        <div className="posted"
        style={{
          backgroundColor: inprogress ? '#a1b4e26b' : 'rgba(25, 209, 25, 0.347)'
        }}
        onClick={toggleInProgress}
        >
          <section className="note-content">
          <div className="note-avatar">
          <Avatar id="avatar" src={avatar}/>
        </div>
        <h6>{subject}</h6>
        <div className="note-details">
          <small>{moment(time?.toDate()).format("ll")}</small>
            <p>{content}</p>
        </div>
               <small className="progress">
              {inprogress ? "In progress..." : <CheckCircleOutlineIcon style={{color:"#29e870", backgroundColor:"#ebebeb", borderRadius:"50%"}} />}
            </small>
          </section>
          <section className="buttons">
            <button onClick={deleteNote} className="deleteBtn">
            <HighlightOffIcon style={{color:"#ebebeb"}}/>
            </button>
          </section>
        </div>
  );
}

export default NoteList;
