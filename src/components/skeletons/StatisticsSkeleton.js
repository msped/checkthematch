import React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'

export default function StatisticsSkeleton() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <TableContainer sx={{maxWidth: '750px' }} component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Skeleton variant="circular" width={30} height={30} />
                                </Box>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant='h4'>
                                    <Skeleton />
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Skeleton variant="circular" width={30} height={30} />
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[...Array(15)].map((e, i) => (
                        <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align='center'>
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
    )
}
