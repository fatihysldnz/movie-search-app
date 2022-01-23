import React from "react";
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import alertify from "alertifyjs";

const Topbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    alertify.confirm(
      "Logout",
      "Are you sure want to logout?",
      () => {
        localStorage.removeItem("token");
        navigate("/");
      },
      () => {
        console.log("canceled");
      }
    );
  };

  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">The Movie DB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Profile</Nav.Link>

              <NavDropdown title="Movie Type" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Comedy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Adventure
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">...</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <button className="logout-button" onClick={handleLogout}>
            <CgLogOut /> &nbsp; Logout
          </button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
