import React from "react";
import "./style.css"

const Tasks = ({ tasks, hiding }) => (
    <ul className="tasksList">
        {tasks.map(({ name, id, done }) => (
            <li key={id}
                className={`tasksList__item${hiding && done ? " tasksList__item--hidden" : ""}`}
            >
                <button className={`tasksList__button ${done ? "" : " tasksList__button--false"}`}></button>
                <span className={`tasksList__task ${done ? "" : " tasksList__task--false"}`}>
                    {name}
                </span>
                <button className="tasksList__button tasksList__button--deleteButton"></button>
            </li>
        ))}
    </ul>
);

export default Tasks;