import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard";
import FilterBar from "./components/FilterBar";
import fetchingTickets from "./service/apiService";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTickets = async () => {
      try {
        const data = await fetchingTickets();
        setTickets(data.tickets);
        //console.log('innerdata',data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadTickets();
  }, []);

  const handleGroupChange = (event) => {
    setGrouping(event.target.value);
    console.log(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSorting(event.target.value);
    console.log(event.target.value);
  };

  if (loading) <div className="loading">Loading-data</div>;

  if (error) <div className="error">{error}</div>;

  return (
    <div className="">
      <FilterBar
        grouping={grouping}
        sorting={sorting}
        handleGroupChange={handleGroupChange}
        handleSortingChange={handleSortingChange}
      />
      <KanbanBoard tickets={tickets} grouping={grouping} sorting={sorting} />
    </div>
  );
};

export default App;
