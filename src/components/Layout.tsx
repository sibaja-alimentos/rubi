import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Footer from "./Footer";
import HkMediumWoff2 from "../fonts/hkgrotesk-mediumlegacy-webfont.woff2";
import HkMediumWoff from "../fonts/hkgrotesk-mediumlegacy-webfont.woff";
import HkBoldWoff from "../fonts/hkgrotesk-boldlegacy-webfont.woff";
import HkBoldWoff2 from "../fonts/hkgrotesk-boldlegacy-webfont.woff2";
import Whatsapp from "../images/whatsapp.inline.svg";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "HK Grotesk";
    src: url(${HkMediumWoff2}) format("woff2"),
      url(${HkMediumWoff}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "HK Grotesk";
    src: url(${HkBoldWoff}) format("woff"), url(${HkBoldWoff2}) format("woff2");
    font-weight: bold;
    font-style: bold;
  }
  html, body {
    font-family: "HK Grotesk";
    font-size: 18px;
  }
`;

const theme = {
  colors: {
    blue: "#102A83",
    red: "#DD3F45",
    yellow: "#FCCA5F",
  },
};

const WhatsappBtn = styled.a`
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 70px;
  z-index: 1999;
  background: transparent;
  border: 0;
  display: block;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(0.95);
  }
  @media (min-width: 992px) {
    width: 80px;
  }
  svg {
    width: 100%;
    height: auto;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
      <WhatsappBtn
        href="https://api.whatsapp.com/send?phone=+528993185234&text=Me+gustar%C3%ADa+recibir+informaci%C3%B3n+de+tortiller%C3%ADa+Rub%C3%AD"
        target="_blank"
        rel="noreferrer"
      >
        <Whatsapp />
      </WhatsappBtn>
    </ThemeProvider>
  );
};

export default Layout;
