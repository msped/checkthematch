import apiClient from "./apiConfig";

const getSearchService = (searchTerm) => {
    return apiClient
        .get("/leagues", {
            params: { search: searchTerm },
        })
        .then((res) => res.data.response);
};
export default getSearchService;
