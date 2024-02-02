import './Note.css'

export default function Note (props) {
    return (
        <div className="note">
            <h3>{props.title}</h3>
            <p>{props.msg}</p>
        </div>
    )
}