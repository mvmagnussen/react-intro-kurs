import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">{this.props.title}</h1>
        <div className="message">{this.props.message}</div>
      </div>
    );
  }
}

export default Header;
