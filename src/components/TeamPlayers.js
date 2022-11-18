import React from "react";
import { Grid, Typography, Stack, Box, Card, CardContent } from "@mui/material";

import Player from "../components/Player";

import { GetPlayerEvent } from "../utlis";

export default function TeamPlayers({ lineup, events, side }) {
    return (
        <Box mx={2} my={5}>
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} mt={3}>
                            <Stack alignItems="center">
                                <img
                                    alt={lineup.team.name}
                                    src={lineup.team.logo}
                                    style={{ width: "75px", height: "auto" }}
                                />
                                <Typography variant="h4">
                                    {lineup.team.name}
                                </Typography>
                                <Typography variant="h6">{side}</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={12}>
                            <Stack alignItems="center">
                                <Typography variant="h4">
                                    {lineup.formation}
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sx={{ marginY: 2 }}>
                            <Stack alignItems="center">
                                <Typography variant="h5">
                                    Coach: {lineup.coach.name}
                                </Typography>
                            </Stack>
                        </Grid>

                        {/* Starting XI */}
                        <Grid item sm={12} md={6}>
                            <Stack
                                direction="column"
                                spacing={2}
                                sx={{ marginLeft: 1.75 }}
                            >
                                <Stack alignItems="center">
                                    <Typography variant="h5">
                                        Starting XI
                                    </Typography>
                                </Stack>
                                <Stack spacing={1}>
                                    {lineup.startXI.map((item) => (
                                        <Player
                                            key={item.player.id}
                                            player={item.player}
                                            events={GetPlayerEvent(
                                                events,
                                                item.player
                                            )}
                                        />
                                    ))}
                                </Stack>
                            </Stack>
                        </Grid>

                        {/* Subs */}
                        <Grid item sm={12} md={6}>
                            <Stack
                                direction="column"
                                spacing={2}
                                sx={{ marginLeft: 1.75 }}
                            >
                                <Stack alignItems="center">
                                    <Typography variant="h5">
                                        Substitutes
                                    </Typography>
                                </Stack>
                                <Stack spacing={1}>
                                    {lineup.substitutes.map((item) => (
                                        <Player
                                            key={item.player.id}
                                            player={item.player}
                                            events={GetPlayerEvent(
                                                events,
                                                item.player
                                            )}
                                        />
                                    ))}
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}
