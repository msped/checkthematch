import React from "react";
import { Skeleton, Grid, Typography, Stack } from "@mui/material";

export default function LoadingSkeleton() {
    const itemSkeleton = () => {
        return (
            <li style={{ listStyle: "none" }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height="100%"
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <Typography>
                            <Skeleton />
                        </Typography>
                    </Grid>
                </Grid>
            </li>
        );
    };

    return (
        <Stack direction="column" spacing={2}>
            {itemSkeleton()}
            {itemSkeleton()}
            {itemSkeleton()}
            {itemSkeleton()}
            {itemSkeleton()}
        </Stack>
    );
}
