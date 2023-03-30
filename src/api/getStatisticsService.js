import apiClient from "./apiConfig";

const getStatisticsService = (fixture) => {
    return apiClient
        .get("/fixtures", {
            params: { id: fixture },
        })
        .then((res) => res.data.response[0]);
};
export default getStatisticsService;
