import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import airdrop from "../../assets/Group 353.png";
import lunchpad from "../../assets/Group 354.png";
import referral from "../../assets/Group 355.png";
import "./Commets.css";
import styled from "styled-components";
import boie from "../../assets/Ellipse 10.svg";
import str from "../../assets/Group 351.png";
import boie1 from "../../assets/Ellipse 10.png"
import boie2 from "../../assets/Ellipse 10 (1).png"
import boie3 from "../../assets/Ellipse 10 (2).png"


const Parafont = styled.p`
  color: white;
  padding: 20px 0px 50px 0px;
`;

const Commets = () => {
  return (
    <Container fluid className="bgcolr pb-0">
      <h3 className="text-white customer">Stories Happy Customers</h3>
      <Row className="cards">
        <Col>
          <Row>
            <Col lg={1} className="px-0">
              <img src={boie} className="" />
            </Col>
            <Col lg={6} className="ps-2">
              <h5 className="text-white">Esther Howard</h5>
              <img src={str} />
            </Col>
          </Row>
          <Row>
            <p className="text-white para">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast.
            </p>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col lg={1} className="px-0">
              <img src={boie1} className="" />
            </Col>
            <Col lg={6} className="ps-2">
              <h5 className="text-white">Marvin McKinney</h5>
              <img src={str} />
            </Col>
          </Row>
          <Row>
            <p className="text-white para">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast.
            </p>
          </Row>
        </Col>
      </Row>
      <Row className="cards">
        <Col>
          <Row>
            <Col lg={1} className="px-0">
              <img src={boie2} className="" />
            </Col>
            <Col lg={6} className="ps-2">
              <h5 className="text-white">Ralph Edwards</h5>
              <img src={str} />
            </Col>
          </Row>
          <Row>
            <p className="text-white para">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast.
            </p>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col lg={1} className="px-0">
              <img src={boie3} className="" />
            </Col>
            <Col lg={6} className="ps-2">
              <h5 className="text-white">Cody Fisher</h5>
              <img src={str} />
            </Col>
          </Row>
          <Row>
            <p className="text-white para">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast.
            </p>
          </Row>
        </Col>
      </Row>
      <hr className="text-white" />
      <Row className="peed">
        <Col>
          <img src={airdrop} />
        </Col>
        <Col>
          <img src={lunchpad} />
        </Col>
        <Col>
          <img src={referral} />
        </Col>
      </Row>
    </Container>
  );
};

export default Commets;
