import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '23%',
    margin: `${theme.spacing(1.5)}px`,
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    height: 150,
  },
  likeButton: {
    padding: '6px',
  },
}));

export const DigiCard = (props) => {
  const { name, level, img } = props;
  const [liked, setLiked] = useState(false);
  const classes = useStyles();

  const likeUnlikeDigimon = (like) => {
    axios.post('/digihero/api/Logger', {
      message: `User ${like ? 'liked' : 'unliked'} ${name}.`,
    });
    setLiked(like);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component='h5' variant='h5'>
            {name}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {level}
          </Typography>
          <IconButton
            aria-label='like/unlike'
            className={classes.likeButton}
            onClick={() => likeUnlikeDigimon(!liked)}
          >
            {liked ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </CardContent>
      </div>
      <CardMedia className={classes.cover} image={img} title={name} />
    </Card>
  );
};
