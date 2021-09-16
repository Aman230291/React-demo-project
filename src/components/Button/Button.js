import React, { Component } from "react";
import { Button , ButtonToolbar } from "react-bootstrap";

class CustomButton extends Component {
    render() {
        return(
            <div>
                  <ButtonToolbar>
                <Button
               
               style={{
                   background:"red"
               }}
                
                >Default</Button>
                </ButtonToolbar>
            </div>
        )
    }
}
export default CustomButton