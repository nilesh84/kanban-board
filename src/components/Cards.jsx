import { ReactComponent as NoPriority } from "../images/no-priority.svg";
import { ReactComponent as Cancelled } from "../images/todo.svg";

const Cards = ({ data }) => {
  const { tickets } = data;

  if (tickets && tickets.length > 0) {
    return (
      <>
        {tickets.map((ticket) => {
          return (
            <div key={ticket.id} className="card flex flex-column">
              <span className="card-user-img">
                <span className="user-status" aria-hidden="true"></span>
              </span>
              {ticket.id && (
                <span className="card-cam font-12 line-height-default uppercase m-b-6">
                  {ticket.id}
                </span>
              )}
              <div className="card-title font-14 font-weight-600 m-b-12">
                {ticket.title}
              </div>
              <div className="flex align-center">
                <span className="card-button m-r-8">
                  <NoPriority aria-label="No priority"/>
                </span>
                <span className="card-tag card-button font-14 font-weight-600">
                  <Cancelled className="fill-circle m-r-8" aria-label="Cancelled"/>
                  {ticket.tag}
                </span>
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    return <div>No tickets available</div>;
  }
};

export default Cards;
