import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';
import { Movie } from '..';

// eslint-disable-next-line react/function-component-definition
const MovieList = ({ movies }) => {
  const classes = useStyles();

  console.log(movies);

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  )
}

export default MovieList