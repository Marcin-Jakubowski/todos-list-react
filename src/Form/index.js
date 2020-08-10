import React, { useState, useRef } from "react";
import "./style.css"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim()) {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
        }
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                autoFocus
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <button
                className="form__button"
                onClick={() => inputRef.current.focus()}
            >
                Dodaj zadanie
            </button>
        </form>
    );
};

export default Form;