import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RL from "../../assets/ButtonRL.png"
import styled from 'styled-components';
import './Newsandupdate.css'
import applyforlunch from "../../assets/CTA.png"
import Newsprops from '../Newsprops/Newsprops'
import crd1 from "../../assets/Rectangle 15.png"
import crd2 from "../../assets/Rectangle 15 (1).png"
import crd3 from "../../assets/Rectangle 15 (2).png"
import crd4 from "../../assets/Rectangle 15 (3).png"

const Lunchtext = styled.p`
width: 359px;
height: 52px;
color: white;
font-style: normal;
font-weight: 700;
font-size: 45px;
line-height: 52px;
padding-bottom: 61px;
`;

const Newsandupdate = () => {
  return (
<Container fluid className='bgcolr'>
  <Row className=' ped d-flex justify-content-between'>
    <Col>
  <Lunchtext> News & Updates</Lunchtext>
  </Col>
  <Col className='d-flex justify-content-end'>
  <img src={RL} className='RL'/>
  </Col>
  </Row>
  <Row className=''>
    <div className='d-flex flex-row addjustment gap-3 px-0'>
    <Newsprops className="crdimgwid1" crdimg={crd1} message={"Arbitrum decentralized exchange IAO cancelation draws controversy"} date={"MAY 16, 2023"}/>
    <Newsprops className="crdimgwid" crdimg={crd2} message={"Arbitrum decentralized exchange IAO cancelation draws controversy"} date={"MAY 16, 2023"}/>
    <Newsprops className="crdimgwid1" crdimg={crd3} message={"Arbitrum decentralized exchange IAO cancelation draws controversy"} date={"MAY 16, 2023"}/>
    <Newsprops className="crdimgwid1" crdimg={crd4} message={"Arbitrum decentralized exchange IAO cancelation draws controversy"} date={"MAY 16, 2023"}/>
    </div>
  </Row>
  <Row>
    <img src={applyforlunch}/>
  </Row>
</Container>
  )
}

export default Newsandupdate;
