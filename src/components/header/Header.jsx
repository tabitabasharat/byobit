import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/Logo 2.png";
import { Button } from "react-bootstrap";
import ticket from "../../assets/Button.png"
import signinlogo from "../../assets/user-multiple-group--close-geometric-human-multiple-person-up-user.png"
import './Header.css'

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bgcoll">
        <Container>
          <Navbar.Brand href="#home" className="">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto gap-3 d-flex align-items-center">
              <Nav.Link href="#deets" className="likz">Launchpads</Nav.Link>
              <Nav.Link href="#memes" className="likz">Airdrops</Nav.Link>
              <Nav.Link href="#memes" className="likz">News</Nav.Link>
              <Button className="create">+ Create</Button>
              <img src={ticket}/>
              <div className="bgdes">
              <img src={signinlogo}/>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
