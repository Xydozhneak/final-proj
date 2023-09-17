import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function BigScreen({ handleToggleSearch, handleCloseNavMenu, isSearchOpen }) {
  return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/narutoQuizes'}>
              <Button
                key={1}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Naruto Quize
              </Button>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/narutoQuizes/create'}>
              <Button
                key={2}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Create Quize
              </Button>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/narutoQuizes/favourite'}>
              <Button
                key={3}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Favourites Quizes
              </Button>
            </Link>

            {isSearchOpen ? (
              <div>
                <input type="text" placeholder="Search..." />
                <button onClick={handleToggleSearch}>Close</button>
              </div>
            ) : (
              <Button
                key={4}
                onClick={handleToggleSearch}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Search
              </Button>
            )}
          </Box>
  );
}
