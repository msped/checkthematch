import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import TeamPlayers from '../components/TeamPlayers'
import Loader from '../components/Loader'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Players({ players }) {
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(false)

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    loading ? (
      <Stack alignItems="center"><Loader /></Stack>
    ) : (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label={
            <React.Fragment>
              <Stack direction="row" spacing={2}>
                <Avatar alt={players[0].team.name} src={players[0].team.logo} />
                <Typography component="span">Home</Typography>
              </Stack>
            </React.Fragment>
          } {...a11yProps(0)} />
          <Tab label={
            <React.Fragment>
              <Stack direction="row" spacing={2}>
                <Typography component='span'>Away</Typography>
                <Avatar alt={players[1].team.name} src={players[1].team.logo} />
              </Stack>
            </React.Fragment>
          } {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        <TeamPlayers lineup={players[0]} />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <TeamPlayers lineup={players[1]} />
      </TabPanel>
    </Box>
    )
  );
}
