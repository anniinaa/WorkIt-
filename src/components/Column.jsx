import React from "react";
import NoteList from "./NoteList";

function Column(props) {
  return (
    <div className="column-container">
      <div className="column1">
        {props.noteList
          .filter((filteredName) => filteredName.inprogress === true)
          .map((note, index) => (
            <NoteList
              key={note.id}
              note={note}
              index={index}
              avatar={note.avatar}
              content={note.Content}
              author={note.Author}
              subject={note.Subject}
              inprogress={note.inprogress}
              id={note.id}
            />
          ))}
      </div>
      <div className="column2">
        {props.noteList
          .filter((filteredName) => filteredName.inprogress !== true)
          .map((note, index) => (
            <NoteList
              key={note.id}
              note={note}
              index={index}
              avatar={note.avatar}
              content={note.Content}
              author={note.Author}
              subject={note.Subject}
              inprogress={note.inprogress}
              id={note.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Column;
