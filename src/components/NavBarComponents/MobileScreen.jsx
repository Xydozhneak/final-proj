import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Button, IconButton, Menu, TextField,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/services/quizesCard/actions';

export default function MobileScreen({
  handleToggleSearch,
  handleCloseNavMenu,
  anchorElNav,
  handleOpenNavMenu,
  isSearchOpen,
}) {
  const { filter } = useSelector((state) => state.quizCardReducer);
  const dispatch = useDispatch();
  const handleChangeFilter = (e) => {
    dispatch(actions.filterAction(e.target.value));
  };
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/narutoQuizes'}>
          <Button
            key={1}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            Naruto Quize
          </Button>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/narutoQuizes/create'}>
          <Button
            key={2}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            Create Quize
          </Button>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/narutoQuizes/favourite'}>
          <Button
            key={3}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            Favourites Quizes
          </Button>
        </Link>

        {isSearchOpen ? (
           <div>
           <TextField sx={{ backgroundColor: 'white' }}
           value={filter}
           onChange={handleChangeFilter}
           placeholder="Search..." />
           <Button sx={{ color: 'white' }} onClick={handleToggleSearch}>Close</Button>
         </div>
        ) : (
          <Button
            key={4}
            onClick={handleToggleSearch}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            Search
          </Button>
        )}
      </Menu>
    </Box>
  );
}
