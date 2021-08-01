import React from 'react';
import * as lodash from 'lodash';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DigiCard } from '../DigiCard';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(1.5)}px`,
    flexGrow: 1,
    flexWrap: 'wrap',
    display: 'flex',
    overflowY: 'auto',
    maxHeight: '700px',
  },
}));

export const DigiList = (props) => {
  const { digimons } = props;
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {digimons.map((digimon) => (
        <DigiCard
          key={lodash.uniqueId('digi-card')}
          name={digimon.name}
          level={digimon.level}
          img={digimon.img}
        />
      ))}
    </Box>
  );
};
