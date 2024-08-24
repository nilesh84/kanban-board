import axios from "axios";

const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

const fetchingTickets = async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
        console.log('Something went Wrong', error);
    }
};

export default fetchingTickets;
