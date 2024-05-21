import React from "react";
import "./Upcomming.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styled from "styled-components";

const Upcoming = styled.h4`
color:white;
font-size: 45px;
`;
const Lunchbtn = styled.button`
    background: #CA47B2;
    color: white;
    width: 137px;
    border-radius: 60px;
`

const Upcomming = () => {
  return (
    <Container fluid className="bgcol">
      <Row>
        <Col>
        <Upcoming>Upcomming</Upcoming>
          {/* <Upcoming>Upcomming</Upcoming> */}
        </Col>
        <Col className="d-flex gap-4 justify-content-end px-0">
          <Lunchbtn>Launchpad</Lunchbtn>
          <Button>Airdrops</Button>
          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" active>
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default Upcomming;
