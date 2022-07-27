import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelecter } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

// eslint-disable-next-line react/function-component-definition
const Movies = () => {
  const { data, error, isFetching  } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if(!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Try another one.
        </Typography>
      </Box>
    )
  }

  if (error) return 'Error';

  return (
    <MovieList movies={data} />
  );
};

export default Movies;
