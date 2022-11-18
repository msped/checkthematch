import apiClient from "../api/apiConfig";

const getLeagueService = (league_id) => {
    return apiClient
        .get("/leagues", {
            params: { id: league_id, current: "true" },
        })
        .then((res) => res.data.response[0]);
};

export default getLeagueService;
