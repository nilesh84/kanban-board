import { ReactComponent as NoPriority } from "../images/no-priority.svg";
import { ReactComponent as Cancelled } from "../images/todo.svg";

const Cards = ({ticket}) => {
  const priorityLabels = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority'
  };
  
  return (
    <div className={`card flex flex-column ticket priority-${ticket.priority}`}>
      <span className="card-user-img">
        {ticket.userId}
        <span className="user-status" aria-hidden="true"></span>
      </span>
      <span className="card-cam font-12 line-height-default uppercase m-b-6">{ticket.id}</span>
      <div className="card-title font-14 font-weight-600 m-b-12">{ticket.title}</div>
      <div className="flex align-center">
        <span className="card-button m-r-8">
          <NoPriority aria-label="No priority" />
        </span>
        <span className="card-tag card-button font-14 font-weight-600">
          <Cancelled className="fill-circle m-r-8" aria-label="Cancelled" /> {ticket.tag}
        </span>
      </div>
    </div>
  );
};

export default Cards;
