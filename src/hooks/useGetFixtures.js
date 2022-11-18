import { useEffect, useState } from "react";
import getFixturesService from "../api/getFixturesService";

const useGetFixtures = (leagueID, season) => {
    const [fixtures, setFixtures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFixturesService(leagueID, season).then(setFixtures);
        setLoading(false);
    }, [leagueID, season]);
    return { fixtures, loading };
};

export default useGetFixtures;
