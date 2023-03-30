import { useEffect, useState } from "react";
import getStatisticsService from "../api/getStatisticsService";

const useGetStatistics = (fixture, open) => {
    const [matchStatistics, setMatchStatistics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataFromService = async () => {
            await getStatisticsService(fixture).then(setMatchStatistics);
            setLoading(false);
        };
        // This is to reduce the amount of API calls
        if (
            (open && matchStatistics.length === 0) ||
            (open && fixture !== matchStatistics.fixture.id)
        ) {
            fetchDataFromService();
        }
    }, [open]);
    return { matchStatistics, loading };
};

export default useGetStatistics;
