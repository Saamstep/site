import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/samstep-light-t.svg";
// import { useState } from "react";

function NavBarMenu() {
  // const [ActiveItem, setActiveMenuItem] = useState(0);

  function smoothScroll(anchorName: string) {
    const anchor = document.querySelector(anchorName);
    if (anchor !== null) anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Navbar expand="lg" bg="dark" fixed="top">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            width="35"
            // className="d-inline-block align-top"
            alt="Samstep 2022 Logo"
            onClick={() => {
              // setActiveMenuItem(0);
              return smoothScroll("#home");
            }}
            style={{ cursor: "pointer" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              // className={(ActiveItem === 1 && "active") || ""}
              onClick={() => {
                // setActiveMenuItem(1);
                return smoothScroll("#about");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              // className={(ActiveItem === 2 && "active") || ""}
              onClick={() => {
                // setActiveMenuItem(2);
                return smoothScroll("#projects");
              }}
            >
              Projects
            </Nav.Link>
            {/* <Nav.Link
              // className={(ActiveItem === 3 && "active") || ""}
              onClick={() => {
                // setActiveMenuItem(3);
                return smoothScroll("#contact");
              }}
            >
              Contact
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenu;
