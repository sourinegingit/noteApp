import { createContext, useContext, useReducer } from "react";

function NoteReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.payload];
    }
    case "delete": {
      return state.filter((n) => n.id !== action.payload);
    }
    case "completed": {
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new console.error("unknown error" + action.type);
  }
}


export const NotesContext = createContext(null);
export const NotesDispatch=createContext(null)
export function NoteProvider({ children }) {
  const [notes, dispatch] = useReducer(NoteReducer, []);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatch.Provider value={dispatch}>{children}</NotesDispatch.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  if (NotesContext === undefined) throw new Error("outside of provider");
  return useContext(NotesContext);
}

export function useNotesDispatch() {
    if (NotesDispatch === undefined) throw new Error("outside of provider");
    return useContext(NotesDispatch);
  }
  