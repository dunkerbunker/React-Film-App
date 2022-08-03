import React, { useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { ExitToApp } from '@mui/icons-material';

import { userSelector } from '../../features/auth';

// eslint-disable-next-line react/function-component-definition
const Profile = () => {

  const { user } = useSelector(userSelector);

  const favouriteMovies = [];

  const logout = () => {
    localStorage.clear();
    window.locaation.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      { !favouriteMovies.length ? (
        <Typography variant="h5">Add favourites or watchlist some movies to see them here!</Typography>
      ) : (
        <Box>
          FAVOURITE MOVIES
        </Box>
      )}
    </Box>
  );
};

export default Profile;
