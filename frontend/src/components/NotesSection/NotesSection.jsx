import Note from "../Note/Note.jsx";
import './NoteSection.css'
import {getNotes} from "../../api/requests.js";
import {useCallback, useEffect, useState} from "react";
import Loader from "../Loader/Loader.jsx";

export default function NotesSection () {
    const [notes, setNotes] =useState([])

    useEffect(() => {
        const noteData = getNotes();
        if (noteData) {
            noteData.then(value => setNotes(value));
        }
    }, [getNotes]);

    console.log(notes)

    return (
        <section>
            <h3>My Notes</h3>
            {notes.length === 0 ? (
                <div className="homeLoader">
                    <Loader/>
                </div>
            ) : (
                <div className="note-cards">
                    {notes.length > 0 && notes.map(
                        (note, index) => <Note
                            key={`${note}_${index}`}
                            title={note.title}
                            msg={note.content}/>
                    )}
                </div>
            )}
        </section>
    )
}