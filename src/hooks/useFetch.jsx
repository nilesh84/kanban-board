import { useState, useEffect } from "react";
import axios from "axios";

const TICKET_STORAGE_KEY = "tickets-data";

const useFetch = (apiUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        const ticketData = response.data;
        setData(ticketData);
        localStorage.setItem(TICKET_STORAGE_KEY, JSON.stringify(ticketData));
      } catch (error) {
        setError(error);
        const cachedData = localStorage.getItem(TICKET_STORAGE_KEY);
        if (cachedData) {
          setData(JSON.parse(cachedData));
        } else {
          setData([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading, error };
};

export default useFetch;
