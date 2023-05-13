import React, { useState } from 'react';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { CatchingPokemon, DarkMode, LightMode, Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import PokeIcon from '../../images/pokeball.png';

const navItems = ['pokemons', 'about'];

const Navbar = ({ theme = false, toggleTheme }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar component="nav" color="secondary">
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={handleClick}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {navItems.map((item) => (
            <Link key={item} to={`/${item}`}>
              <MenuItem onClick={handleClose}>{item}</MenuItem>
            </Link>
          ))}
        </Menu>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}
        >
          Pokedex <img src={PokeIcon} style={{ height: '30px', marginLeft: '10px' }} alt="pokeball" />
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: '80px' }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff' }}>
              <Link to={`/${item}`}>{item}</Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
      <Button
        variant="outlined"
        onClick={toggleTheme}
        color="inherit"
        sx={{ position: 'absolute', top: { xs: '5px', sm: '15px' }, right: '10px' }}
      >
        {theme === 'light' ? <LightMode color="inherit" /> : <DarkMode color="inherit" />}
      </Button>
    </AppBar>
  );
};

export default Navbar;
