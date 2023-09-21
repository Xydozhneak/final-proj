import React from 'react';
import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function MainContainer() {
  return (
    <React.Fragment>
      <NavBar />
      <CssBaseline />
          <Outlet />
      <Footer />
    </React.Fragment>
  );
}
