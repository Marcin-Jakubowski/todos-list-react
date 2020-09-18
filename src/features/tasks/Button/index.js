import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: end;
    grid-gap: 10px;
    padding-right: 20px;
    
    @media (max-width: 767px) {
        grid-template-columns: auto;
        justify-content: center;
        margin-bottom: 20px;
        padding-right: 0;
    }
`;

export const Button = styled.button`
    color: teal;
    border: none;
    background-color: #fff;
    padding: 10px;
    transition: 0.25s;

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: #ccc;
    }

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;