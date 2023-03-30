import React from "react";
import { Typography, Stack } from "@mui/material";

import Event from "../components/Event";

export default function Player({ player, events }) {
    return (
        <Stack direction="row" spacing={1}>
            <Typography>{player.number}.</Typography>
            <Typography>{player.name}</Typography>
            {events
                ? events.map((item, i) => (
                      <Event key={i} event={item} player={player} />
                  ))
                : ""}
        </Stack>
    );
}
