import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import LazyLoad from "react-lazyload";

import Statistics from "../components/Statistics";

import { format } from "date-fns";

function Fixture({ fixture }) {
    const date = new Date(fixture.fixture.date);

    return (
        <div>
            <Card>
                <Grid
                    container
                    spacing={1}
                    sx={{ paddingBottom: 1, backgroundColor: "#353535" }}
                >
                    <Grid item xs={3} mt={1} sx={{ textAlign: "center" }}>
                        <Typography variant="subtitle1" color="textSecondary">
                            Home
                        </Typography>
                    </Grid>
                    <Grid item xs={6} mt={1} sx={{ textAlign: "center" }}>
                        <Typography variant="subtitle1">
                            {format(date, "dd/MM/yyyy")}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} mt={1} sx={{ textAlign: "center" }}>
                        <Typography variant="subtitle1" color="textSecondary">
                            Away
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography sx={{ textAlign: "center" }}>
                            {fixture.teams.home.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography sx={{ textAlign: "center" }}>v</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography sx={{ textAlign: "center" }}>
                            {fixture.teams.away.name}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={1} mt={1} p={1}>
                    <Grid item xs={3} md={2} sx={{ textAlign: "center" }}>
                        <LazyLoad height={150}>
                            <img
                                src={fixture.teams.home.logo}
                                alt={fixture.teams.home.name}
                                width="150"
                                height="150"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        </LazyLoad>
                    </Grid>

                    <Grid item xs={6} md={8} sx={{ textAlign: "center" }}>
                        <CardContent>
                            <Grid container spacing={1}>
                                <Grid
                                    item
                                    component={Grid}
                                    xs={12}
                                    sx={{
                                        display: {
                                            xs: "none",
                                            sm: "block",
                                        },
                                    }}
                                >
                                    <Typography>
                                        {fixture.fixture.venue.name},{" "}
                                        {fixture.fixture.venue.city}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ textAlign: "center" }}>
                                    {fixture.score.fulltime.home +
                                        fixture.score.fulltime.away ===
                                    0 ? (
                                        <Typography variant="body1">
                                            This ended with no goals after Full
                                            Time, probably shouldn't watch this
                                            match.
                                        </Typography>
                                    ) : (
                                        <Grid container spacing={1}>
                                            <Grid item xs={6}>
                                                <Typography>
                                                    HT Goals:{" "}
                                                    {fixture.score.halftime
                                                        .home +
                                                        fixture.score.halftime
                                                            .away}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography>
                                                    FT Goals:{" "}
                                                    {fixture.score.fulltime
                                                        .home +
                                                        fixture.score.fulltime
                                                            .away}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    )}
                                </Grid>
                                <Grid item xs={12} mt={1.5}>
                                    <Statistics fixture={fixture.fixture.id} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                    <Grid item xs={3} md={2} sx={{ textAlign: "center" }}>
                        <LazyLoad height={150}>
                            <img
                                src={fixture.teams.away.logo}
                                alt={fixture.teams.away.name}
                                width="150"
                                height="150"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        </LazyLoad>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}

export default Fixture;
