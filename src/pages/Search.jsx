import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      buttonDisabled: true,
    };
  }

  handleInput = ({ target: { value } }) => {
    const lenghtInput = value.length;
    const caracterMin = 2;
    this.setState({
      search: value,
      buttonDisabled: lenghtInput < caracterMin,
    });
  };

  render() {
    const { search, buttonDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            value={ search }
            type="text"
            data-testid="search-artist-input"
            onChange={ this.handleInput }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ buttonDisabled }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
