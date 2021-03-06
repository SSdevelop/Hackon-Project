import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    // maxWidth: 500,
    margin: 10,
    // width: '50%'
  },
  media: {
    height: '30vh',
  },
});
export default function MediaCard({ type, img, description }) {
    const classes = useStyles();
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title={type}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {type}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button variant="contained" color="primary">
          Book
        </Button>
        <Button variant="contained" color="primary">
          Donate
         </Button>
        </CardActions>
      </Card>
    );
  }
  

