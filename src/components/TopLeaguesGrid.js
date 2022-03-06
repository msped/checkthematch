import React from 'react'
import {
    Grid,
    Card,
    CardContent,
    CardActionArea,
    Typography,
    Stack,
} from '@mui/material'
import topLeagues from '../topLeagues'

export default function TopLeaguesGrid() {

    const card = (item) => {

        const path = '/league/' + item.id

        return (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
                <Card>
                    <CardActionArea 
                        sx={{ minHeight: {
                            xs: '110px',
                            sm: '130px',
                            md: '135px',
                        } }}
                        href={path}
                    >
                        <CardContent>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <img 
                                        src={item.league.logo} 
                                        alt={item.league.name}
                                        className="img-fluid p-3"
                                    />
                                </Grid>
                                <Grid container item xs={9} spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography variant='h5'>
                                            {item.league.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <img 
                                            src={item.country.logo} 
                                            alt={item.country.name}
                                            className="img-fluid p-3"
                                        />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant='subtitle1'>
                                            {item.country.name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    }
  
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sx={{ marginY: 3 }}>
                <Stack alignItems="center">
                    <Typography variant='h3' sx={{ fontWeight: 500 }}>
                        Top Leagues
                    </Typography>
                </Stack>
            </Grid>
            {topLeagues.map((item) => 
                card(item)
            )}
        </Grid>
    )
}
