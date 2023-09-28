import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export default function FavouriteQuize() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
          <Typography>
            <h2>FAVOURITE QUIZE</h2>
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
