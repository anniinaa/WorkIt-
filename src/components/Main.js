import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/styles.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Column from "./Column";
import db from "./firebase";
import Comments from "./Comments";
import NoteList from "./NoteList";
import CreateArea from "./CreateArea";
import { Avatar } from "@material-ui/core";

function Main() {
  const [noteList, setNoteList] = useState([]);

  const getNotes = async () => {
    db.collection("Notes").onSnapshot((querySnaphot) => {
      setNoteList(
        querySnaphot.docs.map((doc) => ({
          id: doc.id,
          avatar: doc.data().avatar,
          Content: doc.data().Content,
          author: doc.data().Author,
          Subject: doc.data().Subject,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  };

  useEffect( () => {
    console.log("react koodi");
    getNotes();
  }, []);


  const column = db.collection("Notes");
  const columnId = "todo";

  const onDragEnd = (result) => {

    if (!result.destination) {
      return;
    }

    const items = Array.from(noteList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setNoteList(items);
  };

  return (
    <div className="App">
      <Header />
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
        className="content">
        <DragDropContext onDragEnd={onDragEnd} >
          <Column noteList={noteList} column={column} columnId={columnId}/>
        </DragDropContext>
        <Comments />
      </div>
      <Footer />
    </div>
  );
}
export default Main;
