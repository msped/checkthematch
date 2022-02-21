import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider';

import TeamPlayers from '../components/TeamPlayers'

import { GetRequiredEvents } from '../utlis'

export default function Players({ players, events }) {

  const filteredEvents = GetRequiredEvents(events)

  return (
    <Grid container spacing={0}>
      
      <Grid item xs={12} md={6}>
        <TeamPlayers lineup={players[0]} events={filteredEvents} side="Home" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TeamPlayers lineup={players[1]} events={filteredEvents} side="Away" />
      </Grid>

    </Grid>
  );
}
