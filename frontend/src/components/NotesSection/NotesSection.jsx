import Note from "../Note/Note.jsx";
import './NoteSection.css'

export default function NotesSection () {
    return (
        <section>
            <div className="note-cards">
                <Note title="Title1" msg="Buy me a coffee"/>
                <Note title="Title2" msg="Buy some food"/>
                <Note title="Title3" msg="Buy some food1"/>
                <Note title="Title3" msg="Buy some food1"/>
            </div>
        </section>
    )
}