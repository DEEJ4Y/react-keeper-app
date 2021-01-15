import React from "react";

function Note(props) {
  function handleClick() {
    props.deleteNote(props.id);
  }
  return (
    <div className="note" key={props.id}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button id={props.id} onClick={handleClick}>
        DELETE
      </button>
    </div>
  );
}

export default Note;
