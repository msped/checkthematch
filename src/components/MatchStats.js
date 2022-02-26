import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'

export default function MatchStats({ stats }) {

  const home = stats[0]
  const away = stats[1]

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
                  <Avatar alt={home.team.name} src={home.team.logo} sx={{ width: 45, height: 45 }} />
                </Box>
              </TableCell>
              <TableCell align="center">
                <Typography variant='h4'>
                  Statistics
                </Typography>
              </TableCell>
              <TableCell align="center">
              <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Avatar alt={away.team.name} src={away.team.logo} sx={{ width: 45, height: 45 }} />
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {home.statistics.map((item, i) => (
              <TableRow
                key={item.type}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align='center'>
                  {item.value === null ? 0 : item.value}
                </TableCell>
                <TableCell align="center">{item.type}</TableCell>
                  <TableCell align="center">
                  {away.statistics[i].value === null ?
                  0 : away.statistics[i].value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
