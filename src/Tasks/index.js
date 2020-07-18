import React from "react";
import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="tasksList">
        {tasks.map(({ name, id, done }) => (
            <li
                key={id}
                className={`tasksList__item${hideDone && done ? " tasksList__item--hidden" : ""}`}>
                <button
                    className={`tasksList__button
                    ${done ? "" : " tasksList__button--taskNotDone"}`}>
                </button>
                <span className={`tasksList__task ${done ? "" : " tasksList__task--taskNotDone"}`}>
                    {name}
                </span>
                <button
                    className="tasksList__button tasksList__button--deleteButton"
                    onClick={() => removeTask(id)}
                >
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;