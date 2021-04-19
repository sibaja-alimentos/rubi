import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";
import smoothScroll from "gatsby-plugin-smoothscroll";

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
                  href="https://sibajaalimentos.com/#contacto"
                  target="_blank"
                  rel="noreferrer"
                  className="text-uppercase"
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
