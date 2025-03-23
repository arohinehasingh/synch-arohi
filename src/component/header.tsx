import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Header: React.FC = () => {
  return (
 
      <div className="bg-light text-dark">
        <div className="bg-primary text-white text-center py-2 shadow-sm">
          <Container className="d-flex flex-column flex-md-row justify-content-center align-items-center text-center">
            <span className="fw-light fst-italic fs-1">Introducing</span>
            <span className="fw-bold ms-1 fs-2"> S&P 500 Direct.</span>
            <span className="ms-1 fs-5 ">S&P 500® investing, designed to save money on taxes. </span>
            <a href="#" className="text-white fw-bold ms-1">Learn more</a>
          </Container>
        </div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#" className="text-primary fw-bold d-flex align-items-center ">
             
              Wealthfront
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto text-center text-lg-start">
                <Nav.Link href="#">Cash</Nav.Link>
                <Nav.Link href="#">Bonds</Nav.Link>
                <Nav.Link href="#">Automated Investing</Nav.Link>
                <Nav.Link href="#">Stocks</Nav.Link>
                <Nav.Link href="#">Learn</Nav.Link>
              </Nav>
              <div className="d-flex flex-column flex-lg-row text-center text-lg-start mt-2 mt-lg-0">
                <Button variant="outline-primary" className="me-lg-2 mb-2 mb-lg-0">Log in</Button>
                <Button variant="primary">Get started</Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  
};

export default Header;
