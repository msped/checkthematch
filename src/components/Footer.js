import React from "react";
import { Container, Link, Typography, Box, Grid, Stack } from "@mui/material";

import topLeagues from "../topLeagues";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {"Copyright © "}
            <Link color="inherit" href="/">
                Check the Match
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "5rem",
            }}
        >
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: "auto",
                }}
            >
                <Container maxWidth="md">
                    <Grid
                        container
                        spacing={1}
                        mb={5}
                        alignItems="center"
                        justifyContent="center"
                    >
                        {/* Top Leagues */}
                        <Grid item xs={8}>
                            <Stack direction="column" spacing={2}>
                                <Typography
                                    variant="h6"
                                    color="text.secondary"
                                    sx={{ textAlign: "center" }}
                                >
                                    Top Leagues
                                </Typography>
                                <Grid container spacing={6}>
                                    {topLeagues.map((item) => (
                                        <Grid
                                            item
                                            key={item.id}
                                            xs={12}
                                            md={4}
                                            mb={3}
                                            sx={{ textAlign: "center" }}
                                        >
                                            <Typography
                                                key={item.id}
                                                variant="body1"
                                                color="text.secondary"
                                                component={Link}
                                                underline="hover"
                                                href={`/league/${item.id}`}
                                            >
                                                {item.league.name}
                                            </Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}
