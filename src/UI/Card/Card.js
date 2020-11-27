import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    justifySelf: 'center',
  },
  media: {
    height: 250,
  },
});

export default function MediaCard({character}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={character.image}
          title={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Status: {character.status}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Species: {character.species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gender: {character.gender}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Popover 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 100, left: 750 }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        >
        <Typography>
          <img src={character.image} alt='' />
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
            {character.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Status: {character.status}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Species: {character.species}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Gender: {character.gender}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Type: {character.type}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Origin: {character.origin.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Location: {character.location.name}
        </Typography>
      </Popover>
    </Card>
  );
}