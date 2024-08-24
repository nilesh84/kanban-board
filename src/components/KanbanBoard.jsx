import React from "react";
import Cards from "./Cards";

const KanbanBoard = ({ tickets, grouping, sorting }) => {
  const getGroupedTickets = () => {
    const grouped = tickets.reduce((acc, ticket) => {
      const key = ticket[grouping];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(ticket);
      return acc;
    }, {});

    return Object.keys(grouped).map((key) => ({
      group: key,
      tickets: grouped[key],
    }));
  };

  const sortTickets = (tickets) => {
    if (sorting === "priority") {
      return tickets.sort((a, b) => b.priority - a.priority);
    } else if (sorting === "title") {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  const groupedTickets = getGroupedTickets();

  return (
    <div className="kanban-board-container">
      {groupedTickets.map((group) => (
        <div key={group.group} className="kanban-column">
          <h2>{group.group}</h2>
          {sortTickets(group.tickets).map((ticket) => (
            <Cards key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
