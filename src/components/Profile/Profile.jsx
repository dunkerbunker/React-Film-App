import React, { useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { ExitToApp } from '@mui/icons-material';

import { userSelector } from '../../features/auth';
import { useGetListQuery } from '../../services/TMDB';
import { RatedCards } from '..';

// eslint-disable-next-line react/function-component-definition
const Profile = () => {

  const { user } = useSelector(userSelector);

  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1});
  const { data: watchlistMovies, refetch: refetchWatchlisted } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1});

  useEffect(() => {
    refetchFavorites();
    refetchWatchlisted();
  }, [])

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
      { !favoriteMovies?.results?.length && !watchlistMovies?.results?.length 
      ? (
        <Typography variant="h5">Add favourites or watchlist some movies to see them here!</Typography>
      ) : (
        <Box>
          <RatedCards title="My Favorite Movies" data={favoriteMovies} />
          <RatedCards title="My Watchlist" data={watchlistMovies} />
        </Box>
      )}
    </Box>
  );
};

export default Profile;
