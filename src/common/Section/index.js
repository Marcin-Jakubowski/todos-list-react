import React from "react";
import { Container, Box, Header, BodyBox } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Container>
    <Box>
      <Header>
        {title}
      </Header>
      {extraHeaderContent}
    </Box>
    <BodyBox>
      {body}
    </BodyBox>
  </Container>
);

export default Section;