import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextLoop from "react-text-loop";
import styled from "styled-components";

import Decoration from "../../images/decoration.inline.svg";
import Tortillas from "../../images/tortillas.inline.svg";

const Title = styled.h2`
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  span {
    color: ${props => props.theme.colors.red};
  }
`;

const Deco = styled(Decoration)`
  width: 100px;
  max-width: 100%;
`;

const TortillaIcon = styled(Tortillas)`
  width: 120px;
  max-width: 80%;
`;

const About = () => {
  return (
    <Container className="text-center pt-5 mt-5">
      <Title className="mb-4">
        Brindamos servicio a{" "}
        <TextLoop>
          <span>clientes en mostrador.</span>
          <span>taquerías.</span>
          <span>restaurantes.</span>
          <span>dark kitchens.</span>
          <span>food trucks.</span>
          <span>cocinas económicas.</span>
        </TextLoop>
      </Title>
      <Deco />
      <Row className="mt-5">
        <Col lg={7} className="mx-auto">
          <TortillaIcon />
          <p className="h4 mt-3">
            Las tortillas más ricas, siempre calientitas, siempre recién hechas.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
