import React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoListItem = ({ video, onSelect })=> {
  return (
  <Grid item xs={12}>
    <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onSelect(video)}>
      <img
        style={{ marginRight: "20px" }}
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
        />
      <Typography variant="title">
        <b>{video.snippet.title}</b>
      </Typography>
    </Paper>
  </Grid>
)

}

export default VideoListItem
