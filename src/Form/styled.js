import styled from "styled-components";

export const FormItem = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 20px;
    grid-gap: 20px;
    align-items: center;


    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    height: 45px;
`;

export const Button = styled.button`
    color: #fff;
    background-color: teal;
    padding: 10px;
    border: none;
    transition: 0.5s;
    height: 45px;

    &:hover {
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.1);
    }
    
    @media (max-width: 767px) {
        transform: scale(1.02);
    }
`;

