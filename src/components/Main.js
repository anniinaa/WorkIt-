import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../styles/styles.css";
import Column from "./Column";
import db from "./firebase";
import Comments from "./Comments";

function Main() {
  const [noteList, setNoteList] = useState([]);

  const getNotes = async () => {
    db.collection("Notes")
      .orderBy("Time", "desc")
      .onSnapshot((querySnaphot) => {
        setNoteList(
          querySnaphot.docs.map((doc) => ({
            id: doc.id,
            avatar: doc.data().avatar,
            Content: doc.data().Content,
            author: doc.data().Author,
            Subject: doc.data().Subject,
            inprogress: doc.data().inprogress,
            time: doc.data().Time,
          }))
        );
      });
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center", height: "100%" }} className="content">
        <div>
          <Column noteList={noteList} />
        </div>
        <Comments />
      </div>
    </div>
  );
}
export default Main;
