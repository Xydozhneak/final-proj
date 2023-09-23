import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../../store/services/quizesCard/actions';

export default function BigScreen({ handleToggleSearch, handleCloseNavMenu, isSearchOpen }) {
  const { filter } = useSelector((state) => state.quizCardReducer);
  const dispatch = useDispatch();
  const handleChangeFilter = (e) => {
    dispatch(actions.filterAction(e.target.value));
  };

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
                <TextField sx={{ margin: '5px', backgroundColor: 'white' }}
                value={filter}
                onChange={handleChangeFilter}
                placeholder="Search..." />
                <Button sx={{ marginTop: '15px', color: 'white' }} onClick={handleToggleSearch}>Close</Button>
              </div>
            ) : (
              <Button
                key={4}
                onClick={handleToggleSearch}
                sx={{
                  my: 2, color: 'white', display: 'block',
                }}
              >
                Search
              </Button>
            )}
          </Box>
  );
}
