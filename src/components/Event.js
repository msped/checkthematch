import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import yellow_card from "../images/yellow_card.png";
import red_card from "../images/red_card.png";

export default function Event({ event, player }) {
    const sub = (item, player) => {
        return (
            <Stack direction="row" spacing={0}>
                {item.player.name === player.name ? (
                    <ArrowDownwardIcon
                        style={{ color: "#f20000" }}
                        sx={{ height: "20px" }}
                    />
                ) : (
                    <ArrowUpwardIcon
                        style={{ color: "#42ce62" }}
                        sx={{ height: "20px" }}
                    />
                )}
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {item.time.elapsed}
                    {item.time.extra ? "+" + item.time.extra : ""}"
                </Typography>
            </Stack>
        );
    };

    const card = (item) => {
        return (
            <Stack direction="row" spacing={0}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <img
                        alt={item.detail}
                        src={
                            item.detail === "Yellow Card"
                                ? yellow_card
                                : red_card
                        }
                        height="15px"
                        style={{ marginRight: "5px" }}
                        title={item.comments}
                    />
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {item.time.elapsed}
                        {item.time.extra ? "+" + item.time.extra : ""}"
                    </Typography>
                </Box>
            </Stack>
        );
    };

    return event.type === "Card" ? card(event) : sub(event, player);
}
