import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer";
import AllNotes from "./notesAll";
import CreateArea from "./CreateArea.jsx";

function App() {
  const [notes, setNotes] = useState([
    { title: "Note title", content: "Note content" },
  ]);

  function addNewNote(newNote) {
    setNotes((previous) => {
      return [...previous, newNote];
    });
  }

  function deleteNote(id) {
    console.log(id);
    setNotes((previous) => {
      return previous.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea notes={notes} addNewNote={addNewNote} />
      <AllNotes notes={notes} deleteNote={deleteNote} />
      <Footer />
    </div>
  );
}

export default App;
