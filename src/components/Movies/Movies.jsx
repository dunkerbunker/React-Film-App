import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelecter } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';

// eslint-disable-next-line react/function-component-definition
const Movies = () => {
  const { data } = useGetMoviesQuery();

  return (
    <div>Movies</div>
  );
};

export default Movies;
