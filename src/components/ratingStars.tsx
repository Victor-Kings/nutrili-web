import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from '../styles/profile.module.scss'

export function SimpleRating() {
  return (
    <div>
      <Box component="fieldset"  borderColor="transparent">
        <Typography component="legend" color='textPrimary' >Ranking</Typography>
        <Rating value={4} readOnly />
      </Box>
    </div>
  );
}