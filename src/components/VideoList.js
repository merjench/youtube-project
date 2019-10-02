import React from 'react';
import { Grid } from "@material-ui/core";
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onSelect }) => {
   // console.log("List of Videos :",  props.videos);
  const listOfVideos = videos.map((video) => (
    <VideoListItem
       onSelect={onSelect}
       value={video.value}
       key={video.id.videoId}
       video={video}
     />
  )
)
  return (
    <Grid container spacing={10}>
     {listOfVideos}
    </Grid>
  )
}

export default VideoList
