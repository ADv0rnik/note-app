import note from '/note.svg'
import './Header.css'
import Button from "../Button/Button.jsx";
import {useEffect, useState} from "react";
import {act} from "react-dom/test-utils";
import AddButton from "../AddButton/AddButton.jsx";
import {PATHS} from "../../constants.js";
import {useNavigate} from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();
    const [content, setContent] = useState(null)


    function onAddNote () {
        navigate(`${PATHS.ADD_NOTE}`);
    }

    return (
        <header>
            <div className="header-text">
                <img width="40px" height="60px" src={note} alt="Logo"/>
                <span>My Notes</span>
            </div>
            <AddButton
                onClick={() => onAddNote()}
            />
        </header>
    )
}