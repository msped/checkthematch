import axios from 'axios'
import React, { useState } from 'react'
import { makeStyles, useTheme } from '@mui/styles';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';

import { format } from 'date-fns'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    teamLogo: {
        padding: theme.spacing(1)
    },
    textCenter: {
        textAlign: 'center'
    },
    imgFluid: {
        maxWidth: '100%',
        height: 'auto',
    },
    team: {
        textAlign: 'center',
        fontSize: '1.25rem'
    },
    cardContent: {
        padding: 0
    },
    fixtureHeading: {
        backgroundColor: '#353535'

    },
    fixtureHeadingContent: {
        textAlign: 'center',
        marginTop: '5px'
    },
    content: {
        marginTop: '10px'
    },
    statsButton: {
        marginTop: '10px'
    }
}));


function Fixture({fixture}) {

    const classes = useStyles()
    const theme = useTheme();

    const date = new Date(fixture.fixture.date)

    return (
        <div className={classes.root}>
            <Card>
                <Grid container spacing={1} className={classes.fixtureHeading}>
                    <Grid item xs={3} className={classes.fixtureHeadingContent}>
                        <Typography variant="subtitle1" color="textSecondary">
                            Home
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={6} className={classes.fixtureHeadingContent}>
                        <Typography variant="subtitle1">
                            {format(date, "dd/MM/yyyy")}
                        </Typography>
                    </Grid>
    
                    <Grid item xs={3} className={classes.fixtureHeadingContent}>
                        <Typography variant="subtitle1" color="textSecondary">
                            Away
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.content}>
                    <Grid item xs={3} className={classes.textCenter}>
                        <img 
                            src={fixture.teams.home.logo} 
                            alt={fixture.teams.home.name}
                            className="img-fluid p-3"
                        />
                    </Grid>
                    
                    <Grid item xs={6} className={classes.textCenter}>
                        <CardContent className={classes.cardContent}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={5}>
                                    <Typography variant="h5" className={classes.team}>
                                        {fixture.teams.home.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <Typography variant="h5" className={classes.textCenter}>
                                         v 
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <Typography variant="h5" className={classes.team}>
                                        {fixture.teams.away.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    {fixture.fixture.venue.name}, {fixture.fixture.venue.city}
                                </Grid>
                                <Grid item xs={12} className={classes.textCenter}>
                                {(fixture.score.fulltime.home + fixture.score.fulltime.away === 0)
                                    ?
                                    <p>This ended with no goals after Full Time, probably shouldn't watch this match.</p>
                                    :
                                    <div>
                                        <span className="d-block">
                                            HT Goal Amount: {fixture.score.halftime.home + fixture.score.halftime.away}
                                        </span>
                                        <span className="d-block">
                                            FT Goal Amount: {fixture.score.fulltime.home + fixture.score.fulltime.away}
                                        </span>
                                    </div>
                                }
                                {/*<Button
                                    variant="contained" 
                                    color="primary" 
                                    className={classes.statsButton}
                                    onClick={handleDialogOpen}
                                >
                                    See match statistics
                                </Button>
                                <MatchStats
                                    isOpen={isOpen}
                                    handleClose={handleDialogClose}
                                    title="Match Statistics"
                                />
                                <Dialog
                                    fullWidth
                                    maxWidth='md'
                                    open={isOpen}
                                    onClose={handleDialogClose}
                                    aria-labelledby='max-width-dialog-title'
                                >
                                    <DialogTitle id="max-width-dialog-title">See match statistics</DialogTitle>
                                    <DialogContent>
                                        {stats}
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleDialogClose} color='primary'>
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog> */}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                    <Grid item xs={3} className={classes.textCenter}>
                        <img 
                            src={fixture.teams.away.logo} 
                            alt={fixture.teams.away.name}
                            className="img-fluid p-3"
                        />
                    </Grid>
                </Grid>
            </Card>
        </div>
    )    
}

export default Fixture
