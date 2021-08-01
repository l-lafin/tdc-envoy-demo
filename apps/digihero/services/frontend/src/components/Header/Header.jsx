import React from 'react';
import { AppBar, Link, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserInfo } from '../UserInfo';

const useStyles = makeStyles((theme) => ({
  digihero: {
    flexGrow: 1,
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(digihero/img/digihero.png)',
    height: 40,
  },
  tdc: {
    margin: `0px ${theme.spacing(1.5)}px`,
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(digihero/img/logo-tdc.png)',
    flexGrow: 1,
    height: 35,
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' color='default'>
      <Toolbar>
        <Link
          href='https://thedevconf.com/?'
          title='TDC'
          className={classes.tdc}
        />
        <Link href='#' title='Digihero' className={classes.digihero} />
        <UserInfo />
      </Toolbar>
    </AppBar>
  );
};
