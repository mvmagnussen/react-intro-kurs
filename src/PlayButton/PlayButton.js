import React from "react";
import "./PlayButton.css";

class PlayButton extends React.Component {
  render() {
    return (
      <button className="play-button" onClick={this.props.handlePlay}>
        {this.props.buttonText}
      </button>
    );
  }
}

export default PlayButton;
