import React from "react";
import { Container, Box, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Container>
    <Box>
      <Header>
        {title}
      </Header>
      {extraHeaderContent}
    </Box>
    {body}
  </Container>
);

export default Section;