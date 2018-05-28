import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.props.message}</div>
      </div>
    );
  }
}

export default Header;
