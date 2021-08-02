import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Searchable } from '../Searchable';
import { DigiList } from '../DigiList';
import useAxios from 'axios-hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(1.5)}px`,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const DigiPane = () => {
  const classes = useStyles();
  const [level, setLevel] = useState('Rookie');
  const [{ data, loading }] = useAxios(`/digihero/api/digimon/level/${level}`);

  return (
    <Box className={classes.root}>
      <Searchable level={level} onChangeLevel={setLevel} />
      {!loading && data && <DigiList digimons={data} />}
    </Box>
  );
};
