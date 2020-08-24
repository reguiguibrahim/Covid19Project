import React from "react";
import Navbar from "react-bootstrap/Navbar";

import NavDropdown from "react-bootstrap/NavDropdown";

import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Search from "./Search";

function NavBar({ props }) {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg" >
        <Navbar.Brand>Covid-19 Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" style={{ color: "white", marginTop: "8px" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/Health_Info"
                style={{ color: "white", marginTop: "8px" }}
              >
                Health Info
              </Link>
            </Nav.Link>
            <NavDropdown style={{ color: "white"}} title="Countries" id="basic-nav-dropdown">
              {props ? (
                <div style={{color: "white", height: "400px", overflow: "auto" }}>
                  {props.map((country, i) => (
                    <li key={i}>
                      <NavDropdown.Item>
                        <Link to={`/${country}`}>{country}</Link>
                      </NavDropdown.Item>
                    </li>
                  ))}
                </div>
              ) : null}
            </NavDropdown>
          </Nav>
          <Search />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
