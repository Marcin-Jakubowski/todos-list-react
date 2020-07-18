import React from "react";
import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="buttons__container">
        {tasks.length > 0 && (
            <>
                <button
                    onClick={toggleHideDone}
                    className={`buttons__button${tasks.length > 0 ? "" : " buttons__button--hidden"}`}>
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button
                onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                    className={`buttons__button${tasks.length > 0 ? "" : " buttons__button--hidden"}`}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>

);

export default Buttons;