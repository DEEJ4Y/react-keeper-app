import React from "react";
import Note from "./Note";
import notes from "../notesArray.js";

function getAllNotes(note) {
  return <Note key={note.key} title={note.title} content={note.content} />;
}

function AllNotes() {
  return <div>{notes.map(getAllNotes)}</div>;
}

export default AllNotes;
