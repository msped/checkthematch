import apiClient from "../api/apiConfig";
import React, { useState, Fragment, useEffect } from "react";
import {
    Grid,
    Box,
    Tab,
    Tabs,
    Slide,
    Toolbar,
    AppBar,
    Dialog,
    Button,
    IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";

import StatisticsSkeleton from "../components/skeletons/StatisticsSkeleton";
import MatchPlayers from "../components/MatchPlayers";
import MatchStats from "../components/MatchStats";

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
            {value === index && <Box p={0.5}>{children}</Box>}
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
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function Statistics({ fixture }) {
    const [fixtureData, setFixtureData] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const search = async () => {
            const { data } = await apiClient.get("/fixtures", {
                params: { id: fixture },
            });
            setFixtureData(data.response[0]);
            setLoading(false);
        };
        if (open) {
            search();
        }
    }, [open]);

    const handleDialogToggle = () => {
        setOpen(!open);
        setValue(0);
    };

    const handleTabToggle = (event, newValue) => {
        setValue(newValue);
    };

    const TabNav = ({ value }) => {
        return (
            <Grid container justifyContent="center">
                <Tabs
                    value={value}
                    onChange={handleTabToggle}
                    aria-label="basic tabs example"
                    centered
                >
                    <Tab label="Statistics" {...a11yProps(0)} />
                    <Tab label="Players" {...a11yProps(1)} />
                </Tabs>
            </Grid>
        );
    };

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
                <AppBar sx={{ position: "relative" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleDialogToggle}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <TabNav value={value} />
                    </Toolbar>
                </AppBar>
                {loading ? (
                    <StatisticsSkeleton />
                ) : (
                    <Box sx={{ width: "100%" }}>
                        <TabPanel value={value} index={0}>
                            <MatchStats stats={fixtureData.statistics} />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <MatchPlayers
                                players={fixtureData.lineups}
                                events={fixtureData.events}
                            />
                        </TabPanel>
                    </Box>
                )}
            </Dialog>
        </Fragment>
    );
}
