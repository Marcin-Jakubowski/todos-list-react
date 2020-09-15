import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonContainer } from "../styled";
import { selectTasks, fetchExampleTasks } from "../tasksSlice";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const { loadDone } = useSelector(selectTasks);

    return (
        <ButtonContainer>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loadDone === false}
            >
                {loadDone === false ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </Button>
        </ButtonContainer>
    )
};

export default ExampleTasksButton;