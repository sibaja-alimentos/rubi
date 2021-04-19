import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";
import smoothScroll from "gatsby-plugin-smoothscroll";

import Button from "../Button";

const Filter = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  letter-spacing: 0.5em;
`;

const Cover = () => {
  return (
    <>
      <div className="position-relative">
        <StaticImage
          src="../../images/cover.jpg"
          alt="Rubí tortillería"
          aspectRatio={1 / 1.5}
          className="d-block d-md-none"
        />
        <StaticImage
          src="../../images/cover.jpg"
          alt="Sibaja alimentos"
          aspectRatio={1}
          className="d-none d-md-block d-lg-none"
        />
        <StaticImage
          src="../../images/cover.jpg"
          alt="Sibaja alimentos"
          aspectRatio={1 / 0.45}
          className="d-none d-lg-block"
        />
        <Filter />
        <Wrapper className="text-white">
          <Container>
            <Row>
              <Col lg={6} className="mx-auto text-center">
                <Title className="text-uppercase h4 font-weight-bold mb-4">
                  Tortillería Rubí
                </Title>
                <p className="h3 mb-4">
                  20 años presentes en los momentos felices de tu familia
                </p>
                <Button
                  className="text-uppercase"
                  onClick={() => smoothScroll("#footer")}
                >
                  Contáctanos
                </Button>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </div>
    </>
  );
};

export default Cover;
