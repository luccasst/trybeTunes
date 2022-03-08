import React from 'react';
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
            <p data-testid="header-user-name">{name.name}</p>
          )}
      </header>
    );
  }
}

export default Header;
