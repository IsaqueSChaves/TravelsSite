import axios from "axios";

export default axios.create({
  baseURL: 'https://flightsapi.onrender.com/passengers',
  headers: {
    'Content-Type': "application/json"
  }
});