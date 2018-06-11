import React from "react";

class Tickets extends React.Component {
  showTickets() {
    let tickets = [];
    let availableTickets = this.props.availableTickets;
    for (let ticket = 1; ticket <= availableTickets; ticket++) {
      tickets.push(
        <button
          onClick={() => this.props.handleSelectTicket(ticket)}
          disabled={this.props.selectedTicket === ticket ? true : false}
          key={ticket}
        >
          {ticket}
        </button>
      );
    }
    return <div>{tickets}</div>;
  }

  render() {
    return this.showTickets();
  }
}

export default Tickets;
