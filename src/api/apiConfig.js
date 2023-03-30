import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api-football-v1.p.rapidapi.com/v3",
    headers: {
        "x-rapidapi-host": process.env.REACT_APP_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "Content-Type": "application/json",
        accept: "application/json",
    },
});

export default apiClient;
