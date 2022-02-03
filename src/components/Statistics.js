import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Players from '../components/Players';
import MatchStats from '../components/MatchStats';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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

export default function Statistics({fixture}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);

    const handleDialogToggle = () => {
        setOpen(!open )
    }

    const handleTabToggle = (event, newValue) => {
        setValue(newValue)
    }

    const TabNav = ({ value }) => {
        return (
            <Grid container justifyContent="center">
                <Tabs value={value} onChange={handleTabToggle} aria-label="basic tabs example" centered>
                    <Tab label="Statistics" {...a11yProps(0)} />
                    <Tab label="Players" {...a11yProps(1)} />
                    {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
            </Grid>
        )
    }

    return (
        <Fragment>
            <Button variant="contained" onClick={handleDialogToggle}>
                Statistics
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleDialogToggle}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleDialogToggle}
                        aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        
                        <TabNav value={value}/>
                    
                    </Toolbar>
                    
                </AppBar>
                <Box sx={{ width: '100%' }}>
                    <TabPanel value={value} index={0}>
                        <MatchStats />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Players />
                    </TabPanel>
                    {/* <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel> */}
                </Box>
            </Dialog>
        </Fragment>
    )
}
