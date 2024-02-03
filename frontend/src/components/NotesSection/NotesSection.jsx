import Note from "../Note/Note.jsx";
import './NoteSection.css'
import {getNotes} from "../../api/requests.js";
import {useEffect, useState} from "react";

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
            <div className="note-cards">
                {notes.length > 0 && notes.map(
                    (note, index) => <Note
                        key={`${note}_${index}`}
                        title={note.status}
                        msg={note.content} />
                )}
            </div>
        </section>
    )
}