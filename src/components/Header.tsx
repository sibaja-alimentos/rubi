import React, { useState } from "react";
import Headroom from "react-headroom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Squash as Hamburger } from "hamburger-react";

import Logo from "../images/rubi.inline.svg";
import Facebook from "../images/facebook.inline.svg";
import Instagram from "../images/instagram.inline.svg";
import Menu from "../images/menu.inline.svg";
import Close from "../images/close.inline.svg";

const MenuItem = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
`;

const StyledLogo = styled(Logo)`
  width: 120px;
  max-width: 100%;
  height: auto;
  display: block;
  margin: auto;
`;

const HamburgerWrapper = styled.div`
  z-index: 2000;
  position: absolute;
  top: 15px;
  right: 15px;
`;

const MobileMenu = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  background: #fff;
  z-index: 1999;
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;
  &.opened {
    transform: translateX(0);
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Headroom>
        <header className="py-4 bg-white">
          <Container>
            <Row className="align-items-center">
              <Col lg={5} className="d-none d-lg-block">
                <Row className="text-center">
                  <Col lg={6}>
                    <MenuItem onClick={() => scrollTo("#horarios")}>
                      Horarios y ubicación
                    </MenuItem>
                  </Col>
                  <Col lg={6}>
                    <MenuItem onClick={() => scrollTo("#products")}>
                      Productos
                    </MenuItem>
                  </Col>
                </Row>
              </Col>
              <Col xs={6} lg={2}>
                <StyledLogo />
              </Col>
              <Col xs={6} className="d-flex d-lg-none justify-content-end">
                <Menu />
              </Col>
              <Col lg={5} className="d-none d-lg-block">
                <Row className="text-center">
                  <Col lg={6}>
                    <MenuItem onClick={() => scrollTo("#contact")}>
                      Contacto
                    </MenuItem>
                  </Col>
                  <Col lg={6}>
                    <div className="d-flex align-items-center justify-content-center">
                      <a
                        href=""
                        target="_blank"
                        rel="noreferrer"
                        className="mr-3"
                      >
                        <Facebook />
                      </a>
                      <a href="" target="_blank" rel="noreferrer">
                        <Instagram />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </header>
      </Headroom>
      <MobileMenu className={`d-lg-none${open ? " opened" : ""}`}>
        <HamburgerWrapper>
          <Hamburger color="#000" toggled={open} onToggle={setOpen} />
        </HamburgerWrapper>
      </MobileMenu>
    </>
  );
};

export default Header;
