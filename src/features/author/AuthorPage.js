import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Marcin Jakubowski"
            body={
                <>
                    Cześć, mam na imię Marcin :) Moje hobby to Kostka Rubika,
                    sport oraz gry komputerowe,
                    a od czasu rozpoczęcia kursu także programowanie :)
                </>
            }
        />
    </Container>
)