import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { navBarLinkStyleMax, navBarLinkStyleMin } from './navStyle';
import BigScreen from './NavBarComponents/BigScreenNavBar';
import MobileScreen from './NavBarComponents/MobileScreen';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link style={{ textDecoration: 'none', color: 'white' }} to={'/narutoQuizes'}>
            <Typography variant="h6" noWrap component="a" href="/" sx={navBarLinkStyleMax}>
              NARUTO QUIZE
            </Typography>
          </Link>
           <MobileScreen handleToggleSearch ={handleToggleSearch}
           handleCloseNavMenu = {handleCloseNavMenu}
           anchorElNav={anchorElNav}
           handleOpenNavMenu = {handleOpenNavMenu}
           isSearchOpen={!isSearchOpen}/>
          <Link style={{ textDecoration: 'none', color: 'white' }} to={'/narutoQuizes'}>
          <Typography variant="h5" noWrap component="a" href="/" sx={navBarLinkStyleMin}>
            NARUTO QUIZE
          </Typography>
          </Link>
           <BigScreen
           handleToggleSearch ={handleToggleSearch}
           handleCloseNavMenu = {handleCloseNavMenu}
           isSearchOpen={!isSearchOpen} />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
