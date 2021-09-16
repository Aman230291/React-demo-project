import React, { Component } from "react";




class CustomCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_checked: props.isChecked ? true : false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ is_checked: !this.state.is_checked });
  }
  render() {
    return (
      <div>
        <input
         
          type="checkbox"
          onChange={this.handleClick}
          checked={this.state.is_checked}
        />
      </div>
    );
  }
}

export default CustomCheckbox;
