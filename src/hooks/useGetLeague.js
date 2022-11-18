import { useEffect, useState } from "react";
import getLeagueService from "../api/getLeagueService";

const useGetLeague = (league_id) => {
    const [league, setLeague] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataFromService = async () => {
            await getLeagueService(league_id).then(setLeague);
            setLoading(false);
        };
        fetchDataFromService();
    }, [league_id]);
    return { league, loading };
};

export default useGetLeague;
