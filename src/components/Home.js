import React from 'react'
import { Grid, Typography, Container } from '@mui/material'

import TopLeaguesGrid from './TopLeaguesGrid'
export default function Home() {

    return (
    <Grid container spacing={1}>
        <Grid item xs={12}>
            <div className='image-container'>
                <div className='image-text'>
                    <Typography
                        sx={{ typography: { xs:'h3', md: 'h3'}, marginBottom: '1%' }}
                     >
                        Check the Match
                    </Typography>
                    <Typography 
                        sx={{ typography: { xs:'body1', md: 'body1'} }}
                    >
                        See the stats before spending the time watching a potential boring game.
                    </Typography>
                </div>
            </div>
        </Grid>
        <Grid item xs={12}>
            <Container maxWidth='md'>
                <TopLeaguesGrid />
            </Container>
        </Grid>
    </Grid>
    )    
}
