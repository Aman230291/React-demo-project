import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  componentDidMount() {
    console.log("hello");
  }
  render() {
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
        <div className="logo">
          <a href="https://www.rws.com" className="simple-text logo-mini">
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a href="https://www.rws.com" className="simple-text logo-normal">
            xyz
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.props.routes.map((prop, key) => {
              console.log("Sidebar",prop);
              return (
                <li className="active-pro " key={key}>
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
