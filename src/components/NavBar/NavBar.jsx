import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import useStyles from './styles';

// eslint-disable-next-line react/function-component-definition
const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            style= {{ outline: 'none' }}
            onClick={() => {}}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
        )}
        <IconButton color="inherit" sx={{ ml: 1}} onClick={() => {}}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        {!isMobile && (
          'Search...'
        )}
        <div>
          {!isAuthenticated ? (
            <Button color="inherit" onClick={() => {}}>
              Login &nbsp; <AccountCircle />
            </Button>
          ) : (
            <Button 
              color="inherit" 
              // component={Link} 
              // to={`/profile/:id`} 
              className={classes.linkButton} 
              onClick={() => {}}
            >
              {!isMobile && (
                <>My Movies &nbsp;</>
              )}
              <Avatar 
                style={{ width: '30px', height: '30px' }} 
                alt="User Avatar"
                
              />
            </Button>
          )}
        </div>
        {isMobile && (
          'Search...'
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
