import React from "react";

export default function HOC(WrappedComponent, data) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
      };
    }
    render() {
      return <WrappedComponent {...this.props} data={this.state.data} />;
    }
  };
}
