import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button } from "./styled";
import { selectTasks, toggleHideDone, setAllDone, fetchExampleTasks } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    
    return (
        <Container>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {tasks.length > 0 && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                        hidden={tasks.length === 0}
                    >
                        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                        hidden={tasks.length === 0}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Container>

    )
};

export default Buttons;