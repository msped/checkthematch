import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Typography,
    Grid,
    Stack,
    CircularProgress 
} from '@mui/material';

import InfiniteScroll from 'react-infinite-scroll-component';

import FixturesSkeleton from '../components/FixturesSkeleton'
import Fixture from '../components/Fixture'

export default function Fixtures({leagueID, season}) {
    const [fixtures, setFixtures] = useState([])
    const [lastAmount, setLastAmount] = useState(10)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const search = async () => {
            const { data }  = await axios.get('https://api-football-v1.p.rapidapi.com/v3/fixtures', {
              params: { league: leagueID, season: season, last: lastAmount.toString(), status: 'FT' },
              headers: {
                'x-rapidapi-host': process.env.REACT_APP_API_HOST,
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
              }
            })
            setFixtures(data.response)
            setIsLoading(false)
        }
        search()
    }, [leagueID, season, lastAmount])

    useEffect(() => {
        setLastAmount(10)
    }, [leagueID, season])

    const fetchData = () => {
        let newAmount = lastAmount + 10;
        setLastAmount(newAmount)
    };

    return (
        <>
            {fixtures.length > 0 && !isLoading && (
                <InfiniteScroll
                    dataLength={fixtures.length}
                    next={fetchData}
                    hasMore={true}
                    loader={
                        <Stack alignItems="center">
                            <CircularProgress color="secondary" />
                        </Stack>
                    }
                    endMessage={
                        <Typography style={{textAlign: 'center'}}>
                            No more fixtures in this season.
                        </Typography>
                    }
                    style={{ overflow: 'unset'}}
                >
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        {fixtures.map((fixture) => (
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
