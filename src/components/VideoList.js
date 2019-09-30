import React from 'react';
import { Grid } from "@material-ui/core";
import VideoItem from './VideoItem'

const VideoList = ({videos}) => {
   // console.log("List of Videos :",  props.videos);
  const listOfVideos = videos.map((video) => <VideoItem />)
  return listOfVideos

}

export default VideoList
