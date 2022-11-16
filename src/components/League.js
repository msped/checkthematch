import apiClient from "../api/apiConfig";
import React, { useState, useEffect } from "react";
import {
    Container,
    Grid,
    TextField,
    Typography,
    Card,
    CardContent,
    Stack,
} from "@mui/material";
import { useParams } from "react-router-dom";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import Fixtures from "../components/Fixtures";
import LeagueSkeleton from "../components/skeletons/LeagueSkeleton";

export default function League() {
    const currentYear = new Date().getFullYear();
    const [league, setLeague] = useState([]);
    const [season, setSeason] = useState();
    const [loading, setLoading] = useState(true);

    let { league_id } = useParams();

    useEffect(() => {
        const search = async () => {
            const { data } = await apiClient.get("/leagues", {
                params: { id: league_id, current: "true" },
            });
            setLeague(data.response[0]);
            const currentSeason = data.response[0].seasons[0].year;
            let newYear = new Date(currentSeason.toString()).getFullYear();
            setSeason(newYear.toString());
            setLoading(false);
        };
        search();
    }, [league_id]);

    const leagueDetails = () => {
        return (
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4} md={2}>
                            <img
                                src={league.league.logo}
                                alt={league.league.name}
                                width="150"
                                height="150"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Typography
                                        variant="h2"
                                        sx={{ fontWeight: "400" }}
                                    >
                                        {league.league.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} sm={1}>
                                    <img
                                        src={league.country.flag}
                                        alt={league.country.name}
                                        width="150"
                                        height="150"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={11}>
                                    <Typography variant="h6">
                                        {league.country.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack spacing={3}>
                                    <DatePicker
                                        views={["year"]}
                                        label="Select Season"
                                        value={season}
                                        onChange={(newSeason) => {
                                            let newYear = new Date(
                                                newSeason
                                            ).getFullYear();
                                            setSeason(newYear.toString());
                                        }}
                                        minDate={new Date("2010-01-01")}
                                        maxDate={
                                            new Date(`${currentYear}-01-01`)
                                        }
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                helperText={null}
                                            />
                                        )}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    };

    return (
        <Container maxWidth="md">
            <Grid container spacing={2} mt={3}>
                <Grid item xs={12}>
                    {loading ? <LeagueSkeleton /> : leagueDetails()}
                </Grid>
                <Grid item xs={12}>
                    <Fixtures leagueID={league_id} season={season} />
                </Grid>
            </Grid>
        </Container>
    );
}
