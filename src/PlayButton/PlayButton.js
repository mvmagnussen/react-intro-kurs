import React from "react";

class PlayButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.handlePlay}>{this.props.buttonText}</button>
    );
  }
}

export default PlayButton;
