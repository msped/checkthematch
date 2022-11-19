import React, { useState } from "react";
import {
    Grid,
    Typography,
    Chip,
    Card,
    CardContent,
    CardActionArea,
    Button,
    Box,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function SearchResults({ results, handleDialogToggle }) {
    const [visibleResults, setVisibleResults] = useState(10);

    const handleShowMore = () => {
        let newVisibleResults = visibleResults + 10;
        setVisibleResults(newVisibleResults);
    };

    return (
        <>
            {results.slice(0, visibleResults).map((league) => (
                <Grid item xs={12} key={league.league.id}>
                    <Card>
                        <CardActionArea
                            component={Link}
                            to={`/league/${league.league.id}`}
                            onClick={handleDialogToggle}
                        >
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={2}>
                                        <img
                                            src={league.country.flag}
                                            alt={league.country.name}
                                            style={{
                                                maxWidth: "100%",
                                                height: "auto",
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography component="div">
                                            {league.league.name}
                                        </Typography>
                                        <Chip
                                            label={league.country.name}
                                            size="small"
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
            {visibleResults >= results.length ? (
                <Grid item xs={12}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography>No more results.</Typography>
                    </Box>
                </Grid>
            ) : (
                <Grid item xs={12}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button
                            onClick={handleShowMore}
                            variant="contained"
                            sx={{ textAlign: "center" }}
                        >
                            <Typography>Show More</Typography>
                        </Button>
                    </Box>
                </Grid>
            )}
        </>
    );
}
