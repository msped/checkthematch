import React from "react";
import {
    Container,
    Typography,
    Button,
    Stack,
    Card,
    CardContent,
} from "@mui/material";

export default function NotFound() {
    return (
        <Container maxWidth="md" sx={{ marginTop: 5 }}>
            <Card sx={{ minHeight: "40vh" }}>
                <CardContent>
                    <Stack direction="column" spacing={4}>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{ textAlign: "center", marginY: 4 }}
                        >
                            404 Page not found
                        </Typography>

                        <Typography
                            color="text.secondary"
                            variant="body1"
                            sx={{ marginY: 3, textAlign: "center" }}
                        >
                            You head back, I'll hope the fence and grab the
                            ball.
                        </Typography>

                        <Stack alignItems="center">
                            <Button
                                variant="contained"
                                href="/"
                                sx={{ width: "50%" }}
                            >
                                Go to Home
                            </Button>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}
