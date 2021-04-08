import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Footer from "./Footer";
import HkMediumWoff2 from "../fonts/hkgrotesk-mediumlegacy-webfont.woff2";
import HkMediumWoff from "../fonts/hkgrotesk-mediumlegacy-webfont.woff";
import HkBoldWoff from "../fonts/hkgrotesk-boldlegacy-webfont.woff";
import HkBoldWoff2 from "../fonts/hkgrotesk-boldlegacy-webfont.woff2";

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

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
