import { useEffect, useState } from "react";
import getLeagueService from "../api/getLeagueService";

const useGetLeague = (league_id, handleSetSeason) => {
    const [league, setLeague] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataFromService = async () => {
            await getLeagueService(league_id).then((res) => {
                setLeague(res);
                handleSetSeason(res.seasons[0].year);
            });
            setLoading(false);
        };
        fetchDataFromService();
    }, [league_id]);
    return { league, loading };
};

export default useGetLeague;
