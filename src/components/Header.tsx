import React, { useState } from "react";
import Headroom from "react-headroom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";

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
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${props => props.theme.colors.blue};
    opacity: 0.6;
  }
`;

const StyledLogo = styled(Logo)`
  width: 120px;
  max-width: 100%;
  height: auto;
  display: block;
  margin: auto;
`;

const MenuBtn = styled.button`
  width: 100%;
  max-width: 50px;
  background: transparent;
  border: 0;
  svg {
    width: 100%;
    height: auto;
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button:first-of-type {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 50px;
    background: transparent;
    border: 0;
    svg {
      width: 100%;
      height: auto;
    }
  }
  button:not(:first-of-type) {
    margin-bottom: 1.5rem;
  }
  &.opened {
    transform: translateX(0);
  }
`;

const SocialItems = styled.div`
  a {
    svg {
      path {
        transition: all 0.3s ease-in-out;
      }
    }
    &:hover {
      path {
        fill: ${props => props.theme.colors.blue};
        opacity: 0.6;
      }
    }
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
                <MenuBtn onClick={() => setOpen(true)}>
                  <Menu />
                </MenuBtn>
              </Col>
              <Col lg={5} className="d-none d-lg-block">
                <Row className="text-center">
                  <Col lg={6}>
                    <MenuItem onClick={() => scrollTo("#contact")}>
                      Contacto
                    </MenuItem>
                  </Col>
                  <Col lg={6}>
                    <SocialItems className="d-flex align-items-center justify-content-center">
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
                    </SocialItems>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </header>
      </Headroom>
      <MobileMenu className={`d-lg-none${open ? " opened" : ""}`}>
        <button onClick={() => setOpen(false)}>
          <Close />
        </button>
        <MenuItem
          onClick={() => {
            scrollTo("#horarios");
            setOpen(false);
          }}
        >
          Horarios y ubicación
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollTo("#products");
            setOpen(false);
          }}
        >
          Productos
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollTo("#contact");
            setOpen(false);
          }}
        >
          Contacto
        </MenuItem>
      </MobileMenu>
    </>
  );
};

export default Header;
