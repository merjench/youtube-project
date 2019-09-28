import React from 'react';

//class based components because we will be managing state


class SearchBar extends React.Component {

  state = {
    searchTerm: '',
  }

  render(){
    return (
      <h1> Search Bar </h1>
    )
  }

}

export default SearchBar;
