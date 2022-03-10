import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Login from './Login';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      buttonDisabled: true,
      loading: false,
      albuns: [],
      artistName: '',
      searchFor: false,
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

  handleButton = async () => {
    const { search } = this.state;
    this.setState({
      loading: true,
      artistName: search,
      search: '',
      buttonDisabled: true,
    });
    const requisicao = await searchAlbumsAPI(search);
    this.setState({
      loading: false,
      searchFor: true,
      albuns: [...requisicao],
    });
  }

  render() {
    const { search, buttonDisabled, loading, searchFor, albuns, artistName } = this.state;
    return (
      <>
        <div data-testid="page-search">
          <Header />
          <form>
            <input
              className="inputButton"
              value={ search }
              type="text"
              data-testid="search-artist-input"
              onChange={ this.handleInput }
            />
            <button
              className="Button"
              type="button"
              data-testid="search-artist-button"
              disabled={ buttonDisabled }
              onClick={ this.handleButton }
            >
              Pesquisar
            </button>
          </form>
        </div>
        {loading && <Login />}
        {!loading && albuns.length < 1 && searchFor
      && <h2>Nenhum álbum foi encontrado</h2>}
        {!loading && albuns.length >= 1 && (
          <>
            <h2>
              Resultado de álbuns de:
              {` ${artistName}`}
            </h2>
            <ul>
              {albuns.map((album) => (
                <li key={ album.collectionId }>
                  <Link
                    data-testid={ `link-to-album-${album.collectionId}` }
                    to={ `/album/${album.collectionId}` }
                  >
                    <img src={ album.artworkUrl100 } alt={ album.collectionName } />
                    <h3>{ album.collectionName }</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </>

    );
  }
}

export default Search;
