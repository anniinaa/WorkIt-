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

  // const columnsFromBackend = {
  //   column1: {
  //     id: "column1",
  //     name: "To do",
  //     items: noteList,
  //   },
  //   column2: {
  //     id: "column2",
  //     name: "Doing",
  //     items: [],
  //   },
  //   column3: {
  //     id: "column3",
  //     name: "Done",
  //     items: [],
  //   },
  // };

  // const [columns, setColumns] = useState(columnsFromBackend);

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

  // useEffect(() => {
  //   console.log("noteList", noteList);
  //   setColumns(columnsFromBackend);
  // }, [noteList]);

  // const itemsFromBackend = [
  //   { id: "task1", content: "first task" },
  //   { id: "task2", content: "Second task" },
  //   { id: "task3", content: "Third task" },
  // ];

  const column = db.collection("Notes");
  const columnId = "todo";

  const onDragEnd = (result) => {
  //   if (!result.destination) return;
  //   const { source, destination } = result;
  //   if (source.droppableId !== destination.droppableId) {
  //     const sourceColumn = columns[source.droppableId];
  //     const destColumn = columns[destination.droppableId];
  //     const sourceItems = [...sourceColumn.items];
  //     const destItems = [...destColumn.items];
  //     const [removed] = sourceItems.splice(source.index, 1);
  //     destItems.splice(destination.index, 0, removed);
  //     setColumns({
  //       ...columns,
  //       [source.droppableId]: {
  //         ...sourceColumn,
  //         items: sourceItems,
  //       },
  //       [destination.droppableId]: {
  //         ...destColumn,
  //         items: destItems,
  //       },
  //     });
  //   } else {
  //     const column = columns[source.droppableId];
  //     const copiedItems = [...column.items];
  //     const [removed] = copiedItems.splice(source.index, 1);
  //     copiedItems.splice(destination.index, 0, removed);
  //     setColumns({
  //       ...columns,
  //       [source.droppableId]: {
  //         ...column,
  //         items: copiedItems,
  //       },
  //     });
  //   }
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
        className="content"
      >
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
