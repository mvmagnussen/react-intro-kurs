import React from "react";
import Header from "../Header/Header";
import Tickets from "../Tickets/Tickets";
import PlayButton from "../PlayButton/PlayButton";
import ResetButton from "../ResetButton/ResetButton";

class LotteryApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTicket: undefined,
      showPlayButton: false,
      showResetButton: false,
      message: "Choose a lottery ticket below."
    };
    this.handleSelectTicket = this.handleSelectTicket.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSelectTicket(ticket) {
    this.setState(() => ({
      selectedTicket: ticket,
      showPlayButton: true,
      showResetButton: false
    }));
  }

  handlePlay() {
    const randomTicket = Math.ceil(Math.random() * this.props.availableTickets);
    let message = `The winning ticket is ${randomTicket}. `;
    if (this.state.selectedTicket === randomTicket) {
      message += "Congratulations, you won!";
    } else {
      message += "Sorry, you didn't win this time.";
    }
    this.setState(() => ({
      message: message,
      showPlayButton: false,
      showResetButton: true
    }));
  }

  handleReset() {
    this.setState(() => ({
      selectedTicket: undefined,
      message: "Choose a lottery ticket below.",
      showPlayButton: false,
      showResetButton: false
    }));
  }

  render() {
    return (
      <div className="lottery-app">
        <Header title="Wine Lottery" message={this.state.message} />
        <Tickets
          availableTickets={this.props.availableTickets}
          handleSelectTicket={this.handleSelectTicket}
          selectedTicket={this.state.selectedTicket}
        />
        {this.state.showPlayButton && (
          <PlayButton handlePlay={this.handlePlay} buttonText="Play" />
        )}
        {this.state.showResetButton && (
          <ResetButton handleReset={this.handleReset} buttonText="Reset" />
        )}
      </div>
    );
  }
}

export default LotteryApp;
