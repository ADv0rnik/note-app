import note from '/note.svg'
import './Header.css'
import Button from "../Button/Button.jsx";
import {useState} from "react";

export default function Header() {
    const [content, setContent] = useState(null)

    function handleClick(type) {
        setContent(type)
    }

    return (
        <header>
            <div className="header-text">
                <img width="40px" height="60px" src={note} alt="Logo"/>
                <span>My Notes</span>
            </div>
            <Button
                isActive={content === "foo"}
                onClick={() => handleClick("foo")}
            >Add Note</Button>
        </header>
    )
}