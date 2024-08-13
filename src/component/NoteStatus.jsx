import { useNotes } from "../Context/NoteContext";
import Message from "./Message";

function NoteStatus() {
  const notes=useNotes()

    const AllNotes=notes.length;
    const completedNotes=notes.filter((note)=>note.completed).length;
    const unCompleted=AllNotes-completedNotes;

    if(!AllNotes) return(
      // <Message icon={"🙋‍♀️"} text="nothing to show  here">this is CHILDREN PROPS</Message>
      <Message>
        <span>🙋‍♀️</span>
        <p>this is CHILDREN PROPRS</p>
      </Message>
    )

  return (
    <ul className="note-status">
      <li>All<span>{AllNotes}</span></li>
      <li>Completed<span>{completedNotes}</span></li>
      <li>InProgress<span>{unCompleted}</span></li>
    </ul>
  )
}

export default NoteStatus
