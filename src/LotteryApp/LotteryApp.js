import React from "react";
import Header from "../Header/Header";

class LotteryApp extends React.Component {
  render() {
    return (
      <div className="lottery-app">
        <Header title="Wine Lottery" message="Yo dude" />
      </div>
    );
  }
}

export default LotteryApp;
