import note from '/note.svg'
import './Header.css'
import Button from "../Button/Button.jsx";
import {useEffect, useState} from "react";
import {act} from "react-dom/test-utils";
import { styled } from "styled-components";
import AddButton from "../AddButton/AddButton.jsx";


export default function Header() {
    const [content, setContent] = useState(null)
    const [active, setActive] = useState(false)


    function handleClick(type) {
        setContent(type)
        console.log(content)
    }

    return (
        <header>
            <div className="header-text">
                <img width="40px" height="60px" src={note} alt="Logo"/>
                <span>My Notes</span>
            </div>
            <AddButton
                isActive={content === "foo"}
                onClick={() => handleClick("foo")}
            />
        </header>
    )
}