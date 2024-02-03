import {useState} from "react";
import './NewNote.css'
import Button from "../Button/Button.jsx";

export default function NewNote () {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        console.log('title 👉️', title);
        console.log('content 👉️', content);
        setTitle('');
        setContent('');
    }

    return (
        <div className="new-note-container">
            <h1>Add new note</h1>
            <form onSubmit={handleSubmit} className="form__container">
                <div className="form__controls">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        className="input__title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form__controls">
                    <label htmlFor="content">Content</label>
                    <textarea
                        rows="5"
                        id="content"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="button-control">
                    <Button type="submit">Add</Button>
                </div>
            </form>
        </div>
    );
}