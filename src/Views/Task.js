import React, { Component } from "react";
import Multiselect from "multiselect-react-dropdown";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "../components/Card/Card";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { name: "Option 1️", id: 1 },
        { name: "Option 2️", id: 2 },
        { name: "Option 3", id: 3 },
        { name: "Option 4", id: 4 },
        { name: "Option 5", id: 5 },
        { name: "Option 6", id: 6 },
        { name: "Option 7", id: 7 },
      ],
    };
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Languages"
                content={
                  <div className="" id="multiselece">
                    <h4>Languages</h4>
                    <Multiselect
                      options={this.state.options} // Options to display in the dropdown
                      onSelect={this.onSelect} // Function will trigger on select event
                      onRemove={this.onRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                      showCheckbox={true}
                      placeholder="Choose Language"
                      showArrow={true}
                      closeIcon="cancel"
                      closeOnSelect={false}
                      hidePlaceholder={true}
                    />
                  </div>
                }
              ></Card>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Task;
