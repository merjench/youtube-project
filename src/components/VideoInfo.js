import React from 'react';
import { Paper, Typography } from '@material-ui/core';


const VideoInfo = (props) => {
  // if(!videoInfo) return <div>Loading Video...</div>




  // const videoSrc = `https://www.youtube.com/embed/${videoInfo.id.videoID}`

  console.log("current video", props.videoInfo)

  return (
    <div> this is video info </div>
    // <React.Fragment>
    //   <Paper elevation={6} style={{ height: "70%" }}>
    //     <iframe frameBorder= "0" height="100%" width="100%" title="Video Player" scr={videoSrc}/>
    //   </Paper>
    //   <Paper elevation={6} style={{ padding: '15px'}}>
    //
    //   </Paper>
    // </React.Fragment>

  )
}

export default VideoInfo;
