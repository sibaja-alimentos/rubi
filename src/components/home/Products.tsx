import React from "react";
import { Col } from "react-bootstrap";
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
      <div id="products" className="d-flex mt-5">
        <Content
          lg={6}
          className="text-center py-5 d-flex align-items-center justify-content-center"
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
        <Col lg={6} className="px-0">
          <ImageBox height={68} className="position-relative">
            <StaticImage
              src="../../images/tacos.jpg"
              alt="tacos con tortilla de maíz"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                objectFit: "cover",
              }}
            />
          </ImageBox>
        </Col>
      </div>
      <div className="d-flex">
        <Content
          lg={6}
          className="text-center py-5 d-flex align-items-center justify-content-center order-1"
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
        <Col lg={6} className="px-0 order-0">
          <ImageBox height={68} className="position-relative">
            <StaticImage
              src="../../images/burritos.jpg"
              alt="burritos con tortilla de trigo"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                objectFit: "cover",
              }}
            />
          </ImageBox>
        </Col>
      </div>
    </>
  );
};

export default Products;
