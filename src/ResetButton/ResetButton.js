import React from "react";

class ResetButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleReset}>{this.props.buttonText}</button>
    );
  }
}

export default ResetButton;
