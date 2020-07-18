import React from "react";
import "./style.css"

const Buttons = ({ tasks, hideDone }) => (
    <div className="buttons__container">
        {tasks.length > 0 && (
            <>
                <button
                    className={`buttons__button${tasks.length > 0 ? "" : " buttons__button--hidden"}`}>
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button
                    disabled={tasks.every(({ done }) => done)}
                    className={`buttons__button${tasks.length > 0 ? "" : " buttons__button--hidden"}`}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>

);

export default Buttons;