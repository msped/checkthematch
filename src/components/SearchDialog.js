import React, { Fragment, useState } from "react";
import {
    Button,
    Grid,
    Typography,
    Stack,
    Dialog,
    TextField,
    Slide,
    DialogTitle,
    AppBar,
    Toolbar,
    IconButton,
    DialogContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import LoadingSkeleton from "../components/skeletons/LoadingSkeleton";
import useGetSearch from "../hooks/useGetSearch";
import SearchResults from "../components/SearchResults";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SearchDialog() {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const { results, loading, resetResults } = useGetSearch(searchTerm);

    const handleDialogToggle = () => {
        setOpen(!open);
        setSearchTerm("");
        resetResults();
    };

    return (
        <Fragment>
            <Button onClick={handleDialogToggle}>
                <Typography
                    component={Stack}
                    direction="row"
                    alignItems="center"
                    sx={{
                        color: "#fff",
                        cursor: "pointer",
                        fontWeight: 700,
                    }}
                >
                    <SearchIcon /> Search
                </Typography>
            </Button>
            <Dialog
                fullWidth={true}
                onClose={handleDialogToggle}
                open={open}
                maxWidth="xs"
                TransitionComponent={Transition}
                PaperProps={{ sx: { position: "fixed", top: 10 } }}
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
                    </Toolbar>
                </AppBar>
                <DialogTitle>
                    <TextField
                        variant="standard"
                        label="Search by League or Country"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        fullWidth
                    />
                </DialogTitle>
                <DialogContent dividers={true} mb={2}>
                    <Grid container spacing={2}>
                        {loading && searchTerm.length > 0 && (
                            <LoadingSkeleton />
                        )}

                        {searchTerm.length === 0 && (
                            <Grid item xs={12}>
                                <Typography sx={{ textAlign: "center" }}>
                                    Start typing to find a league.
                                </Typography>
                            </Grid>
                        )}

                        {!loading && searchTerm.length > 0 && (
                            <SearchResults
                                results={results}
                                handleDialogToggle={handleDialogToggle}
                            />
                        )}
                    </Grid>
                </DialogContent>
            </Dialog>
        </Fragment>
    );
}
