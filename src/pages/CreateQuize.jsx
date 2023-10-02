import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CreateQuizeForm from '../components/Forms/CreateQuizeForm';

export default function FavouriteQuize() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: '100vh' }} >
          <h2>CREATE YOUR QUIZE</h2>
          <CreateQuizeForm />
        </Box>
      </Container>
    </React.Fragment>
  );
}
