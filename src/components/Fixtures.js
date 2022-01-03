import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid';

import Fixture from '../components/Fixture'

export default function Fixtures({leagueID, season}) {
    const [fixtures, setFixtures] = useState([])
    const [lastAmount, setLastAmount] = useState(10)

    useEffect(() => {
        const search = async () => {
            const { data }  = await axios.get('https://api-football-v1.p.rapidapi.com/v3/fixtures', {
              params: { league: leagueID, season: season, last: lastAmount.toString() },
              headers: {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': 'f89acc49f0mshfc233a01bb1f12dp1cdc9cjsndf01fbd6276c'
              }
            })
            setFixtures(data.response)
        }
        search()
    }, [leagueID, season, lastAmount])

    const showMore = () => {
        let newAmount = lastAmount + 10;
        setLastAmount(newAmount)
    };

    return (
        <Grid container spacing={2}>
            {fixtures.map((item) => (
            <Grid item key={item.id} xs={12}>
                <Fixture fixture={item} />
            </Grid>
            ))}
        </Grid>
    )
}
