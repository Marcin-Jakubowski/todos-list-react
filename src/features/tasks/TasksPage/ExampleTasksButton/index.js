import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, fetchExampleTasks } from "../../tasksSlice";
import { Button, ButtonContainer } from "../../Button";

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
    );
};

export default ExampleTasksButton;