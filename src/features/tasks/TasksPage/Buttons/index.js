import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonContainer } from "../../Button";
import { selectTasks, toggleHideDone, setAllDone, removeDone } from "../../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <ButtonContainer>
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
                    <Button
                        onClick={() => dispatch(removeDone())}
                        disabled={tasks.every(({ done }) => !done)}
                    >
                        Usuń ukończone
                    </Button>
                </>
            )}
        </ButtonContainer>
    );
};

export default Buttons;