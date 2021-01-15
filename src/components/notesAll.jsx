import React from "react";
import Note from "./Note";

function AllNotes(props) {
  function getAllNotes(note, index) {
    console.log(index);
    return (
      <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        deleteNote={props.deleteNote}
      />
    );
  }

  return <div>{props.notes.map(getAllNotes)}</div>;
}

export default AllNotes;
