import React from "react";
import db from "./firebase";
import { Draggable } from "react-beautiful-dnd";
import { Avatar } from "@material-ui/core";



function NoteList({subject, content, id, note, index, avatar}) {


  const deleteNote = () => {
    db.collection("Notes").doc(id).delete();
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="posted">
          <section>
          <Avatar src={avatar} /> 
            <h6>{subject}</h6>
            <p>{content}</p>
          </section>
          <section className="buttons">
            <button onClick={deleteNote} className="deleteBtn">
              X
            </button>
          </section>
        </div>
      )}
    </Draggable>
  );
}

export default NoteList;
