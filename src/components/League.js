import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom'
import { makeStyles } from '@mui/styles';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';

import Fixtures from '../components/Fixtures'
import Loader from '../components/Loader'

const useStyles = makeStyles((theme) => {
    
})

export default function League() {
    const currentYear = new Date().getFullYear()
    const startYear = new Date('2010-01-01')
    const endYear = new Date(`${currentYear}-01-01`)
    const [league, setLeague] = useState([])
    const [season, setSeason] = useState('2021')
    const [loading, setLoading] = useState(true)
    
    let { league_id } = useParams()

    useEffect(() => {
        const search = async () => {
            const { data }  = await axios.get('https://api-football-v1.p.rapidapi.com/v3/leagues', {
              params: { id: league_id, current: 'true' },
              headers: {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': 'f89acc49f0mshfc233a01bb1f12dp1cdc9cjsndf01fbd6276c'
              }
            })
            setLeague(data.response[0])
            const currentSeason = data.response[0].seasons[0].year
            let newYear = new Date(currentSeason.toString()).getFullYear()
            setSeason(newYear.toString())
            setLoading(false)
        }
        search()
      }, [league_id])

    const leagueInfo = () => {
        return (
            <Card>
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={2} md={2}>
                            <img 
                                src={league.league.logo}
                                alt={league.league.name}
                                style={{ maxWidth: '100%', height: 'auto'}}
                            />
                        </Grid>
                        <Grid item xs={10} md={8}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Typography variant="h2">
                                        {league.league.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <img 
                                        src={league.country.flag}
                                        alt={league.country.name}
                                        style={{ maxWidth: '100%', height: 'auto'}}
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography variant="h6">
                                        {league.country.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack spacing={3}>
                                    <DatePicker
                                        views={['year']}
                                        label="Select Season"
                                        value={season}
                                        onChange={(newSeason) => {
                                            let newYear = new Date(newSeason).getFullYear()
                                            setSeason(newYear.toString());
                                        }}
                                        minDate={startYear}
                                        maxDate={endYear}
                                        renderInput={(params) => <TextField {...params} helperText={null} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
    
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                { loading ? <Stack alignItems="center"><Loader /></Stack> : leagueInfo()}
            </Grid>
            <Grid item xs={12}>
                { loading ? <Stack alignItems="center"><Loader /></Stack> : <Fixtures leagueID={league_id} season={season}/> }
            </Grid>
        </Grid>
    )
}