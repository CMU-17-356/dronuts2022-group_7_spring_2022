import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap'


function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="./favicon-32x32.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Dronuts
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pending">Pending Orders</Nav.Link>
          <Nav.Link href="#checkout">Checkout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

//     <Navbar>
//   <Navbar.Header>
//     <Navbar.Brand>
//       <a href="#home">Brand</a>
//     </Navbar.Brand>
//     <Navbar.Toggle />
//   </Navbar.Header>
//   <Navbar.Collapse>
//     <Navbar.Text>
//       Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
//     </Navbar.Text>
//     <Navbar.Text>Have a great day!</Navbar.Text>
//   </Navbar.Collapse>
// </Navbar>
    
  );
}

export default CustomNavbar;