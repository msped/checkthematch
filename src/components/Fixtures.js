import React, { useEffect, useState } from 'react'
import apiClient from '../api/apiConfig';
import {
    Typography,
    Grid,
    Stack,
    CircularProgress 
} from '@mui/material';

import InfiniteScroll from 'react-infinite-scroll-component';

import FixturesSkeleton from '../components/skeletons/FixturesSkeleton'
import Fixture from '../components/Fixture'

export default function Fixtures({leagueID, season}) {
    const [fixtures, setFixtures] = useState([])
    const [visibleFixtures, setVisibleFixtures] = useState(10)
    const [isLoading, setIsLoading] = useState(true)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        const search = async () => {
            const { data }  = await apiClient.get('/fixtures', {
              params: { league: leagueID, season: season, status: 'FT' }
            })
            setFixtures(data.response)
            setIsLoading(false)
        }
        search()
    }, [leagueID, season])

    useEffect(() => {
        setVisibleFixtures(10)
        setHasMore(true)
    }, [leagueID, season])

    const fetchData = () => {
        let newAmount = visibleFixtures + 10;
        setVisibleFixtures(newAmount)
        if (visibleFixtures >= fixtures.length) {
            setHasMore(false)
        }
    };

    return (
        <>
            {fixtures.length > 0 && !isLoading && (
                <InfiniteScroll
                    dataLength={visibleFixtures}
                    next={fetchData}
                    hasMore={hasMore}
                    loader={
                        <Stack alignItems="center" sx={{ marginY: 4 }}>
                            <CircularProgress color="secondary" />
                        </Stack>
                    }
                    endMessage={
                        <Typography 
                            style={{textAlign: 'center'}}
                            sx={{ marginY: 5 }}
                        >
                            No more fixtures in this season.
                        </Typography>
                    }
                    style={{ overflow: 'unset'}}
                >
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        {fixtures.slice(0, visibleFixtures).map((fixture) => (
                        <Grid item key={fixture.fixture.id} xs={12}>
                            <Fixture key={fixture.id} fixture={fixture} />
                        </Grid>
                        ))}
                    </Grid>
                </InfiniteScroll> 
            )}

            {isLoading && (
                <FixturesSkeleton />
            )}

            {!isLoading && fixtures.length === 0 && (
                <Typography
                    variant='h5'
                    sx={{
                        textAlign: 'center',
                        minHeight: '30vh',
                        padding: 5
                    }}
                >
                    There is no fixtures for this season.
                </Typography>
            )}
        </>
    )
}
