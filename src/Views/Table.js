import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "../components/Card/Card";

const thArray = ["ID", "Name", "Salary", "City", "Department"];
const thArray1 = ["ID", "Name", "Basic Salary", "HRA", "PF"];

const tdArray = [
  ["1", "kapil Roa", "$36,738", "Indore", "DTG"],
  ["2", "Rahul Barfa", "$23,789", "khandwa", "DTG"],
  ["3", "karan johar", "$56,142", "bhopal", "DTG"],
  ["4", "Bhagyashree Bargal", "$38,735", "Gwalior", "DTG"],
  ["5", "Ganesh Patidar", "$63,542", "ujjain", "DTG"],
  ["6", "Aman Goswami", "$78,615", "Bhopal", "DTG"],
];

export default class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row><Col md={6}>
              <Card
                title="Project Structure"
                category="Rws DTG Department"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return(
                        <tr key={key}>
                          {prop.map((prop,key ) => {
                           return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );})}
                    </tbody>
                  </Table>
                }
              ></Card>
            </Col>
            <Col md={6}>
              <Card
                title="Attendence Structure"
                category="Rws DTG Department"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return(
                        <tr key={key}>
                          {prop.map((prop,key ) => {
                           return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );})}
                    </tbody>
                  </Table>
                }
              ></Card>
            </Col>
            <Col md={12}>
              <Card
                title="Salary structure"
                category="Rws Team Department"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table  hover>
                    <thead>
                      <tr>
                        {thArray1.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return(
                        <tr key={key}>
                          {prop.map((prop,key ) => {
                           return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );})}
                    </tbody>
                  </Table>
                }
              ></Card>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
