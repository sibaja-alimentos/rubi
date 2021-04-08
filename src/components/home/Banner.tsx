import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../Button";

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.red};
`;

const Banner = () => {
  return (
    <Container id="contact" fluid className="py-5">
      <Wrapper className="py-5 position-relative">
        <StaticImage
          src="../../images/elotitos.png"
          alt=""
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            objectFit: "cover",
          }}
        />
        <Row className="py-5">
          <Col lg={10} className="mx-auto py-5">
            <Row className="align-items-center">
              <Col lg={7}>
                <h2 className="text-white">
                  También, contamos con servicio para comedores industriales
                </h2>
              </Col>
              <Col lg={5} className="text-center">
                <Button className="text-uppercase">Contáctanos</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Banner;
