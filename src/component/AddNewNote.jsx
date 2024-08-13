import { useState } from "react";
import { useNotesDispatch } from "../Context/NoteContext";

function AddNewNote() {
  const dispatch=useNotesDispatch()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 
  const handleSubmite = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      description,
      id:Date.now(),
      completed:false,
      createdAt: new Date().toLocaleString("fa-IR", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    };
 
    setTitle("")
    setDescription("") 
    dispatch({ type: "add", payload: newNote });
    console.log(newNote);

  };

  return (
    <div className="add-new-note">
      <h2>add new note</h2>
      <form className="note-form" onSubmit={handleSubmite}>
        <input
          type="text"
          value={title}
          className="text-field"
          placeholder="note title..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          value={description}
          className="text-field"
          placeholder="note description ..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <button className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  );
}

export default AddNewNote;
