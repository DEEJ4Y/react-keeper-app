import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  function handleNoteChange(event) {
    const { name, value } = event.target;
    setNewNote((previous) => {
      return { ...previous, [name]: value };
    });
  }

  function createNewNote(event) {
    const { title, content } = newNote;
    if (title !== "" || content !== "") {
      props.addNewNote(newNote);
    }

    setNewNote({ title: "", content: "" });

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleNoteChange}
          value={newNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleNoteChange}
          value={newNote.content}
        />
        <button onClick={createNewNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
