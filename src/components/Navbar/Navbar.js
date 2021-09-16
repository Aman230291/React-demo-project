import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import NavbarLink from "./NavbarLink";

class AdminNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#pablo">DTG Creative</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <NavbarLink />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AdminNavbar;
