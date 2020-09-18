import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTaskById } from '../tasksSlice';
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Wybrane zadanie" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania :("}
                body={<><strong>Ukończono:</strong> {task && task.done ? "tak" : "nie"}</>}
            />
        </Container>
    );
};

export default TaskPage;