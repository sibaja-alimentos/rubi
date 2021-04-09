import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import Box from "./Box";
import Facebook from "../images/fb-footer.inline.svg";
import Instagram from "../images/ig-footer.inline.svg";
import Deco1 from "../images/tortilla-1.inline.svg";
import Deco2 from "../images/tortilla-2.inline.svg";
import Deco3 from "../images/tortilla-3.inline.svg";
import Deco4 from "../images/tortilla-4.inline.svg";

const FooterWrapper = styled.footer`
  overflow: hidden;
  position: relative;
  padding-top: 200px;
  a {
    color: #000;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${props => props.theme.colors.blue};
      text-decoration: none;
      opacity: 0.6;
    }
  }
  svg.deco {
    position: absolute;
    z-index: 2;
    &:nth-of-type(1) {
      top: 100px;
      left: 20%;
      width: 100px;
    }
    &:nth-of-type(2) {
      bottom: -15px;
      left: 100px;
      width: 80px;
    }
    &:nth-of-type(3) {
      width: 50px;
      top: 100px;
      right: 20%;
    }
    &:nth-of-type(4) {
      width: 50px;
      bottom: -8px;
      right: 100px;
    }
  }
`;

const Circle = styled(Box)`
  background-color: ${props => props.theme.colors.yellow};
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: -50vw;
  right: 0;
  margin: auto;
  width: 200vw;
  &:after {
    @media (max-width: 767px) {
      padding-top: 100%;
    }
  }
  @media (min-width: 1200px) {
    width: 116vw;
    left: -8vw;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper className="pb-5">
      <Circle height={60} />
      <Deco1 className="deco" />
      <Deco2 className="deco" />
      <Deco3 className="deco" />
      <Deco4 className="deco" />
      <Container className="text-center position-relative pt-5">
        <h4 className="text-uppercase h6">Tortillería Rubí</h4>
        <a href="" className="d-block">
          informacion@tortilleriarubi.com
        </a>
        <a href="tel:8993185234" className="d-block">
          (899) 318 5234
        </a>
        <div className="d-flex align-items-center justify-content-center mt-4 mb-5">
          <a
            href="https://www.facebook.com/tortillasrubireynosa"
            target="_blank"
            rel="noreferrer"
            className="mr-2"
          >
            <Facebook />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
        </div>
        <a href="" target="_blank" rel="noreferrer">
          Visita: Sibaja Alimentos
        </a>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
