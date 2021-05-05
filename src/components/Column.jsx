import React from "react";
import { Droppable } from "react-beautiful-dnd";
import NoteList from "./NoteList";

function Column(props) {
  return (
    <div className="column-container">
        <div className="column1">
      <Droppable droppableId={props.columnId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.noteList.map((note, index) => (
              <NoteList
                key={note.id}
                note={note}
                index={index}
                avatar={note.avatar}
                content={note.Content}
                author={note.Author}
                subject={note.Subject}
                id={note.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
        </div>
    </div>
  );
}

export default Column;
