import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap'
import logo from '../image/favicon-32x32.png';


function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
         <img src={logo} alt="Logo" />
          Dronuts
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Menu</Nav.Link>
          <Nav.Link href="/pending">Pending Orders</Nav.Link>
          <Nav.Link href="/checkout">Checkout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;