import React from 'react'
import { Grid, Typography, Container } from '@mui/material'

import TopLeaguesGrid from '../components/TopLeaguesGrid'
import home_banner from '../images/home_banner.jpg'

export default function Home() {

    return (
    <Grid container spacing={1}>
        <Grid item xs={12}>
            <div 
                style={{
                    backgroundImage: `url(${home_banner})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                    minHeight: '60vh'
                }}
            >
                <div 
                    style={{
                        position: 'absolute',
                        top: '30%',
                        left: '7.5%'
                    }}
                >
                    <Typography
                        sx={{ typography: { xs:'h3', md: 'h3'}, marginBottom: '1%' }}
                        style={{
                            fontWeight: 500,
                            fontStyle: 'italic',
                            backgroundColor: '#000',
                            width: 'fit-content',
                            padding: '5px 15px',
                            fontFamily: 'Patua One, cursive'
                        }}
                     >
                        Check the Match
                    </Typography>
                    <Typography 
                        sx={{ typography: { xs:'body1', md: 'body1'} }}
                        style={{
                            fontWeight: 500,
                            fontStyle: 'italic',
                            backgroundColor: '#000',
                            width: 'fit-content',
                            padding: '5px 15px',
                            fontFamily: 'Patua One, cursive'
                        }}
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
