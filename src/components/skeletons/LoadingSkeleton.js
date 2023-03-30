import React from "react";
import { Skeleton, Grid, Typography, Card, CardContent } from "@mui/material";

export default function LoadingSkeleton() {
    return [...Array(5)].map((_, i) => (
        <Grid item xs={12} key={i}>
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Skeleton
                                variant="rectangular"
                                width="100%"
                                height="100%"
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography component="div" width="80%">
                                <Skeleton />
                            </Typography>
                            <Typography component="div" width="20%">
                                <Skeleton />
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    ));
}
