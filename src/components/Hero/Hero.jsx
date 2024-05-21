import React from "react";
import heya from "../../assets/Heya.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import rocket from "../../assets/artwork.svg";
import Carousel from 'react-bootstrap/Carousel';
import slider from "../../assets/Logos strip.png"

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  /* height: 400px; */
  padding-bottom: 6px;
  padding-top: 120px;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
`;

const Headtext = styled.p`
  font-size: 50px;
  color: white;
`;
const Disverbutton = styled.button`
font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  padding: 17.05px 25px 17.21px 25px;
  border: none;
  color: #fff;
  margin-top: 25px;
  border-radius: 50px;
  background: linear-gradient(93deg, #333EFC 0%, #E548A5 100%, #AC1DF2 100%);
  justify-content: space-evenly;
`;
const Disverbuttontext = styled.button`
font-size: 16px;
font-weight: 600;
`;

const Hero = () => {
  return (
    <div className="bgcoll">
      <Container fluid className="bgcol">
        <Row>
          <Col>
            {/* <img src={heya} className='bg-warning' /> */}
            <HeroWrapper>
              <HeroImage src={heya} alt="Hero Image" />
            </HeroWrapper>
            <Headtext>
              Get early access to the latest token launches
              <br />& crazy airdrops
            </Headtext>
            <p className="text-white">
              Unleash the Power of the Hottest Crypto Launches and Discover{" "}
              <br />
              Amazing Airdrops for Exclusive Rewards and Limitless
              Opportunities!
            </p>
            {/* <Disverbutton>Discover Airdrops </Discoverbutton> */}
            <Disverbutton>
              <Disverbuttontext>Discover Airdrops</Disverbuttontext>
            </Disverbutton>
          </Col>
          <Col md={0}>
            <HeroImage src={rocket} alt="Hero Image" />
          </Col>
        </Row>

      </Container>
      <Carousel>
      <Carousel.Item>
        <img src={slider} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider} />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Hero;
