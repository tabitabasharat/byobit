import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import newup1 from "../../assets/Rectangle 15.png";
import newup2 from "../../assets/Rectangle 15 (1).png";
import newup3 from "../../assets/Rectangle 15 (2).png";
import newup4 from "../../assets/Rectangle 15 (3).png";

const Newsprops = ({ crdimg, message, date }) => {
  return (
    <Container>
      <Row>
        <Col className="crdimgwid px-0">
          {/* <img src={newup1} className="crdsloder"/> */}
          <img src={crdimg}
           alt="img"/>
          <h3 className="text-warning">{message}</h3>
          <p className="text-warning">{date}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Newsprops;
