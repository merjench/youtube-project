import React from 'react';
import { Paper, TextField } from '@material-ui/core';

//class based components because we will be managing state
class SearchBar extends React.Component {

  state = {
    searchFilter: '',
  }

  handeChange = event => {
    // console.log("From Search Bar", event.target.value)
    this.setState({
      searchFilter: event.target.value
    })
  }

  handleSubmit = event => {
    // prevents refresh of the page
    event.preventDefault();
    // console.log("Search Value is ", this.state.searchFilter)
    this.props.onSubmit(this.state.searchFilter)
  }

  render(){
    return (
      <Paper elevation={15} style={{ padding: '20px' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label = "Search..."
            value={this.state.searchFilter}
            onChange={this.handeChange}/>
        </form>
      </Paper>
    )
  }
}

export default SearchBar;
