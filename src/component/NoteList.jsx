import { useNotes, useNotesDispatch } from "../Context/NoteContext";

function NoteList({  handleDeleteNote, handleCompleted, sortBy }) {
  const notes=useNotes()

  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    ); // a -b  => a > b ? 1 : -1

  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ); // b -a  => a > b ? -1 : 1

  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div className="note-container">
      {sortedNotes.map((note) => {
        return (
          <NoteItem
            note={note}
            handleDeleteNote={handleDeleteNote}
            handleCompleted={handleCompleted}
            key={note.id}
          />
        );
      })}
    </div>
  );
}

export default NoteList;

function NoteItem({ note }) {
  const dispatch=useNotesDispatch()
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className={`${note.completed ? "title" : ""}`}>{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() =>dispatch({ type: "delete", payload: note.id })}>❌</button>
          <input
            type="checkbox"
            value={note.id}
            name={note.title}
            id={note.id}
            onChange={ (e)=>dispatch({ type: "completed", payload: Number(e.target.value) })}
          />
        </div>
      </div>
      <div className="note-item__footer">{note.createdAt}</div>
    </div>
  );
}
