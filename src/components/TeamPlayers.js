import React from 'react'
import { Grid, Typography, Stack, Box } from '@mui/material'

import Player from '../components/Player'

import { GetPlayerEvent } from '../utlis'

export default function TeamPlayers({ lineup, events }) {

    return (
        <Box sx={{ mx: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack alignItems="center">
                        <Typography variant='h4'>{lineup.formation}</Typography>
                    </Stack>
                </Grid>

                {/* Starting XI */}
                <Grid item xs={12} md={6}>
                    <Stack direction="column" spacing={2}>
                        <Stack alignItems="center">
                            <Typography variant='h5'>Starting XI</Typography>
                        </Stack>
                        {lineup.startXI.map((item) => (
                            <Player
                                key={item.player.id}
                                player={item.player}
                                events={GetPlayerEvent(events, item.player)}
                            />
                        ))}
                    </Stack>
                </Grid>

                {/* Subs */}
                <Grid item xs={12} md={6}>
                    <Stack direction="column" spacing={2}>
                        <Stack alignItems="center">
                            <Typography variant='h5'>Substitutes</Typography>
                        </Stack>
                        {lineup.substitutes.map((item) => (
                            <Player 
                                key={item.player.id} 
                                player={item.player}
                                events={GetPlayerEvent(events, item.player)}
                            />
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}
