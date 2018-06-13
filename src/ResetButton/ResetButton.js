import React from "react";
import "./ResetButton.css";

class ResetButton extends React.Component {
  render() {
    return (
      <button className="reset-button" onClick={this.props.handleReset}>
        {this.props.buttonText}
      </button>
    );
  }
}

export default ResetButton;
