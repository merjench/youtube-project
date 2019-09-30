import React from 'react';
import { Paper, Typography } from '@material-ui/core';


const VideoInfo = ({videoInfo}) => {
  if(!videoInfo) return <div>Loading Video...</div>

  const video = `https://www.youtube.com/embed/${videoInfo.id.videoID}`

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={video}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {videoInfo.snippet.title} - {videoInfo.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {videoInfo.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{videoInfo.snippet.description}</Typography>
      </Paper>
    </React.Fragment>

  );
}

export default VideoInfo;
