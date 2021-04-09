import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import Box from "../Box";

const Content = styled(Col)`
  background-color: #f3f3f3;
`;

const ImageBox = styled(Box)``;

const Products = () => {
  return (
    <>
      <div id="products" className="d-flex flex-wrap mt-5 mx-0 mb-4 mb-lg-0">
        <Content
          xs={12}
          lg={6}
          className="text-center py-5 d-flex flex-wrap align-items-center justify-content-center"
        >
          <div className="d-inline-block text-left">
            <h2 className="d-inline-block mb-4">Tortillas de maíz</h2>
            <ul className="list-unstyled p-0 m-0">
              <li>Tortilla de maseca</li>
              <li>Tortilla de maíz</li>
              <li>Tortilla de taco</li>
              <li>Tortilla roja</li>
              <li>Tortilla siberia</li>
              <li>Totopos</li>
            </ul>
          </div>
        </Content>
        <Col xs={12} lg={6} className="px-0">
          <StaticImage
            src="../../images/tacos.jpg"
            alt="tacos con tortilla de maíz"
            aspectRatio={1 / 0.68}
            className="d-block"
          />
        </Col>
      </div>
      <div className="d-flex flex-wrap">
        <Content
          xs={12}
          lg={6}
          className="text-center py-5 d-flex align-items-center justify-content-center order-lg-1"
        >
          <div className="d-inline-block text-left">
            <h2 className="d-inline-block mb-4">Tortillas de trigo</h2>
            <ul className="list-unstyled p-0 m-0">
              <li>Tortilla de sincronizada 28 cm</li>
              <li>Tortilla para taco gigante 26 cm</li>
              <li>Tortilla para burrito 20 cm</li>
              <li>Tortilla de mesa 15 cm</li>
              <li>Tortilla para taco 13 cm</li>
            </ul>
          </div>
        </Content>
        <Col xs={12} lg={6} className="px-0 order-lg-0">
          <StaticImage
            src="../../images/burritos.jpg"
            alt="burritos con tortilla de trigo"
            aspectRatio={1 / 0.68}
            className="d-block"
          />
        </Col>
      </div>
    </>
  );
};

export default Products;
