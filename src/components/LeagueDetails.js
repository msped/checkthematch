import React from "react";
import {
    Card,
    CardContent,
    Grid,
    Typography,
    Stack,
    TextField,
} from "@mui/material";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function leagueDetails({
    league,
    season,
    setSeason,
    currentYear,
}) {
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
                        {season ? (
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
                        ) : null}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
