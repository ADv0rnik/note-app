import './App.css'
import Header from "./components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import {PATHS} from "./constants.js";
import Notes from "./pages/Notes/Notes.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import AddNote from "./pages/AddNotes/AddNote.jsx";

export default function App() {

  return (
    <>
        <Header/>
        <h3>My Notes</h3>
        <Routes>
            <Route exaxt path={`${PATHS.NOTES}`} element={<Notes />} />
            <Route exaxt path={`${PATHS.ADD_NOTE}`} element={<AddNote />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}


