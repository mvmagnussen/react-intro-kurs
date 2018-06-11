import React from "react";
import ReactDOM from "react-dom";
import LotteryApp from "./LotteryApp/LotteryApp";

const appLocation = document.getElementById("appGoesHere");

ReactDOM.render(
  <LotteryApp title="Wine Lottery" availableTickets="5" />,
  appLocation
);
