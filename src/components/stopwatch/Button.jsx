import React, { Component, Fragment } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    };
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler() {
    this.setState({
      isOn: !this.state.isOn,
    });
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.buttonHandler}>
          {this.state.isOn ? "On" : "OFF"}
        </button>
      </Fragment>
    );
  }
}

export default Button;
