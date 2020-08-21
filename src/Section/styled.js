import styled from "styled-components";


export const Container = styled.div`
    min-height: 100px;
    background-color: #fff;
    max-width: 1000px;
    margin: 10px auto;
    box-shadow: 0 0 5px 2px #ddd;
`;

export const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 10px;
    border-bottom: 2px solid #eee;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Header = styled.h2`
    font-weight: 700;
    margin: 0;
    padding: 20px;
`;