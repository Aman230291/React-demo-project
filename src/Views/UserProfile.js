import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormControl,
  FormGroup,
  ControlLabel,
} from "react-bootstrap";

import Card from "../components/Card/Card";
import  Button  from "../components/Button/Button";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormGroup controlId="formBasicText">
                      <ControlLabel>User Name</ControlLabel>
                      <FormControl type="text" placeholder="Enter UserName" />
                    </FormGroup>
                    <FormGroup controlId="formBasicText">
                      <ControlLabel>Password</ControlLabel>
                      <FormControl
                        type="password"
                        placeholder="Enter UserName"
                      />
                    </FormGroup>
                    <Button/>
                  </form>
                }
              ></Card>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
