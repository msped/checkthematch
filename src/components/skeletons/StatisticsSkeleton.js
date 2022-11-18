import React from "react";
import {
    Skeleton,
    Typography,
    Paper,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table,
    Box,
} from "@mui/material";

export default function StatisticsSkeleton() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <TableContainer sx={{ maxWidth: "750px" }} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Skeleton
                                        variant="circular"
                                        width={30}
                                        height={30}
                                    />
                                </Box>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="h4">
                                    <Skeleton />
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Skeleton
                                        variant="circular"
                                        width={30}
                                        height={30}
                                    />
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[...Array(15)].map((e, i) => (
                            <TableRow
                                key={i}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                >
                                    <Skeleton />
                                </TableCell>
                                <TableCell align="center">
                                    <Skeleton />
                                </TableCell>
                                <TableCell align="center">
                                    <Skeleton />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
