import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "../components/Card/Card";
import CardNumbers from "../components/CardNumbers/CardNumbers";
import Task from "../components/Task/Task";

const thArray = [
  "ID",
  "Name",
  "Salary",
  "City",
  "Department",
  "Profile",
  "Joining date",
];

const tdArray = [
  ["1", "kapil Roa", "$36,738", "Indore", "DTG", "Ui Developer", "13-09-2021"],
  [
    "2",
    "Rahul Barfa",
    "$23,789",
    "khandwa",
    "DTG",
    "Frontend Developer",
    "13-09-2021",
  ],
  [
    "3",
    "karan johar",
    "$56,142",
    "bhopal",
    "DTG",
    "Ui Developer",
    "13-09-2021",
  ],
  [
    "4",
    "Bhagyashree Bargal",
    "$38,735",
    "Gwalior",
    "DTG",
    "Ui Designer",
    "13-09-2021",
  ],
  [
    "5",
    "Ganesh Patidar",
    "$63,542",
    "ujjain",
    "DTG",
    "Ui Developer",
    "13-09-2021",
  ],
  [
    "6",
    "Aman Goswami",
    "$78,615",
    "Bhopal",
    "DTG",
    "Ui Developer",
    "13-09-2021",
  ],
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={3}>
              <CardNumbers
                bigIcon={<i className="fa fa-tachometer text-primary" />}
                statsText="Total Employee"
                statsValue="655"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col md={3}>
              <CardNumbers
                bigIcon={<i className="fa fa-user text-success" />}
                statsText="Present Employee"
                statsValue="510"
                statsIcon={<i className="fa fa-calendar" />}
                statsIconText="Last day"
              />
            </Col>
            <Col md={3}>
              <CardNumbers
                bigIcon={<i className="fa fa-user-times text-danger" />}
                statsText="Absent Employee"
                statsValue="45"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col md={3}>
              <CardNumbers
                bigIcon={<i className="fa fa-inr text-warning" />}
                statsText="Revenue"
                statsValue="105000+"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last Year"
              />
            </Col>
          </Row>
        </Grid>
        <Grid fluid>
          <Row>
            <Col md={12} sm={12}>
              <Card
                title="List of all Rws Employee"
                category="All Department"
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
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>

        <Grid fluid>
          <Row>
            <Col md={12} sm={12}>
              <Card
                title="Task list"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <Task />
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

export default Dashboard;
