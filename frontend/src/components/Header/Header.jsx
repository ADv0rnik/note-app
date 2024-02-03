import note from '/note.svg'
import './Header.css'
import AddButton from "../AddButton/AddButton.jsx";
import {PATHS} from "../../constants.js";
import {useNavigate} from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();

    function onAddNote () {
        navigate(`${PATHS.ADD_NOTE}`);
    }

    return (
        <header>
            <div className="header-text">
                <a href={`${PATHS.NOTES}`}>
                    <img width="40px" height="60px" src={note} alt="Logo"/>
                </a>
                <span>My Notes</span>
            </div>
            <AddButton
                onClick={() => onAddNote()}
            />
        </header>
    )
}