import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import Arrow from "../../images/arrow.inline.svg";

const locations = [
  {
    address: "Las Lomas 301-B",
    city: "Reynosa, Tamaulipas",
    cp: "88730",
    url:
      "https://www.google.com.mx/maps/place/Tortilleria+Rubi/@26.0398172,-98.3547958,17z/data=!4m5!3m4!1s0x86650454d4f7e9db:0x5e40fd628ac67544!8m2!3d26.039075!4d-98.352768",
    days: "Lunes a domingo:",
    hours: "5:00 a 20:00 horas",
  },
  {
    address: "San Quintín 1,044",
    cp: "88730",
    city: "Reynosa, Tamaulipas",
    url:
      "https://www.google.com.mx/maps/place/San+Quint%C3%ADn+1044,+Lomas+del+Real+de+Jarachina+Sur,+88730+Reynosa,+Tamps./@26.0412197,-98.3623167,18z/data=!3m1!4b1!4m5!3m4!1s0x86650450d3685617:0x96c25cb86899f6b6!8m2!3d26.0412197!4d-98.3612224",
    days: "Lunes a sábado:",
    hours: "6:00 a 14:00 horas",
  },
];

const LocationBlock = styled.div`
  border-top: 1px solid #000;
  &:last-of-type {
    border-bottom: 1px solid #000;
  }
`;

const LocationLink = styled.a`
  line-height: 1;
  color: #000;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${props => props.theme.colors.blue};
    text-decoration: none;
    opacity: 0.6;
  }
`;

const Locations = () => {
  return (
    <Container id="horarios" fluid className="mt-5">
      {locations.map(location => (
        <LocationBlock key={location.address} className="pt-4 pb-5">
          <Row className="text-center">
            <Col lg={6}>
              <h3 className="font-weight-bold mb-4">Horarios de apertura:</h3>
              <p className="mb-0 h4 font-weight-normal">{location.days}</p>
              <p className="h4">{location.hours}</p>
            </Col>
            <Col lg={6}>
              <h3 className="font-weight-bold mb-4">Ubicación:</h3>
              <p className="mb-0 h4">{location.address}</p>
              <p className="mb-0 h4">{location.cp}</p>
              <p className="h4">{location.city}</p>
              <LocationLink
                href={location.url}
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center text-sm mt-4"
              >
                <span className="mr-2">Ver en Google Maps</span>
                <Arrow />
              </LocationLink>
            </Col>
          </Row>
        </LocationBlock>
      ))}
    </Container>
  );
};

export default Locations;
