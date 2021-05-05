import { Button, TextField, Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider"

function CreateArea(props) {
  const [{ user }, dispatch] = useStateValue();
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");


  const addNote = (e) => {
    e.preventDefault();

    db.collection("Notes").add({
      Author: author,
      Content: content,
      avatar: user.photoURL,
      Subject: subject,
      Time: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setContent("");
    setSubject("");
  };


  return (
    <div>
      <div>
        <form className="note-container">
        <div className="avatar">
          <Avatar id="avatar" src={user.photoURL}/>
          <label>{user.displayName}</label>
        </div>
          <TextField
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            id="standard-basic"
            className="text-subject"
            label="Subject"
          />
          <textarea
            className="text-area"
            placeholder="Content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            id="button"
            type="submit"
            variant="contained"
            onClick={addNote}
          >
            add
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateArea;
