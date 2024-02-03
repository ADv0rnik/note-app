import {useEffect, useState} from "react";
import './NewNote.css'
import Button from "../Button/Button.jsx";
import {USER_ID} from "../../constants.js";
import {createNote} from "../../api/requests.js";

export default function NewNote () {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [respData, setRespData] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true)
        console.log('title 👉️', title);
        console.log('content 👉️', content);
        const body = {
            title: title,
            content: content,
            user_id: USER_ID
        };
        createNote(body).then(value => setRespData(value));
        // setTitle('');
        // setContent('');
    }
    console.log(respData)


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
            {isLoading &&
                <div className="info">
                    <p>New note has been added</p>
                </div>
            }
        </div>
    );
}