import React from "react";
import { Container, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <Container>
        {tasks.length > 0 && (
            <>
                <Button
                    onClick={toggleHideDone}
                    hidden={tasks.length === 0}
                >
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                </Button>
                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                    hidden={tasks.length === 0}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </Container>

);

export default Buttons;