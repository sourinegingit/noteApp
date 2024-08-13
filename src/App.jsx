import { useState } from "react";
import "./App.css";

import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
import NoteStatus from "./component/NoteStatus";
import NoteHeader from "./component/NoteHeader";
import { NoteProvider } from "./Context/NoteContext";

function App() {
  // const [notes, setNotes] = useState([]);
  const [sorteBy, setSortBy] = useState("latest");

  return (
    <NoteProvider>
      <div className="container">
        <NoteHeader
          sorteBy={sorteBy}
          setSortBy={(e) => setSortBy(e.target.value)}
        />

        <div className="note-app">
          <AddNewNote />

          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sorteBy} />
          </div>
        </div>
      </div>
    </NoteProvider>
  );
}

export default App;
