import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoInfo = ({videoInfo}) => {
  if(!videoInfo) return (
    <div>Loading...</div>
  )

  const videoSrc = `https://www.youtube.com/embed/${videoInfo.id.videoId}`

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          id="player"
          src={videoSrc}
          height="100%"
          width="100%"
          title="video-playing"
          frameBorder="1"
          />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h3">
          {videoInfo.snippet.title} - {videoInfo.snippet.channelTitle}
        </Typography>
        <Typography variant="h4">
          {videoInfo.snippet.channelTitle}
        </Typography>
        <Typography variant="h5">
          {videoInfo.snippet.description}
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

export default VideoInfo;
