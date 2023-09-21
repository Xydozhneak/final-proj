import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function NotFound() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#gray', height: '80vh' }}>
          <h2>404</h2>
          <p>NOT FOUND</p>
        </Box>
      </Container>
    </React.Fragment>
  );
}
