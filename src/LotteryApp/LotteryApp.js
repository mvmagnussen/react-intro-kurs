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
      ticketsActive: true,
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
      ticketsActive: true,
      showPlayButton: true,
      showResetButton: false
    }));
  }

  delayedMessage(message, delay, showPlayButton, showResetButton) {
    setTimeout(() => {
      this.setState({
        showPlayButton: showPlayButton,
        showResetButton: showResetButton,
        message: message
      });
    }, delay);
  }

  handlePlay() {
    let message = "The winning ticket is ...";

    this.setState({
      ticketsActive: false,
      message: message,
      showPlayButton: false,
      showResetButton: false
    });

    const randomTicket = Math.ceil(Math.random() * this.props.availableTickets);
    message = `${randomTicket}`;

    this.delayedMessage(message, 1000, false, false);

    if (this.state.selectedTicket === randomTicket) {
      message = `Congratulations, you won! The winning ticket was ${randomTicket}.`;
    } else {
      message = `Sorry, you didn't win this time. The winning ticket was ${randomTicket}.`;
    }

    this.delayedMessage(message, 2000, false, true);
  }

  handleReset() {
    this.setState(() => ({
      selectedTicket: undefined,
      ticketsActive: true,
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
          ticketsActive={this.state.ticketsActive}
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
