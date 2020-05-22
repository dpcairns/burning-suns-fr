import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import request from "superagent"

import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Link from '@material-ui/core/Link'
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
})



export default function FeaturedPost(props) {
  const classes = useStyles()
  const { post } = props
  const token = props.token;
//const moment = require('moment')
//moment().format()
//const cleanDate = moment(DATEVAR, 'MM-DD-YYYY').format('ll')

const getNote = async(e, id) => {
  const note = await request.get(`https://stark-mesa-84010.herokuapp.com/api/note/${id}`)
  console.log(note)
}


const updateNote = async(e, id) => {
  const note = await request.get(`https://stark-mesa-84010.herokuapp.com/api/note/${id}`)
  console.log(note)
}

const deleteNote = async(e, id) => {
  const posted = await request
  .delete(`https://stark-mesa-84010.herokuapp.com/api/note/${id}`)
  .set("Authorization", token);
  const notes = await request.get('https://stark-mesa-84010.herokuapp.com/api/notes').set("Authorization", token)
  props.updateNotes(notes.body)
}

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              {post.wish ?
                  <Brightness4Icon/>
                  : <CommentIcon/>
              }
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date} 
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.body}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.city}
              </Typography>
              <Link href={`/DetailPage/${post.city},%20${post.state}`}>
                <Typography variant="subtitle1" color="primary">
                    Details for City
                </Typography>
              </Link>
            </CardContent>
            <IconButton aria-label="delete" 
                className={classes.margin}
                onClick={e => getNote(e, post.id)}
                >
              <DeleteSharpIcon className={classes.icon} />
            </IconButton>
            <IconButton aria-label="edit" 
                className={classes.margin}
                onClick={e => updateNote(e, post.id)}
                >
              <EditIcon className={classes.icon} />
            </IconButton>
          </div>
          <Hidden xsDown>
            <CardMedia className={
                classes.cardMedia}
                image={
                    //Have two different types of images based on if it's a wish or not
                    post.wish ?
                    'data:image/jpeg;base64,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'
                    : 'data:image/jpeg;base64,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'
                } 
                title={
                    post.wish ?
                    'Wishing on a star'
                    : 'Night sky note'
                } />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};