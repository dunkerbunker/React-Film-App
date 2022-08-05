import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import { useGetActorDetailsQuery } from '../../services/TMDB';

// use params to get actor id
// new redux toolkit query to get actor details
// look at tmdb doc
// use getactorhook to get actor details

// eslint-disable-next-line react/function-component-definition
const Actors = () => {
  const { id } = useParams();
  const history = useHistory();

  const { data, isFetching, error } = useGetActorDetailsQuery(id);

  if(isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    )
  }

  if(error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color="primary">Go Back</Button>
      </Box>
    )
  }
  return (
    <div>Actors</div>
  );
};

export default Actors;
