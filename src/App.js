import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList'
import VideoInfo from './components/VideoInfo';

// console.log(process.env.REACT_APP_SECRET_KEY)

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null,
  }

// shows below search result when page initially loads instead of an empty page
  componentDidMount() {
    this.onSearchSubmit('Game of Thrones')
  }

// ferch youtube data and update state
  onSearchSubmit = async (searchFilter) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        key: process.env.REACT_APP_SECRET_KEY,
        q: searchFilter,
      }
    });
    // debugger
    // console.log("video results", response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

// on selecting a new video, change state
  onSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    // debugger
    // console.log("Found :",this.state.videos.length)
    return (
      <Grid justify="center" container spacing={12}>
        <Grid item xs={10}>
          <Grid container spacing ={10}>
            <Grid item xs={12}>
              <SearchBar
                onSubmit={this.onSearchSubmit}
                />
            </Grid>
            <Grid item xs={8}>
              <VideoInfo
                videoInfo={this.state.selectedVideo}
                />
            </Grid>
            <Grid item xs={4}>
              <VideoList
                videos={this.state.videos}
                onSelect={this.onSelect}
                />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

}

export default App;
