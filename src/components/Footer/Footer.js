import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <Link to="/admin/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/admin/UserProfile">Profile</Link>
              </li>
              <li>
                <Link  to="/admin/Table">Table</Link>
              </li>
              <li>
                <Link to="/admin/Task">Task</Link>
              </li>
            </ul>
          </nav>
          <p className="pull-right copyright">
            {" "}
            &copy; {new Date().getFullYear()}{" "}
            <a href="#">
             Rws Moravia Pvt Ltd.
            </a>
        
          </p>
        </Grid>
      </footer>
    );
  }
}
