<<<<<<< HEAD
import React, { useState } from 'react';
import {Container, Navbar, Nav, Button} from 'react-bootstrap'
import logo from '../image/favicon-32x32.png';
import { useNavigate } from 'react-router-dom';





function CustomNavbar() {
  if (null == localStorage.getItem("Permission")) {
    localStorage.setItem("Permission", "Employee")
  }
  const [permission, editPermission] = useState<String>(localStorage.getItem("Permission") || "Employee");
  const navigate = useNavigate();
  const updatePermission = (permission: string) => {
    editPermission(permission);
    if (permission == "Employee")
      navigate("/pending");
    else {
      navigate("/");
    }
    localStorage.setItem("Permission", permission)
  }

  var nav;
  if (permission == "Employee") {
    nav = <Nav className="me-auto">
      <Nav.Link href="/pending">Pending Orders</Nav.Link> 
      <Nav.Link href="/delivery_status">Delivery Status</Nav.Link>
    </Nav>;
  }
  else {
    nav = <Nav className="me-auto">
      <Nav.Link href="/">Menu</Nav.Link>
      <Nav.Link href="/checkout">Checkout</Nav.Link>
      <Nav.Link href="/delivery_status">Delivery Status</Nav.Link>
    </Nav>;
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
         <img src={logo} alt="Logo" />
          Dronuts
        </Navbar.Brand>
        {nav}
        {(permission == "Employee")?
         <Button onClick={() => updatePermission("Customer")}>View as Customer</Button>:
          <Button onClick={() => updatePermission("Employee")}>View as Employee</Button>}
      </Container>
    </Navbar>
  );
}

=======
import React, { useState } from 'react';
import {Container, Navbar, Nav, Button} from 'react-bootstrap'
import logo from '../image/favicon-32x32.png';
import { useNavigate } from 'react-router-dom';





function CustomNavbar() {
  if (null == localStorage.getItem("Permission")) {
    localStorage.setItem("Permission", "Employee")
  }
  const [permission, editPermission] = useState<String>(localStorage.getItem("Permission") || "Employee");
  const navigate = useNavigate();
  const updatePermission = (permission: string) => {
    editPermission(permission);
    if (permission == "Employee")
      navigate("/pending");
    else {
      navigate("/");
    }
    localStorage.setItem("Permission", permission)
  }

  var nav;
  if (permission == "Employee") {
    nav = <Nav className="me-auto">
      <Nav.Link href="/pending">Pending Orders</Nav.Link> 
      <Nav.Link href="/delivery_status">Delivery Status</Nav.Link>
    </Nav>;
  }
  else {
    nav = <Nav className="me-auto">
      <Nav.Link href="/">Menu</Nav.Link>
      <Nav.Link href="/checkout">Checkout</Nav.Link>
      <Nav.Link href="/delivery_status">Delivery Status</Nav.Link>
    </Nav>;
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
         <img src={logo} alt="Logo" />
          Dronuts
        </Navbar.Brand>
        {nav}
        {(permission == "Employee")?
         <Button onClick={() => updatePermission("Customer")}>View as Customer</Button>:
          <Button onClick={() => updatePermission("Employee")}>View as Employee</Button>}
      </Container>
    </Navbar>
  );
}

>>>>>>> e12a648a840ea294668d2bf44e3986e3a61ad443
export default CustomNavbar;