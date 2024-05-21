import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import RL from "../../assets/ButtonRL.png"
import calender from "../calender.json"

const Lunchtext = styled.p`
    position: absolute;
width: 359px;
height: 52px;
left: 150px;
top: 1050px;
color: white;
font-style: normal;
font-weight: 700;
font-size: 45px;
line-height: 52px;
padding-bottom: 61px;
`;
const Date = styled.p`
    font-size: 22px;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-top: 145px;
    gap: 20px;
    padding-bottom: 61px;
`

const Lunchcalender = () => {
    console.log(calender)
  return (
    <div className="bgcoll">
      <Container>
        <Row>
          <Col>
            <Lunchtext> Launch Calendar</Lunchtext>
          </Col>
          <Col className="text-white">
            <Date>Mar 26 - Apr 1, 2023
                <img src={RL}/>
            </Date>
          </Col>
        </Row>
        <Row>
            {/* <div>
                {
                    calender.map((calenderr)=>(
                          <h3>{calenderr.date}</h3>
                          <p>{calenderr.day}</p>
                    ))
                }
            </div> */}
        </Row>
      </Container>
    </div>
  );
};

export default Lunchcalender;
