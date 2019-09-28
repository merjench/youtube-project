// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
// fetching grid
import { Grid } from '@material-ui/core';
// import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
// import VideoList from './components/VideoList'
import VideoInfo from './components/VideoInfo';

class App extends Component {

  render() {
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing ={16}>
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={8}>
              <VideoInfo />
            </Grid>
            <Grid item xs={4}>
              {/* Video List*/}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

}

export default App;
