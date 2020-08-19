import styled, { css } from "styled-components";
import removeImage from "./delete.png";
import doneImage from "./done.png";


export const TasksList = styled.ul`
    margin: 20px;
    padding: 0 0 20px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    border-bottom: 2px solid #eee;
    margin: 0 auto;

    ${({ hidden }) => hidden && css`
    display: none;
    `}
`;


export const Content = styled.span`
    margin: auto 0;
    
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 40px;
    height: 40px;
    margin: 10px;
    border: none;
    transition: 0.25s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: green;

        &:hover {
            background-color: hsl(120, 100%, 35%);
        }

        &:active {
            background-color: hsl(120, 100%, 40%);
        }
    `}

    ${({ doneTask }) => doneTask && css`
        background-size: cover;
        background-image: url(${doneImage});
    `}

    ${({ remove }) => remove && css`
        background-color: red;
        background-image: url(${removeImage});
        background-size: cover;

        &:hover {
            background-color: hsl(0, 100%, 60%);
        }

        &:active {
            background-color: hsl(0, 100%, 65%);
        }
    `}
`;