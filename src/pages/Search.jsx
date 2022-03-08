import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-search">
          <p>Search</p>
        </div>
      </>
    );
  }
}

export default Search;
