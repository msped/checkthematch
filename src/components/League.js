import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import LeagueSkeleton from "../components/skeletons/LeagueSkeleton";

import useGetLeague from "../hooks/useGetLeague";

import LeagueDetails from "../components/LeagueDetails";
import Fixtures from "../components/Fixtures";

export default function League() {
    const currentYear = new Date().getFullYear().toString();
    const [season, setSeason] = useState(currentYear);

    let { league_id } = useParams();

    const { league, loading } = useGetLeague(league_id);

    const handleSetSeason = (value) => {
        setSeason(value);
    };

    return (
        <Container maxWidth="md">
            <Grid container spacing={2} mt={3}>
                <Grid item xs={12}>
                    {loading ? (
                        <LeagueSkeleton />
                    ) : (
                        <LeagueDetails
                            league={league}
                            season={season}
                            setSeason={handleSetSeason}
                            currentYear={currentYear}
                        />
                    )}
                </Grid>
                <Grid item xs={12}>
                    <Fixtures leagueID={league_id} season={season} />
                </Grid>
            </Grid>
        </Container>
    );
}
