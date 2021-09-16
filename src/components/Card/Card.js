import React, { Component } from "react";

export default class card extends Component {
  render() {
    return (
      <div className={"card "}>
        <div className={"card-header"}>
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-category">{this.props.category}</p>
        </div>
        <div
          className={
            "content" +
        
            (this.props.ctTableFullWidth ? " table-full-width" : "") +
            (this.props.ctTableResponsive ? " table-responsive" : "") 
           
          }
        >

          {this.props.content}
        </div>
      </div>
    );
  }
}
