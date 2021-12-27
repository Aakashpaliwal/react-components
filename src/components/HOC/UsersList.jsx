import React, { Component } from "react";

export class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  render() {
    return (
      <div>
        <ol>
          {this.state.data.map((item, index) => {
            return <li>{item}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default UsersList;
