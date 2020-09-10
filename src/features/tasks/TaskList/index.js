import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TasksList, Item, Content, Button } from "./styled";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

const TaskList = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (!tasks.length) {
        return null;
    }

    return (
        <TasksList>
            {
                tasks.map(({ content, id, done }) => (
                    <Item
                        key={id}
                        hidden={done && hideDone}
                    >
                        <Button
                            toggleDone
                            onClick={() => dispatch(toggleTaskDone(id))}
                            doneTask={done}
                        />
                        <Content done={done}>
                            {content}
                        </Content>
                        <Button
                            remove
                            onClick={() => dispatch(removeTask(id))}
                        />
                    </Item>
                ))
            }
        </TasksList>
    )
};

export default TaskList;