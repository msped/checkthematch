import React from "react";
import { AppBar, Box, Toolbar, Typography, Link } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import SearchDialog from "../components/SearchDialog";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3F51B5",
        },
    },
});

export default function Header() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" theme={theme}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", sm: "flex" },

                                fontFamily: "Patua One, cursive",
                            }}
                        >
                            <Link
                                href="/"
                                underline="none"
                                sx={{
                                    color: "#fff",
                                    cursor: "pointer",
                                }}
                            >
                                CHECK THE MATCH
                            </Link>
                        </Typography>

                        <SearchDialog />
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
