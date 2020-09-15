import React from "react";
import { useSelector, useDispatch } from "react-redux";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";
import { TasksList, Item, Content, Button, StyledLink } from "./styled";
import { selectTasks, toggleTaskDone, removeTask, selectTasksByQuery } from "../../tasksSlice";

const TaskList = () => {
    const query = useQueryParameter(searchQueryParamName);

    const { hideDone } = useSelector(selectTasks);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
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
                            <StyledLink to={`/zadania/${id}`}>{content}</StyledLink>
                        </Content>
                        <Button
                            remove
                            onClick={() => dispatch(removeTask(id))}
                        />
                    </Item>
                ))
            }
        </TasksList>
    );
};

export default TaskList;