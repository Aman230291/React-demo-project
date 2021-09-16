import React, { Component } from "react";


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }


  render() {
    return (
      <div className="content">
      <h3>Map</h3>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="card-stats card">
              <div className="card-body">
               <p>Map is created here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Map;
