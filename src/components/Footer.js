import React from 'react';
import { 
  Container,
  Link,
  Typography,
  Box,
  Grid,
  Stack,
} from '@mui/material';

import topLeagues from '../topLeagues'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Check the Match
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5rem'
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={1} mb={5}>
            {/* Top Leagues */}
            <Grid item xs={12} md={4}>
              <Stack direction='column' spacing={1}>
                <Typography variant='h6' color="text.secondary">
                  Top Leagues
                </Typography>
                {topLeagues.map((item) => (
                  <Typography
                    key={item.id}
                    variant='body1'
                    color="text.secondary"
                    component={Link}
                    underline='hover'
                    href={`/league/${item.id}`}
                  >{item.league.name}</Typography>
                ))}
              </Stack>
            </Grid>
            {/* Legal */}
            <Grid item xs={12} md={4}>
              <Stack direction="column" spacing={1}>
                <Typography variant='h6' color="text.secondary">
                  Legal
                </Typography>
                {/* Terms & Conditions */}
                <Typography
                  variant='body1'
                  color="text.secondary"
                  component={Link}
                  underline='hover'
                  href="/terms-conditions"
                >Terms and Conditions</Typography>
                {/* Privacy Policy */}
                <Typography
                  variant='body1'
                  color="text.secondary"
                  component={Link}
                  underline='hover'
                  href="/privacy-policy"
                >Privacy Policy</Typography>
              </Stack>
            </Grid>
            {/* Contact */}
            <Grid item xs={12} md={4}>
              <Stack direction="column" spacing={1}>
                <Typography variant='h6' color="text.secondary">
                  Get in touch
                </Typography>
                <Typography
                  variant='body1'
                  color="text.secondary"
                  component={Link}
                  underline='hover'
                  href="/contact"
                >Contact</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}