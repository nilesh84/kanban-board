import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Cards from "./Cards";

const KanbanBoard = () => {
  const { data, loading, error } = useFetch(
    "https://api.quicksell.co/v1/internal/frontend-assignment"
  );

  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");

  if (loading) {
    return (
      <div className="loading-msg">
        <span className="loading-spinner"></span> Loading...
      </div>
    );
  }

  if (error) {
    return <div className="error-msg">{error}</div>;
  }

  return (
    <div className="kanban-board-container">
      <Cards data={data} />
    </div>
  );
};

export default KanbanBoard;
