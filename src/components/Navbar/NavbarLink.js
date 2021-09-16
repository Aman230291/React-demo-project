import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { Link , NavLink } from "react-router-dom";

class NavbarLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>

          <NavItem eventKey={2}>
          <NavLink to="/admin/dashboard">Dashboard </NavLink>
          </NavItem>

          <NavItem eventKey={3}>
         
            <NavLink to="/admin/UserProfile">Profile </NavLink>
          </NavItem>

          <NavItem eventKey={4} href="#">
            <p className="">
              {" "}
              <i className="fa fa-power-off" /> Logout
            </p>
          </NavItem>
       
        </Nav>
      </div>
    );
  }
}

export default NavbarLink;
