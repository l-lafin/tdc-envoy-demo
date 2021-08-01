import React from 'react';
import { Box, MenuItem, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const digimonLevelOptions = [
  'Fresh',
  'Training',
  'In Training',
  'Rookie',
  'Champion',
  'Ultimate',
  'Mega',
];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(1.5)}px`,
    display: 'flex',
    flexGrow: 1,
  },
  field: {
    margin: `${theme.spacing(1.5)}px`,
    flexGrow: 0.25,
  },
}));

export const Searchable = (props) => {
  const { level, onChangeLevel } = props;
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <TextField
        className={classes.field}
        label='Level'
        onChange={(event) => onChangeLevel(event.target.value)}
        select
        value={level}
        variant='outlined'
      >
        {digimonLevelOptions.map((level) => (
          <MenuItem key={level} value={level}>
            {level}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};
