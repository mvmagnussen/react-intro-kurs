import React from "react";
import "./Tickets.css";

class Tickets extends React.Component {
  showTickets() {
    let tickets = [];
    let availableTickets = this.props.availableTickets;
    for (let ticket = 1; ticket <= availableTickets; ticket++) {
      tickets.push(
        <button
          className={`ticket ${
            this.props.ticketsActive ? "active" : "inactive"
          }${this.props.winningTicket === ticket ? " winner" : ""}`}
          onClick={() => this.props.handleSelectTicket(ticket)}
          disabled={this.props.selectedTicket === ticket ? true : false}
          key={ticket}
        >
          {ticket}
        </button>
      );
    }
    return <div className="tickets">{tickets}</div>;
  }

  render() {
    return this.showTickets();
  }
}

export default Tickets;
