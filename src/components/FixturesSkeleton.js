import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import {Card, CardContent} from '@mui/material'

export default function FixturesSkeleton() {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={1} sx={{ marginBottom: 1 }}>
                    <Grid item xs={3}>
                        <Typography variant="subtitle1" color="textSecondary">
                            <Skeleton />
                        </Typography>
                    </Grid>
                            
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">
                            <Skeleton />
                        </Typography>
                    </Grid>
            
                    <Grid item xs={3}>
                        <Typography variant="subtitle1" color="textSecondary">
                            <Skeleton />
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Skeleton variant='rectangular' width="100%" height="100%" />
                    </Grid>
                            
                    <Grid item xs={6}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={5}>
                                <Typography variant="h5">
                                    <Skeleton />
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <Typography variant="h5">
                                    <Skeleton /> 
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Typography variant="h5">
                                    <Skeleton />
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Skeleton />
                            </Grid>
                            <Grid item xs={12}>
                                <Stack direction="column" spacing={1}>
                                    <Skeleton variant='text' />
                                    <Skeleton variant='text' />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack alignItems="center">
                                    <Skeleton variant='rectangular' width={150} height={37.5} />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Skeleton variant='rectangular' width="100%" height="100%" />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
