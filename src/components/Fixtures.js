import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Fixture from '../components/Fixture'
import Stack from '@mui/material/Stack';

export default function Fixtures({leagueID, season}) {
    const [fixtures, setFixtures] = useState([])
    const [lastAmount, setLastAmount] = useState(10)

    useEffect(() => {
        const search = async () => {
            const { data }  = await axios.get('https://api-football-v1.p.rapidapi.com/v3/fixtures', {
              params: { league: leagueID, season: season, last: lastAmount.toString(), status: 'FT' },
              headers: {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': 'f89acc49f0mshfc233a01bb1f12dp1cdc9cjsndf01fbd6276c'
              }
            })
            setFixtures(data.response)
        }
        search()
    }, [leagueID, season, lastAmount])

    useEffect(() => {
        setLastAmount(10)
    }, [leagueID])

    const showMore = () => {
        let newAmount = lastAmount + 10;
        setLastAmount(newAmount)
    };

    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            {fixtures.map((item) => (
            <Grid item key={item.id} xs={12}>
                <Fixture key={item.id} fixture={item} />
            </Grid>
            ))}
            <Grid item xs={12}>
                <Stack alignItems='center'>
                    <Button
                        size='large'
                        onClick={showMore}
                        color='primary'
                        variant='contained'
                    >
                        Show More
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    )
}
