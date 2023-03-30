import React, { useState } from "react";
import { Typography, Grid, Stack, CircularProgress } from "@mui/material";

import InfiniteScroll from "react-infinite-scroll-component";

import FixturesSkeleton from "../components/skeletons/FixturesSkeleton";
import Fixture from "../components/Fixture";
import useGetFixtures from "../hooks/useGetFixtures";

export default function Fixtures({ leagueID, season }) {
    const [visibleFixtures, setVisibleFixtures] = useState(10);
    const { fixtures, loading } = useGetFixtures(leagueID, season);

    const fetchNextTenFixtures = () => {
        let newAmount = visibleFixtures + 10;
        setVisibleFixtures(newAmount);
    };

    return (
        <>
            {fixtures.length > 0 && !loading && (
                <InfiniteScroll
                    dataLength={visibleFixtures}
                    next={fetchNextTenFixtures}
                    hasMore={visibleFixtures <= fixtures.length ? true : false}
                    loader={
                        <Stack alignItems="center" my={4}>
                            <CircularProgress color="secondary" />
                        </Stack>
                    }
                    endMessage={
                        <Typography style={{ textAlign: "center" }} my={5}>
                            No more fixtures in this season.
                        </Typography>
                    }
                    style={{ overflow: "unset" }}
                >
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                    >
                        {fixtures.slice(0, visibleFixtures).map((fixture) => (
                            <Grid item key={fixture.fixture.id} xs={12}>
                                <Fixture fixture={fixture} />
                            </Grid>
                        ))}
                    </Grid>
                </InfiniteScroll>
            )}

            {loading && <FixturesSkeleton />}

            {!loading && fixtures.length === 0 && (
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                        minHeight: "30vh",
                    }}
                    p={5}
                >
                    There is no fixtures for this season.
                </Typography>
            )}
        </>
    );
}
