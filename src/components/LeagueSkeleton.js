import React from 'react'
import { Typography, Grid, Skeleton, Card, CardContent } from '@mui/material'

export default function LeagueSkeleton() {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={2}>
                        <Skeleton variant='rectangular' width="100%" height={125} />
                    </Grid>
                    <Grid item xs={10} md={8}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant="h2">
                                    <Skeleton />
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Skeleton variant='rectangular' width="100%" height="100%"/>
                            </Grid>
                            <Grid item xs={11}>
                                <Typography variant="h6">
                                    <Skeleton width={150}/>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Skeleton variant='rectangular' height="35%"/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
