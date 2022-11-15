import apiClient from "./apiConfig";

const getFixturesService = (leagueID, season) => {
    return apiClient
        .get("/fixtures", {
            params: { league: leagueID, season: season, status: "FT" },
        })
        .then((res) => res.data.response);
};
export default getFixturesService;
