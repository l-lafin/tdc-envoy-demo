import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserInfo } from '../UserInfo';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    fontWeight: 600,
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' color='default'>
      <Toolbar>
        <Typography variant='h5' className={classes.title}>
          Digihero
        </Typography>
        <UserInfo />
      </Toolbar>
    </AppBar>
  );
};
