import './AddButton.css'

export default function AddButton({ children, isActive, ...props}) {
    return (
        <button
            {...props}
            className="button_plus"
        >
            {children}
        </button>
    )
}