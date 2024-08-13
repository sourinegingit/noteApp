import { useNotes } from "../Context/NoteContext";

function NoteHeader({ sorteBy,setSortBy}) {
  const notes=useNotes()
  return (
    <div className="note-header">
      <h1>my notes {notes.length}</h1>
      <select onChange={setSortBy} value={sorteBy}>
        <option value="latest">sort based on Latest notes</option>
        <option value="earliset">sort based on Earliest notes</option>
        <option value="completed">sort based on Completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
