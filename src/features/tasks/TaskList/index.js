import React from "react";
import { TasksList, Item, Content, Button } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => {
    if (!tasks.length) {
        return null;
    }

    return (
        <TasksList>
            {
                tasks.map(({ name, id, done }) => (
                    <Item
                        key={id}
                        hidden={done && hideDone}
                    >
                        <Button
                            toggleDone
                            onClick={() => toggleTaskDone(id)}
                            doneTask={done}
                        />
                        <Content done={done}>
                            {name}
                        </Content>
                        <Button
                            remove
                            onClick={() => removeTask(id)}
                        />
                    </Item>
                ))
            }
        </TasksList>
    )
};

export default TaskList;