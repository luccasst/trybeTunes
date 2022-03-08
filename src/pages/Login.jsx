import React from 'react';
import { Redirect } from 'react-router';

const apiUser = require('../services/userAPI');

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isDisabled: true,
      requestReceived: false,
      loading: false,
    };
  }

  handleEvent = ({ target: { value } }) => {
    const lenghtInput = value.length;
    const caracterMin = 3;
    this.setState({
      name: value,
      isDisabled: lenghtInput < caracterMin,
    });
  };

  buttonEnable = async () => {
    const { name } = this.state;
    this.setState({ loading: true });
    await apiUser.createUser({ name });
    this.setState({
      requestReceived: true,
      loading: false,
    });
  }

  render() {
    const { name, isDisabled, requestReceived, loading } = this.state;
    return (
      <div data-testid="page-login">
        { loading ? (<h3>Carregando...</h3>) : (
          <form>
            <label htmlFor="name-input">
              <input
                placeholder="Digite seu nome"
                name="name"
                data-testid="login-name-input"
                type="text"
                value={ name }
                onChange={ (e) => this.handleEvent(e) }
              />
            </label>
            <button
              type="button"
              disabled={ isDisabled }
              onClick={ () => this.buttonEnable() }
              data-testid="login-submit-button"
            >
              Entrar
            </button>
          </form>
        )}
        { requestReceived ? <Redirect to="/search" /> : null}
      </div>
    );
  }
}

export default Login;
