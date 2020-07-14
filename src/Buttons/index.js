import React from "react";
import "./style.css"

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="section__buttonContainer">
        {tasks.length > 0 && (
            <>
                <button className={`section__button${tasks.length > 0 ? "" : " tasksList--hidden"}`}>
                    {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button disabled={tasks.every(({ done }) => done)} className={`section__button${tasks.length > 0 ? "" : " tasksList--hidden"}`}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>

);

export default Buttons;