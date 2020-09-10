import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    
    return (
        <Container>
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