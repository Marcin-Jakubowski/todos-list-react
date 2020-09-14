import React from "react";
import { useDispatch } from "react-redux";
import { Button, ButtonContainer } from "../styled";
import { fetchExampleTasks } from "../tasksSlice";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();

    return (
        <ButtonContainer>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </ButtonContainer>
    )
};

export default ExampleTasksButton;