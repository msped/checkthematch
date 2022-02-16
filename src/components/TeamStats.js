import React from 'react'
import { Grid, Typography, Stack, Card, CardContent } from '@mui/material'

/*
[0] Shots on Goal
[1] Shots Off Goal
[2] Total Shots
[3] Block Shots
[4] Shots inside box
[5] Shots outside box
[6] Fouls
[7] Corner Kicks
[8] Offsides
[9] Ball Possession
[10] Yellow Cards
[11] Red Cards
[12] Goalkeeper saves
[13] Total Passes
[14] Passes accurate
[15] Pass %
*/

export default function TeamStats({ stats }) {

  return (
    <Grid container spacing={2}>
      {stats.map((item, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Card>
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Typography variant="h5" component="div">
                  {item.type}:
                </Typography>
                <Typography variant="h6">
                  {item.value === null ? 0 : item.value}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
