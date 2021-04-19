import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import Image from "../../images/elotitos.png";
import MobileImg from "../../images/elotitos-movil.png";

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.red};
`;

const Img = styled.img`
  object-position: left;
  @media (min-width: 768px) {
    object-position: center;
  }
`;

const Button = styled.a`
  background-color: #fff;
  color: ${props => props.theme.colors.blue};
  border-radius: 50rem;
  border: none;
  padding: 20px 50px;
  letter-spacing: 0.2em;
  transition: all 0.3s ease-in-out;
  font-size: 0.8rem;
  &:hover {
    background-color: ${props => props.theme.colors.blue};
    color: #fff;
    text-decoration: none;
  }
`;

const Banner = () => {
  return (
    <Container id="contact" fluid className="py-5">
      <Wrapper className="py-5 position-relative px-3">
        <Img
          src={Image}
          alt=""
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            objectFit: "cover",
          }}
          className="d-none d-md-block"
        />
        <Img
          src={MobileImg}
          alt=""
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            objectFit: "cover",
          }}
          className="d-md-none"
        />
        <Row className="py-5">
          <Col lg={10} className="mx-auto py-5">
            <Row className="align-items-center">
              <Col lg={7}>
                <h2 className="text-white text-center text-lg-left mb-4 mb-lg-0">
                  También, contamos con servicio para comedores industriales
                </h2>
              </Col>
              <Col lg={5} className="text-center">
                <Button
                  href="https://sibajaalimentos.com/#contacto"
                  target="_blank"
                  rel="noreferrer"
                  className="text-uppercase"
                >
                  Contáctanos
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Banner;
