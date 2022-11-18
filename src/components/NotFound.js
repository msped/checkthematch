import React from "react";
import {
    Container,
    Typography,
    Button,
    Stack,
    Card,
    CardContent,
    Box,
} from "@mui/material";

export default function NotFound() {
    return (
        <Container maxWidth="md" component={Box} mt={5}>
            <Card sx={{ minHeight: "40vh" }} mt={5}>
                <CardContent>
                    <Stack direction="column" spacing={4}>
                        <Typography
                            variant="h2"
                            component="h1"
                            my={4}
                            sx={{ textAlign: "center" }}
                        >
                            404 Page not found
                        </Typography>

                        <Typography
                            color="text.secondary"
                            variant="body1"
                            my={3}
                            sx={{ textAlign: "center" }}
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
