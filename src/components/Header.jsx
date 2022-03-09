import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: true,
    };
  }

  componentDidMount() {
    getUser().then((user) => {
      this.setState({
        name: user,
        loading: false,
      });
    });
  }

  render() {
    const { name, loading } = this.state;
    return (
      <header data-testid="header-component">
        {loading ? (<h2>Carregando...</h2>)
          : (
            <>
              <p data-testid="header-user-name">{name.name}</p>
              <nav>
                <Link
                  className="trybeTunes"
                  to="/search"
                  data-testid="link-to-search"
                >
                  Search
                </Link>
                <Link
                  className="trybeTunes"
                  to="/favorites"
                  data-testid="link-to-favorites"
                >
                  Favorites
                </Link>
                <Link
                  className="trybeTunes"
                  to="/profile"
                  data-testid="link-to-profile"
                >
                  Profile
                </Link>
              </nav>
            </>
          )}
      </header>
    );
  }
}

export default Header;
